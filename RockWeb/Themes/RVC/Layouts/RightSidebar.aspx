<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>
<script runat="server">

    protected void Page_Load( object sender, EventArgs e )
    {
        // declare vars
        var rockPage = this.Page as Rock.Web.UI.RockPage;

        // page description
        if (rockPage != null)
        {
            var pageCache = Rock.Web.Cache.PageCache.Get(rockPage.PageId);
            if (pageCache != null) {
                //Rock.Web.Cache.BlockCache MainBlocks = pageCache.Blocks.Find(b => b.Zone == "Main");
                //Rock.Web.Cache.BlockCache Sidebar1Blocks = pageCache.Blocks.Find(b => b.Zone == "Sidebar1");
                //if (MainBlocks == null && Sidebar1Blocks == null)
                //{
                //    divTwoColSidebarContainer.Attributes.Add("class", "hide hide-block");
                //    divSpacer2.Visible = false;
                //}
            }
        }
    }

</script>
<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">
    <Rock:Zone Name="Feature" runat="server" />
</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
           
        <!-- Start Content Area -->
        <div class="row" id="divSidebarRow" runat="server">
            <div runat="server" id="divMain" class="col-sm-8">
                <Rock:Zone Name="Main" runat="server" />
            </div>
            <div runat="server" id="divSidebar" class="col-sm-4">
                <Rock:Zone Name="Sidebar 1" runat="server" />
            </div>
        </div>
        <!-- End Content Area -->

</asp:Content>