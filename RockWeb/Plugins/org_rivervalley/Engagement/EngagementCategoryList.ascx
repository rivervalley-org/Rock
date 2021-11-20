<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EngagementCategoryList.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Engagement.EngagementCategoryList" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlView" runat="server" CssClass="panel panel-block">
        
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list-ul"></i> 
                    Engagement Index Categories
                </h1>
            </div>
            <div class="panel-body">
                <Rock:ModalAlert ID="mdGridWarningValues" runat="server" />

                <div class="grid grid-panel">
                    <Rock:Grid ID="gList" runat="server" AllowSorting="false" OnGridReorder="gList_GridReorder" OnRowSelected="gList_RowSelected" >
                        <Columns>
                            <Rock:ReorderField />
                            <Rock:RockBoundField DataField="Name" HeaderText="Name" />
                            <Rock:RockBoundField DataField="Description" HeaderText="Description" />
                            <Rock:RockBoundField DataField="HtmlColor" HeaderText="HtmlColor" />
                        </Columns>
                    </Rock:Grid>
                </div>

            </div>
        
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
