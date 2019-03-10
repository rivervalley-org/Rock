<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxPageTest.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxPageTest" %>
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
        <h3>Sub Pages</h3>
        <table class="grid-table table table-bordered table-striped table-hover">
            <tr>
                <th style="text-align: left;">Id</th>
                <th style="text-align: left;"></th>
                <th style="text-align: left;">Title</th>
            </tr>
            <asp:Literal ID="lOutputString" runat="server" />
            
        </table>
    </div>
    
</asp:Panel>

