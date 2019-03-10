<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CandidateReportMarriedAsCouplesSQL.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.MAP.Reports.CandidateReportMarriedAsCouplesSQL" %>
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
        <h3>MAPer Report</h3>
        <table class="grid-table table table-bordered table-striped table-hover">
            <tr>
                <th style="text-align: left;">MAPer(s)</th>
                <th style="text-align: left;">Type</th>
                <th style="text-align: left;">State</th>
                <th style="text-align: left;">Status</th>
            </tr>
            <asp:Literal ID="lOutputString" runat="server" />
        </table>
    </div>
</asp:Panel>
