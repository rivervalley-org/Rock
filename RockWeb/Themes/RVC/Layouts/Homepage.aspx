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
                //Rock.Web.Cache.BlockCache MainBlocks = pageCache.Blocks.Find(b => b.Zone == "Main");
                //if (MainBlocks == null)
                //{
                //    divSingleTopMain.Attributes.Add("class", "hide hide-block");
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
        <div runat="server" id="divSingleTopMainRow">
            <div runat="server" id="divSingleTopMain" class="col-sm-12">
                 <Rock:Zone Name="Main" runat="server" />
            </div>
        </div>
        <!-- End Content Area -->

</asp:Content>
