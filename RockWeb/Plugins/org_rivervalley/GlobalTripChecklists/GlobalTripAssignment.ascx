<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripAssignment.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripAssignment" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lErrorString" runat="server" />
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>
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
        <asp:Panel ID="pnlAssignment" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfGlobalTripId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assignment Items - <asp:Literal ID="lTripName" runat="server" />
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockCheckBoxList ID="cbList" runat="server" Label="Global Trip Required Items" />                       
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnAssignmentSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnAssignment_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnAssignmentCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlAssignmentDates" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Assigned Items - Due Dates - 
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b><asp:Literal ID="lTripNameDates" runat="server" /></b>
                        <p>Assign the payment period for each required item that will trigger date sensative emails.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem1" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods1" runat="server" RepeatDirection="Horizontal" Visible="false">
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem2" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods2" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem3" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods3" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>             
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem4" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods4" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div> 
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem5" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods5" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem6" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods6" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
				<div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem7" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods7" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem8" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods8" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem9" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods9" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem10" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods10" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem11" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods11" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem12" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rblPeriods12" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        &nbsp;
                    </div>
                </div> 
                <div class="actions">
                    <asp:LinkButton ID="btnAssignmentDatesSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnAssignmentDates_Click" CausesValidation="false" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assignment Items
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        Trip required items complete.                        
                    </div>                   
                </div>                 
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

