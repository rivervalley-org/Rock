<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectParticipants.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectParticipants" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlParticipantList" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <div class="clearfix">
                    <h1 class="panel-title pull-left">
                        <i class="fa fa-users"></i>
                        <span>Participants</span>
                    </h1>
                </div>
            </div>

            <ul class="list-group">
                <asp:Repeater ID="rpParticipant" runat="server">
                    <ItemTemplate>
                        <li class="list-group-item">
                            <%# com.blueboxmoon.ProjectManagement.Utility.GetPersonDisplayHtml( Container.DataItem as Rock.Model.Person, CurrentPerson, true ) %>
                        </li>
                    </ItemTemplate>
                </asp:Repeater>
            </ul>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>