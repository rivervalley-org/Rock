<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectDocuments.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectDocuments" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlDocumentList" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <div class="clearfix">
                    <h1 class="panel-title pull-left">
                        <i class="fa fa-file"></i>
                        <span>Documents</span>
                    </h1>
                </div>
            </div>

            <ul class="list-group">
                <asp:Repeater ID="rpDocument" runat="server">
                    <ItemTemplate>
                        <li class="list-group-item pm-document">
                            <%# GetCommentLink( ( int? ) Eval( "NoteId" ) ) %>
                            <a href="<%# Eval( "Url" ) %>" target="_blank"><%# Eval("FileName") %></a>
                        </li>
                    </ItemTemplate>
                </asp:Repeater>
            </ul>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>