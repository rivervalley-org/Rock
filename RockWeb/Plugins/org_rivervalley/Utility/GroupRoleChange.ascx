<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GroupRoleChange.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Utility.GroupRoleChange" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlButton" runat="server" CssClass="panel panel-block" Visible="true">
            <asp:HiddenField ID="hfGroupId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Update Group Member Role
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" Visible ="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnRoleUpdate" runat="server" Text="Update Role" CssClass="btn btn-primary" OnClick="btnRoleUpdate_Click" CausesValidation="false" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlSelection" runat="server" CssClass="panel panel-block" Visible="false">
            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Update Group Member Role
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lOutputStringFeatured" runat="server" Visible ="false" />    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddGroupMember" runat="server" Label="Group Member" Required="false" />
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddRole" runat="server" Label="Role" Required="false" />
                    </div>
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnSelectionSave" runat="server" Text="Update Role" CssClass="btn btn-primary" OnClick="btnSelectionSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Update Group Member Role
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