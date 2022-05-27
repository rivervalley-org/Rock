<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectDetail.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectDetail" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbUnauthorized" runat="server" NotificationBoxType="Warning"></Rock:NotificationBox>

        <asp:Panel ID="pnlDetails" CssClass="panel panel-block" runat="server">
            <div class="panel-heading panel-follow panel-watch clearfix">
                <h1 class="panel-title pull-left">
                    <asp:Literal ID="lIconHtml" runat="server" />
                    <asp:Literal ID="lTitle" runat="server" />
                </h1>

                <asp:Panel ID="pnlWatching" runat="server" CssClass="panel-watch-status margin-l-sm" data-toggle="tooltip" data-placement="top"></asp:Panel>
                <asp:Panel ID="pnlFollowing" runat="server" CssClass="panel-follow-status" data-toggle="tooltip" data-placement="top" title="Click to Follow"></asp:Panel>
            </div>

            <div class="panel-heading clearfix">
                <div class="panel-labels">
                    <asp:Literal ID="ltCurrentTags" runat="server" />
                    <span ID="sBlocked" runat="server" class="label label-warning" Visible="false" data-toggle="tooltip" data-delay="200">
                        <i class='fa fa-exclamation-triangle'></i> Blocked
                    </span>
                    <Rock:HighlightLabel ID="hlId" runat="server" LabelType="Info" />
                    <Rock:HighlightLabel ID="hlState" runat="server" LabelType="Success" />
                </div>
            </div>

            <div class="panel-body">
                <fieldset>
                    <div class="row">
                        <div class="col-md-6">
                            <dl>
                                <dt>Parent Project</dt>
                                <dd><asp:LinkButton ID="lbParentProject" runat="server" OnClick="lbParentProject_Click" /></dd>

                                <dt>Category</dt>
                                <dd><asp:Literal ID="lCategory" runat="server" /></dd>
                            </dl>
                        </div>

                        <div class="col-md-3">
                            <dl>
                                <dt>Request Date</dt>
                                <dd><asp:Literal ID="lRequestDate" runat="server" /></dd>
                            </dl>
                        </div>

                        <div class="col-md-3">
                            <dl>
                                <dt>Due Date</dt>
                                <dd><asp:Literal ID="lDueDate" runat="server" /></dd>
                            </dl>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <dl>
                                <dt>Requested By</dt>
                                <dd><asp:Literal ID="lRequestedBy" runat="server" /></dd>
                            </dl>
                        </div>

                        <div class="col-md-6">
                            <dl>
                                <dt>Assigned To</dt>
                                <dd><asp:Literal ID="lAssignedTo" runat="server" /></dd>
                            </dl>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <asp:PlaceHolder ID="phBlockedBy" runat="server">
                                <dl>
                                    <dt>Blocked By</dt>
                                    <dd><asp:Literal ID="lBlockedBy" runat="server" /></dd>
                                </dl>
                            </asp:PlaceHolder>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <dl>
                                <dt>Details</dt>
                                <dd><asp:Literal ID="lDetails" runat="server" /></dd>
                            </dl>
                        </div>
                    </div>

                    <asp:PlaceHolder ID="phAttributes" runat="server" />

                    <div class="actions">
                        <asp:LinkButton ID="lbComplete" runat="server" CssClass="btn btn-success" Text="Complete" OnClick="lbComplete_Click" />
                        <asp:LinkButton ID="lbEdit" runat="server" CssClass="btn btn-link" Text="Edit" OnClick="lbEdit_Click" />

                        <span class="pull-right">
                            <Rock:ModalAlert ID="mdDeleteWarning" runat="server" />
                            <asp:LinkButton ID="lbDelete" runat="server" CssClass="btn btn-link" Text="Delete" OnClick="lbDelete_Click" OnClientClick="return Rock.dialogs.confirmDelete(event, 'project');" />
                        </span>
                    </div>
                </fieldset>
            </div>

            <Rock:ModalDialog ID="mdlConfirmComplete" runat="server" Title="Complete Project?" ValidationGroup="CompleteProject" OnSaveClick="mdlConfirmComplete_SaveClick" SaveButtonText="Complete">
                <Content>
                    <Rock:NotificationBox ID="nbConfirmComplete" runat="server" NotificationBoxType="Warning" CssClass="clearfix">
                        <i class="fa fa-3x fa-exclamation-circle pull-left"></i>
                        This project has uncompleted tasks and/or sub-projects. Continuing will also mark
                        these as completed as well. Do you still wish to mark it as completed?
                    </Rock:NotificationBox>
                </Content>
            </Rock:ModalDialog>
        </asp:Panel>

        <asp:Panel ID="pnlEdit" CssClass="panel panel-block" runat="server">
            <asp:HiddenField ID="hfId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list-ul"></i>
                    <asp:Literal ID="lEditTitle" runat="server" />
                </h1>
            </div>
            <Rock:PanelDrawer ID="pdAuditDetails" runat="server"></Rock:PanelDrawer>
            <div class="panel-body">

                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Warning" />
                <Rock:NotificationBox ID="nbErrorMessage" runat="server" NotificationBoxType="Danger" />
                <asp:ValidationSummary ID="vSummary" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />

                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddlProjectType" runat="server" Label="Project Type" Required="true" OnSelectedIndexChanged="ddlProjectType_SelectedIndexChanged" AutoPostBack="true" CausesValidation="false" />
                        <PM:ProjectPicker ID="ppParentProject" runat="server" Label="Parent Project" OnSelectItem="ppParentProject_SelectItem" />
                    </div>

                    <div class="col-md-6">
                        <Rock:CategoryPicker ID="cpCategory" runat="server" Label="Category" Required="false" EntityTypeName="com.blueboxmoon.ProjectManagement.Model.Project" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.Project, com.blueboxmoon.ProjectManagement" PropertyName="Name" Label="Project Name" />
                        <Rock:PersonPicker ID="ppRequestedBy" runat="server" Label="Requested By" EnableSelfSelection="true" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddlState" runat="server" Label="State" Required="true" />
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <Rock:DatePicker ID="dpRequestDate" runat="server" Label="Request Date" Required="true"/>
                            </div>
                            <div class="col-sm-6">
                                <Rock:DatePicker ID="dpDueDate" runat="server" Label="Due Date" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label" for="<%= meDescription.ClientID %>">Details</label>
                            <PM:MarkdownEditor ID="meDescription" runat="server" CssClass="margin-b-md" IsMentionEnabled="true" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Assigned To</label>
                            <div class="control-wrapper">
                                <asp:Repeater ID="rpAssignedTo" runat="server" OnItemCommand="rpAssignedTo_ItemCommand">
                                    <ItemTemplate>
                                        <div class="control-static"><%# Eval("Name") %> <asp:LinkButton ID="lbDelete" runat="server" CssClass="btn btn-link" CommandArgument='<%# Eval("Id") %>' CommandName="Delete" CausesValidation="false"><i class="fa fa-times"></i></asp:LinkButton></div>
                                    </ItemTemplate>
                                </asp:Repeater>

                                <Rock:PersonPicker ID="ppAssignTo" runat="server" EnableSelfSelection="true" OnSelectPerson="ppAssignTo_SelectPerson" />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Blocked By</label>
                            <div class="control-wrapper">
                                <asp:Repeater ID="rpBlockedBy" runat="server" OnItemCommand="rpBlockedBy_ItemCommand">
                                    <ItemTemplate>
                                        <div class="control-static"><%# Eval("Name") %> <asp:LinkButton ID="lbDelete" runat="server" CssClass="btn btn-link" CommandArgument='<%# Eval("Id" ) %>' CommandName="Delete" CausesValidation="false"><i class="fa fa-times"></i></asp:LinkButton></div>
                                    </ItemTemplate>
                                </asp:Repeater>

                                <PM:ProjectPicker ID="ppBlockedBy" runat="server" OnSelectItem="ppBlockedBy_SelectItem" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <asp:PlaceHolder ID="phEditAttributes" runat="server"></asp:PlaceHolder>
                    </div>

                    <div class="col-md-6">
                        <asp:Panel ID="pnlEditTags" runat="server" CssClass="form-group">
                            <label>Tags</label>
                            <div class="control-wrapper">
                                <Rock:TagList ID="tlProjectTags" runat="server" CssClass="clearfix pm-taglist" />
                            </div>
                        </asp:Panel>
                    </div>
                </div>

                <div class="actions">
                    <asp:LinkButton ID="lbSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="lbSave_Click" />
                    <asp:LinkButton ID="lbCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="lbCancel_Click" />
                </div>

            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>