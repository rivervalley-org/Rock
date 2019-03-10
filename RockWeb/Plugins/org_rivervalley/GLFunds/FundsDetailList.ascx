<%@ Control Language="C#" AutoEventWireup="true" CodeFile="FundsDetailList.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GLFunds.FundsDetailList" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlFundDetailsList" CssClass="panel panel-block" runat="server">

            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-th-list"></i> GL Extended Funds List</h1>
            </div>
            <div class="panel-body">

                <Rock:ModalAlert ID="mdGridWarning" runat="server" />

                <Rock:Grid ID="gFunds" runat="server" AllowSorting="true" TooltipField="Description">
                    <Columns>
                        <asp:BoundField DataField="FinancialAccountId" HeaderText="Account" SortExpression="FinancialAccountId" />
                        <asp:BoundField DataField="FinancialAccount.Name" HeaderText="Name" SortExpression="FinancialAccount.Name" />
                        <asp:BoundField DataField="Company" HeaderText="Company" SortExpression="Company" />
                        <asp:BoundField DataField="Fund" HeaderText="Fund" SortExpression="Fund" />
                        <asp:BoundField DataField="RevenueAccount" HeaderText="Revenue Account" SortExpression="RevenueAccount" />
                        <asp:BoundField DataField="RevenueDepartment" HeaderText="Revenue Department" SortExpression="RevenueDepartment" />
                        <asp:BoundField DataField="ProjectCode" HeaderText="Project Code" SortExpression="ProjectCode" />
                        
                    </Columns>
                </Rock:Grid>

            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
