<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GroupFinderV2.ascx.cs" Inherits="RockWeb.Plugins.org_riverValley.Groups.GroupFinderV2" %>

<style>
    .btn-day { height: inherit !important; border-color: #adadad !important; margin: 1px; width: 12%; padding-left: 0 !important; padding-right: 0 !important; box-shadow: none !important; } 
    .h74 { height: 74px; }
    .days-label { position: absolute; left: 15px; top: 0; }
</style>

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
                <div class="col-md-6 col-sm-9 col-xs-12 d-flex justify-content-center align-items-center h74">
                    <label class="control-label days-label">Day(s) of Week</label>
                    <div class="controls w-100 mt-2">
                        <asp:Repeater ID="rptDays" runat="server" OnItemCommand="btnDay_ItemCommand">
                            <ItemTemplate>
                                <asp:LinkButton ID="btnDay" runat="server" CommandArgument='<%# Eval("FullName") %>' Text='<%# Eval("AbbreviatedName") %>' CssClass="btn btn-default btn-checkbox btn-day"  />
                            </ItemTemplate>
                        </asp:Repeater>
                    </div>     
                </div>
                <div class="col-md-2 col-sm-3 col-xs-3 pull-right text-right">
                    <Rock:Switch ID="swKidsWelcome" runat="server" Label="Kids Welcome" AutoPostBack="true" OnCheckedChanged="swKidsWelcome_CheckedChanged" />
                </div>
                <div class="col-sm-12 col-xs-9 pull-left">
                    <Rock:RockTextBox ID="tbKeyword" runat="server" Label="Keyword Search" Placeholder="Keyword" AutoPostBack="true" OnTextChanged="tbKeyword_TextChanged" />
                </div>
            </div>

        </asp:Panel>

        <asp:Panel ID="pnlResults" runat="server">
            <asp:Literal ID="lLavaTemplate" runat="server" />
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
