define('ace/ext/com.blueboxmoon.mention_autocomplete', function (require, exports, module) {
    "use strict";

    console.log(require);
    var Autocomplete = require('ace/autocomplete').Autocomplete;
    var Config = require('ace/config');
    var Editor = require('ace/editor').Editor;

    // Find last segment that matches /@[\w ]+/
    var getCompletionPrefix = function (editor) {
        var pos = editor.getCursorPosition();
        var line = editor.session.getLine(pos.row);
        var idx = line.lastIndexOf('@');

        if (idx === -1) {
            return '';
        }
        var prefix = line.substring(idx);

        if (prefix != /@[\w ]+/.exec(prefix)) {
            return '';
        }

        return prefix;
    };

    // Custom version of stock gatherCompletions that
    // uses our custom getCompletionPrefix.
    var gatherCompletions = function (editor, callback) {
        var session = editor.getSession();
        var pos = editor.getCursorPosition();

        var prefix = getCompletionPrefix(editor);

        this.base = session.doc.createAnchor(pos.row, pos.column - prefix.length);
        this.base.$insertRight = true;

        var matches = [];
        var total = editor.completers.length;
        editor.completers.forEach(function (completer, i) {
            completer.getCompletions(editor, session, pos, prefix, function (err, results) {
                if (!err && results)
                    matches = matches.concat(results);
                // Fetch prefix again, because they may have changed by now
                callback(null, {
                    prefix: getCompletionPrefix(editor),
                    matches: matches,
                    finished: (--total === 0)
                });
            });
        });
        return true;
    };

    // Called after an ACE editor action. Allows us to attach or detach
    // an Autocomplete instance to the editor if the user has started
    // typing an @mention.
    var doLiveAutocomplete = function (e) {
        var editor = e.editor;
        var hasCompleter = editor.completer && editor.completer.activated;

        // We don't want to autocomplete with no prefix
        if (e.command.name === "backspace") {
            if (hasCompleter && !getCompletionPrefix(editor))
                editor.completer.detach();
        }
        else if (e.command.name === "insertstring" && !hasCompleter) {
            var prefix = getCompletionPrefix(editor);

            if (!editor.completer) {
                // Create new autocompleter
                editor.completer = new Autocomplete();
                editor.completer.gatherCompletions = gatherCompletions;
            }
            // Disable autoInsert
            editor.completer.autoInsert = false;
            editor.completer.showPopup(editor);
        }
    };

    // Get possible completions for the prefix the user has typed.
    var mentionAutocomplete = {
        getCompletions: function (editor, session, pos, prefix, callback) {
            prefix = prefix.substring(prefix.lastIndexOf('@') + 1);
            if (prefix.length < 5 || prefix.length > 30 || prefix.indexOf(' ') == -1) {
                callback(null, []);
                return;
            }

            var url = '/api/BBM_ProjectManagement_Utility/GetPossibleMentions?name=' + encodeURIComponent(prefix);
            $.getJSON(url, function (wordlist) {
                callback(null, wordlist.map(function (ea) {
                    return { caption: '@' + ea.FullName, value: '@' + ea.FullName + '[' + ea.Id + ']', meta: ea.Meta };
                }));
            });
        }
    };

    // Add our configuration option, enableBBMMentionAutocompletion, to the
    // ACE editor.
    Config.defineOptions(Editor.prototype, "editor", {
        enableBBMMentionAutocompletion: {
            set: function (val) {
                if (val) {
                    this.completers = [mentionAutocomplete];
                    this.commands.on('afterExec', doLiveAutocomplete);
                }
                else {
                    this.commands.removeListener('afterExec', doLiveAutocomplete);
                }
            },
            value: false
        }
    });
});
