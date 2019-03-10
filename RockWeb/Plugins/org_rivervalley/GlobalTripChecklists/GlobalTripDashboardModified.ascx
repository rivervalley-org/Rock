<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripDashboardModified.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripDashboardModified" %>
<style>
    td.true { text-align: center;  }
    td.false { text-align: center; }
</style>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlTripSelection" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Selection
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddGlobalTrips" runat="server" Label="Global Team" Required="false" />                        
                    </div>                    
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnTripSelection" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnTripSelection_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnTripSelectionCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlReport" CssClass="panel panel-block" runat="server">
            <div class="panel-heading">
                <h3>
                    <asp:Literal ID="lTripName" runat="server" />
                </h3>
                <table class="grid-table table table-bordered table-striped table-hover">
                    <asp:Literal ID="lOutputString" runat="server" />
                </table>
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