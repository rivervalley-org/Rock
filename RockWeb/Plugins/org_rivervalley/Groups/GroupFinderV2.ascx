<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GroupFinderV2.ascx.cs" Inherits="RockWeb.Plugins.org_riverValley.Groups.GroupFinderV2" %>

<asp:UpdatePanel ID="upnlContent" runat="server" UpdateMode="Conditional">
    <ContentTemplate>

        <asp:Panel ID="pnlSearch" runat="server">
            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:RockDropDownList ID="ddlCampuses" runat="server" Label="Campus" AutoPostBack="true" OnSelectedIndexChanged="ddlCampuses_SelectedIndexChanged" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:DefinedValuePicker ID="dvpGroupTypes" runat="server" Label="Life Group Type" AutoPostBack="true" OnSelectedIndexChanged="dvpGroupTypes_SelectedIndexChanged" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:DefinedValuePicker ID="dvpDemographic" runat="server" Label="Demographic" AutoPostBack="true" OnSelectedIndexChanged="dvpDemographic_SelectedIndexChanged" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:DefinedValuePicker ID="dvpMeetingType" runat="server" Label="Meets" AutoPostBack="true" OnSelectedIndexChanged="dvpMeetingType_SelectedIndexChanged" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:RockTextBox ID="tbKeyword" runat="server" Label="Keyword Search" Placeholder="Keyword" AutoPostBack="true" OnTextChanged="tbKeyword_TextChanged" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <Rock:Switch ID="swKidsWelcome" runat="server" Label="Kids Welcome" AutoPostBack="true" OnCheckedChanged="swKidsWelcome_CheckedChanged" />
                </div>
            </div>

        </asp:Panel>

        <asp:Panel ID="pnlResults" runat="server">
            <asp:Literal ID="lLavaTemplate" runat="server" />
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
