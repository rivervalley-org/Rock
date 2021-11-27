<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EngagementIndexList.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Engagement.EngagementIndexList" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlView" runat="server" CssClass="panel panel-block">
        
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list-ul"></i> 
                    Engagement Index List
                </h1>
            </div>
            <div class="panel-body">
                <Rock:ModalAlert ID="mdGridWarningValues" runat="server" />

                <div class="grid grid-panel">
                    <Rock:Grid ID="gList" runat="server" AllowSorting="false" OnRowSelected="gList_RowSelected">
                        <Columns>
                            <Rock:ReorderField />
                            <Rock:RockBoundField DataField="Name" HeaderText="Name" />
                            <Rock:RockBoundField DataField="Description" HeaderText="Description" />
                            <Rock:RockBoundField DataField="Category" HeaderText="Category" />
                            <Rock:RockBoundField DataField="Type" HeaderText="Type" />
                            <Rock:RockBoundField DataField="ScoreWeight" HeaderText="Score Weight" />
                            <Rock:RockBoundField DataField="AllowMultipleCompletions" HeaderText="Allow Multiple Completions" />
                        </Columns>
                    </Rock:Grid>
                </div>

            </div>
        
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
