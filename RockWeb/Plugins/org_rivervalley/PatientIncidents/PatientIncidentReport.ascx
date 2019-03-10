<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PatientIncidentReport.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PatientIncidents.PatientIncidentReport" %>

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
        <h3>Patient Incident Report</h3>
        <table class="grid-table table table-bordered table-striped table-hover">
            <tr>
                <th style="text-align: left;">Patient</th>
                <th style="text-align: left;">Location</th>
                <th style="text-align: left;">Date Admitted</th>
                <th style="text-align: left;">Last Visit</th>
                <th style="text-align: left;">Visit Date</th>
                <th style="text-align: left;"></th>
            </tr>
            <asp:Literal ID="lOutputString" runat="server" />
            <tr>
                <td colspan="6">
                    <div class="actions">
                        <asp:LinkButton ID="btnAdd" runat="server" Text="Add" CssClass="btn btn-primary" OnClick="btnAdd_Click" />
                    </div> 
                </td>
            </tr>
        </table>
    </div>
    
</asp:Panel>