<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DataViewAttributeSummary.ascx.cs" Inherits="RockWeb.Plugins.rocks_pillars.Reporting.DataViewAttributeSummary" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <div class="row">

            <div class="col-md-4">

                <Rock:RockCheckBoxList ID="cblActivities" runat="server" FormGroupCssClass="rock-check-box-list js-groups-container js-all-picker" RepeatColumns="2" RepeatDirection="Vertical" CssClass="rockcheckboxlist-vertical" Label="Activities"
                                        Help="Include people in any of the selected Activities." />
            </div>

            <div class="col-md-4">
                <Rock:RockCheckBoxList ID="cblFilter" runat="server" FormGroupCssClass="rock-check-box-list js-groups-container js-all-picker" RepeatColumns="2" RepeatDirection="Vertical" CssClass="rockcheckboxlist-vertical" Label="Demographics"
                                        Help="Include people in all of the selected Demographic filters." />
            </div>

            <div class="col-md-2">
                <Rock:RockCheckBoxList ID="cblCampuses" runat="server" FormGroupCssClass="rock-check-box-list js-groups-container js-all-picker" RepeatColumns="2" RepeatDirection="Vertical" CssClass="rockcheckboxlist-vertical" Label="Campus"
                                        Help="Include people in any of the selected campuses." />
            </div>

        </div>

        <div class="row">

            <div class="col-md-2">
                <asp:LinkButton ID="btnApply" runat="server" CssClass="btn btn-primary" ToolTip="Update results" OnClick="btnApply_Click"><i class="fa fa-refresh"></i> Apply</asp:LinkButton>
            </div>

        </div> <br /> <br />

        <asp:PlaceHolder ID="phHtml" runat="server" />

        <script>
            Sys.Application.add_load(function () {
                // toggle campus checkboxes
                $('.js-all-picker label').on('click', function (e) {

                    var container = $(this).parent().find('.controls');
                    var isChecked = true;
                    container.find('input:checkbox').each(function (a) {
                        if (!$(this).prop('checked')) {
                            isChecked = false;
                        }
                    });

                    container.find('input:checkbox').each(function () {
                        $(this).prop('checked', !isChecked);
                    });

                });
            });
        </script>
    </ContentTemplate>
</asp:UpdatePanel>
