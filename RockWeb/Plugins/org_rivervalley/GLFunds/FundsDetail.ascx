<%@ Control Language="C#" AutoEventWireup="true" CodeFile="FundsDetail.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GLFunds.FundsDetail" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:HiddenField ID="hfAccountId" runat="server" />        
        <asp:HiddenField ID="hfExtendedFundId" runat="server" />
        <asp:Panel ID="pnlDetail" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Extended GL Fund Accounts
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbCompany" MaxLength="4" runat="server" Label="Company:" PropertyName="Company" />
                    </div>
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbFund" MaxLength="5" runat="server" Label="Fund:" PropertyName="Fund" />
                    </div>
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbBankAccount" MaxLength="9" runat="server" Label="Bank Account:" PropertyName="BankAccount" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbRevenueAccount" MaxLength="3" runat="server" Label="Revenue Account:" PropertyName="RevenueAccount" />
                    </div>
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbRevenueDepartment" MaxLength="3" runat="server" Label="Revenue Department:" PropertyName="RevenueDepartment" />
                    </div>
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbProjectCode" MaxLength="3" runat="server" Label="Project Code:" PropertyName="ProjectCode" />
                    </div>
                </div>


                <div class="actions">
                    <asp:LinkButton ID="btnDetail" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnDetail_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnDetailCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnDetailCancel_Click" />
                </div>
                                
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>        




