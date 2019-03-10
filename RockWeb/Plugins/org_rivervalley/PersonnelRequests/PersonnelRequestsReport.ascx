<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PersonnelRequestsReport.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PersonnelRequests.PersonnelRequestsReport" %>

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
td.number, th.number {
    text-align: right;
}
tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<asp:Panel ID="pnl_header" CssClass="panel panel-block" runat="server">
    <div class="panel-heading">
        <h3>Personnel Request Report</h3>
        <table class="grid-table table table-bordered table-striped table-hover">
            <tr>
                <th style="text-align: left;">Requester</th>
                <th style="text-align: left;">Job Title</th>
                <th style="text-align: left;">Date</th>
                <th style="text-align: left;">Campus</th>
                <th style="text-align: left;">Status</th>
                <th style="text-align: left;"></th>
            </tr>
            <asp:Literal ID="lOutputString" runat="server" />
            
        </table>
    </div>
    
</asp:Panel>