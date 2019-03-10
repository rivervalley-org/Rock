<%@ Control Language="C#" AutoEventWireup="true" CodeFile="NewEmployeeUpdate.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Utility.NewEmployeeUpdate" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlButtons" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    New Employee Membership Update
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" Visible ="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnMembershipUpdate" runat="server" Text="Membership Update" CssClass="btn btn-primary" OnClick="btnMembershipUpdate_Click" CausesValidation="false" />
                </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>