﻿<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>
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
                Rock.Web.Cache.BlockCache MainBlocks = pageCache.Blocks.Find(b => b.Zone == "Main");
                Rock.Web.Cache.BlockCache Sidebar1Blocks = pageCache.Blocks.Find(b => b.Zone == "Sidebar1");
                Rock.Web.Cache.BlockCache Sidebar2Blocks = pageCache.Blocks.Find(b => b.Zone == "Sidebar2");
                if (MainBlocks == null && Sidebar1Blocks == null && Sidebar2Blocks == null)
                {
                    divThreeColContainer.Attributes.Add("class", "hide hide-block");
                    divSpacer2.Visible = false;
                }

            }
        }
    }

</script>
<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">
    <Rock:Zone Name="Feature" runat="server" />
</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
           
        <!-- Start Content Area -->

        <div runat="server" id="divThreeColContainer" class="wysiwyg wysiwyg-columns-3" style="">
            <div class="interior">
                <div class="wysiwyg-item">
                    <Rock:Zone Name="Sidebar 1" runat="server" />
                </div>
                <div class="wysiwyg-item">
                    <Rock:Zone Name="Main" runat="server" />
                </div>
                <div class="wysiwyg-item">
                    <Rock:Zone Name="Sidebar 2" runat="server" />
                </div>
            </div>
        </div>
        <div runat="server" id="divSpacer2" class="spacer"></div>

        <!-- End Content Area -->

</asp:Content>