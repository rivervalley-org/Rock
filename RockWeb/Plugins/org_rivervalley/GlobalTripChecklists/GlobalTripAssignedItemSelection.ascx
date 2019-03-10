<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripAssignedItemSelection.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripAssignedItemSelection" %>
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
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlTripSelection" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Selection
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddGlobalTrips" runat="server" Label="Global Team" Required="false" />                        
                    </div>                    
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnTripSelection" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnTripSelection_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnTripSelectionCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlReport" CssClass="panel panel-block" runat="server">
            <asp:HiddenField ID="hfGlobalTripId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assigned Items Edit - <asp:Literal ID="lTripName" runat="server" />
                </h1>
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>                   
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <table class="grid-table table table-bordered table-striped table-hover">
                            <tr>
                                <th style="text-align: left;">Required Item</th>
                                <th style="text-align: left;">Due Date Period</th>
                                <th style="text-align: left;"></th>
                                <th style="text-align: left;"></th>
                        
                            </tr>
                            <asp:Literal ID="lOutputString" runat="server" />
                        </table>        
                    </div>                   
                </div>               
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>                   
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnItemAdd" runat="server" Text="Add Item" CssClass="btn btn-primary" OnClick="btnItemAdd_Click" CausesValidation="false" />
                    <asp:LinkButton ID="bbtnItemAddCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlAddItem" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assigned Items Add - <asp:Literal ID="lTripName2" runat="server" />
                </h1>                
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddItems" runat="server" Label="Additional Required Items" Required="false" />                        
                    </div>                                    
                    <div class="col-md-4">
                        <b>Due Date Period</b><br>
                        <asp:RadioButtonList ID="rblPeriods" runat="server" Label="Due Date Period" RepeatDirection="Horizontal" Visible="true" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>
                    </div>                                    
                </div>
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>                   
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnItemSaved" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnItemSaved_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnItemSavedClick" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assigned Items Add
                </h1>                
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        Assignment complete.<p>&nbsp;</p>
                    </div>                   
                </div>      
                <div class="row">
                    <div class="col-md-12">
                        <asp:Literal ID="lDebugString" runat="server" />
                    </div>                   
                </div>  
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>