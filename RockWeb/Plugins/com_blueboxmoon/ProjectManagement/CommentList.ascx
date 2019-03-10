<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CommentList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.CommentList" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlCommentList" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <asp:Panel ID="pnlNewestComment" runat="server" CssClass="pull-right" Visible="false">
                    <asp:HyperLink ID="hlNewestComment" runat="server">
                        <span class="label label-primary">
                            <i class="fa fa-arrow-down"></i> Newest Comment
                        </span>
                    </asp:HyperLink>
                </asp:Panel>
                <h1 class="panel-title">
                    <i class="fa fa-comment"></i>
                    <span>Discussion</span>
                </h1>
            </div>

            <div class="panel-body">
                <PM:CommentContainer ID="ccComments" runat="server" />

                <PM:MarkdownEditor ID="meNewComment" runat="server" CssClass="margin-b-md" IsMentionEnabled="true" />
                <asp:LinkButton ID="lbComment" runat="server" CssClass="btn btn-primary" Text="Comment" OnClick="lbComment_Click" />
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>
