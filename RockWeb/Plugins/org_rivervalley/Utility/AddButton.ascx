<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MissionaryUtilityButtons.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Utility.MissionaryUtilityButtons" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlButtons" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Missionary Add to On-Line Access Group
                </h1>
            </div>
            <div class="panel-body">        
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" Visible ="false" />
                    </div>
                </div>
                <div class="actions">
       <%--     <asp:LinkButton ID="btnDoNotMail" runat="server" Text="Do Not Mail" CssClass="btn btn-primary" OnClick="btnDoNotMail_Click" CausesValidation="false" ToolTip="Clicking this button adds the DO NOT EMAIL attribute to YES for that missionary and all family members" /> --%>
                    <asp:LinkButton ID="btnAddMissionary" runat="server" Text="Add to Group" CssClass="btn btn-primary" OnClick="btnAddMissionary_Click" CausesValidation="false" ToolTip="Clicking this button adds the missionary to the Online Contribution Receipt for Missionary Group" />
        <%--     <asp:LinkButton ID="btnFeatured" runat="server" Text="Featured Status" CssClass="btn btn-primary" OnClick="btnFeatured_Click" CausesValidation="false" ToolTip="Clicking this button Brings up a window that will show the last Featured Date (if any). You can then enter a new Start and End date to FEATURE the missionary on the Public website" /> --%>
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlFeatured" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfFinancialAccountId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Missionary Utilities
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
                        <Rock:DatePicker ID="dpStartDate" runat="server" Label="Featured Start Date"  Required="false" />
                    </div>
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dpEndDate" runat="server" Label="Featured End Date"  Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnFeaturedSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnFeaturedSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>