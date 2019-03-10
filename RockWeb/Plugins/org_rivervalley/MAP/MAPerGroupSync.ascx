<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MAPerGroupSync.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.MAP.MAPerGroupSync" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlButtons" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    MAPer Group Sync
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-md-12">
                        This routine will synchronize the MAPer Group with the MAPer List and the Advocate Group with the Advocate List. Both additions and deletes will take place.
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>
                </div>
                <div cass="actions">
                    <asp:LinkButton ID="btnGroupSync" runat="server" Text="Sync" CssClass="btn btn-primary" OnClick="btnGroupSync_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    MAPer Group Sync
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <b>Sync Results</b>
                        <Rock:RockLiteral ID="lResultsString" runat="server" />
                    </div>                   
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

