<%@ Control Language="C#" AutoEventWireup="true" CodeFile="AttributeValuesBulkDelete.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Utility.AttributeValuesBulkDelete" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlButton" runat="server" CssClass="panel panel-block" Visible="true">
            <asp:HiddenField ID="hfGroupId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Attribute Values Bulk Delete
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">                    
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnInitiateDeletion" runat="server" Text="Delete" CssClass="btn btn-primary" OnClick="btnInitiateDeletion_Click" CausesValidation="false" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlConfirmation" runat="server" CssClass="panel panel-block" Visible="false">
            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Confirm Deletion
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" Visible ="true" />    
                    </div>
                </div>                

                <div class="actions">
                    <asp:LinkButton ID="btnDeletionVerified" runat="server" Text="Delete" CssClass="btn btn-primary" OnClick="btnDeletionVerified_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Deletion Confirmation
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lCompleteString" runat="server" />
                    </div>                   
                </div>                 
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>