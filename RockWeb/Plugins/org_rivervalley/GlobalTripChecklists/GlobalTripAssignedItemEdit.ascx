<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripAssignedItemEdit.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripAssignedItemEdit" %>
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
        <asp:Panel ID="pnlEditItem" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfEditItemId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assigned Item Edit - <asp:Literal ID="lTripName" runat="server" />
                </h1>                
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <h4><asp:Literal ID="lItemName" runat="server" /></h4>
                    </div>                                    
                    <div class="col-md-4">
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
        <asp:Panel ID="pnlDelete" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfDeleteItemId" runat="server" />
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lDeleteString" runat="server" />
                        </div>  
                    </div>                   
                </div>                 
                <div class="actions">
                    <asp:LinkButton ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-primary" OnClick="btnDelete_Click" />
                    <asp:LinkButton ID="btnCancelDelete" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>   
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Assigned Items Editted/Deleted
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