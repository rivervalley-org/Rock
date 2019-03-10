<%@ Control Language="C#" AutoEventWireup="true" CodeFile="LaborPoolTransactionDetails.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.LaborPool.LaborPoolTransactionDetails" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:Panel ID="pnlDateSelection" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Labor Pool Transaction Details
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPickerStartDate" runat="server" Label="Start Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPickerEndDate" runat="server" Label="End Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div>
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnContinue" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnContinue_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                                
            </div>
        </asp:Panel>        
        <asp:Panel ID="pnlTotals" runat="server" CssClass="panel panel-block" Visible="true">            
            <asp:HiddenField ID="hfStartDate" runat="server" />
            <asp:HiddenField ID="hfEndDate" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Labor Pool Transactions Report Totals - <asp:Literal ID="lDateStringTotals" runat="server" />
                </h1>
            </div>    
            <div class="panel-body">
				   <table class="grid-table table table-bordered table-striped table-hover">
                    <tr>
                        <th style="text-align: left;">Fund</th>
                        <th style="text-align: left;">GL Acct</th>
                        <th style="text-align: left;">Proj Code</th>
                        <th style="text-align: left;">Debit</th>
                        <th style="text-align: left;">Credit</th>
                        <th style="text-align: left;">Balance</th>
                    </tr>
                    <asp:Literal ID="lReportString" runat="server" />            
                </table>
                <div class="actions">
	                <p></p>
	                <asp:LinkButton ID="btnPrint" runat="server" Text="Print" CssClass="btn btn-primary" OnClick="btnPrint_Click" CausesValidation="false" Visible="true" />
                </div>  
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDetails" CssClass="panel panel-block" runat="server" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Labor Pool Transactions Detail Report - <asp:Literal ID="lDateStringDetails" runat="server" />
                </h1>
            </div>
            <div class="panel-body">
                <table class="grid-table table table-bordered table-striped table-hover">
                    <tr>
                        <th style="text-align: left;">Id</th>
                        <th style="text-align: left;">Description</th>
                        <th style="text-align: left;">Debit</th>
                        <th style="text-align: left;">Credit</th>
                        <th style="text-align: left;">Transaction Date</th>
                        <th style="text-align: left;">Fund</th>
                        <th style="text-align: left;">GL Acct</th>
                        <th style="text-align: left;">Project ID</th>
                    </tr>
                    <asp:Literal ID="lOutputString" runat="server" />            
                </table>
            </div>    
        </asp:Panel>
        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Debug Panel
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lDebugString" runat="server" />
                    </div>
                </div>        
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>  