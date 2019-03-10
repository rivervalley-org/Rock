<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripSentEmailReport.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripSentEmailReport" %>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

</style>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:Panel ID="pnlDateSelection" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Email Selection
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
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddGlobalTrips" runat="server" Label="Global Team" Required="false" />                        
                    </div>                    
                </div>
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnContinue" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnContinue_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                                
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlReport" CssClass="panel panel-block" runat="server" Visible ="false">
            <div class="panel-heading">
                <div class="panel-heading">
                    <h1 class="panel-title">
                        Global Teams Email Sent Report  <asp:Literal ID="lDateString" runat="server" />
                    </h1>
                </div>
            </div> 
            <div class="panel-body">   
                <table class="grid-table table table-bordered table-striped table-hover">
                    <tr>
                        <th style="text-align: left;">Person</th>
                        <th style="text-align: left;">Email Type</th>
                        <th style="text-align: left;">Date Sent</th>                        
                    </tr>
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