<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripDashboardPublic.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripDashboardPublic" %>
<style>
    td.true { text-align: center;  }
    td.false { text-align: center; }
</style>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlReport" CssClass="panel panel-block" runat="server">
            <div class="panel-heading">
                <h4>
                    <asp:Literal ID="lTripName" runat="server" />
                </h4>
            </div>
            <div class="panel-body">
                <div>
                    <table class="grid-table table table-bordered table-striped table-hover">
                        <asp:Literal ID="lOutputString" runat="server" />
                    </table>
                </div>
            </div>
        </asp:Panel>
                <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <b>Debug Output:</b>
                        <Rock:RockLiteral ID="lDebugString" runat="server" />
                    </div>                   
                </div>                 
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>