<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EngagementIndexDetail.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Engagement.EngagementIndexDetail" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlView" runat="server" CssClass="panel panel-block">

            <asp:HiddenField ID="hfIndexId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-desktop"></i>
                    <asp:Literal ID="lActionTitle" runat="server" />
                </h1>
            </div>
            <Rock:PanelDrawer ID="pdAuditDetails" runat="server"></Rock:PanelDrawer>
            <div class="panel-body">

                <asp:ValidationSummary ID="ValidationSummary1" runat="server" HeaderText="Please correct the following:" CssClass="alert alert-validation" />

                <fieldset>

                    <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                    <Rock:NotificationBox ID="nbDuplicateDevice" runat="server" NotificationBoxType="Warning" Title="Sorry" Visible="false" />

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="org.rivervalley.Engagement.Model.EngagementIndex, org.rivervalley.Engagement" PropertyName="Name" Required="true" />
                        </div>
                        <div class="col-md-6">
                            <Rock:RockDropDownList ID="ddlCategory" runat="server" Label="Category" Required="true" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <Rock:DataTextBox ID="tbDescription" runat="server" SourceTypeName="org.rivervalley.Engagement.Model.EngagementIndex, org.rivervalley.Engagement" PropertyName="Description" TextMode="MultiLine" Rows="3" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:RangeSlider ID="nbScoreWeight" runat="server" Label="Score Weight" Required="true" MaxValue="20" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="well well-sm">
                                <Rock:Toggle ID="tglQueryType" runat="server" Label="Query Type" OffText="SQL" OnText="DataView" OffCssClass="btn-primary" OnCssClass="btn-primary" OnCheckedChanged="tglQueryType_CheckedChanged" />
                                <div id="divSQL" runat="server" visible="false">
                                    <Rock:CodeEditor Label="Sql Query" runat="server" ClientIDMode="Static" TextMode="MultiLine" Rows="10" ID="tbSQL"></Rock:CodeEditor>
                                    <Rock:RockCheckBox ID="cbAllowMultiple" runat="server" Label="Allow Multiple Completions" />
                                </div>
                                <div id="divDataView" runat="server" visible="false">
                                    <Rock:DataViewItemPicker ID="dvpDataView" runat="server" Label="Data View" EntityTypeId="15" />
                                </div>
                            </div>
                        </div>
                    </div>

                </fieldset>

                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" AccessKey="s" ToolTip="Alt+s" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" />
                    <asp:LinkButton ID="btnCancel" runat="server" AccessKey="c" ToolTip="Alt+c" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>

            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
