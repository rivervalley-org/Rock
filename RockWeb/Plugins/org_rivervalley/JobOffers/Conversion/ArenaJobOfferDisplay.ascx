<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ArenaJobOfferDisplay.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.JobOffers.ArenaJobOfferDisplay" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>        
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lErrorString" runat="server" />
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlJobOffer" runat="server" CssClass="panel panel-block" >
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list-alt"></i>
                    Arena Job Offer Details
                </h1>
            </div>
            <div class="panel-body">
	        <div class="container-fluid" >     
                <div class="row">
                    <div class="col-md-12">
                        <h4>Personal Information</h4>
                    </div>
                </div>
                <asp:Literal ID="lPersonalInformationString" runat="server" />
                <div class="row">
                    <div class="col-md-12">
                        <h4><br>Compensation</h4>
                    </div>
                </div>
                <asp:Literal ID="lCompensationString" runat="server" />
                <div class="row">
                    <div class="col-md-12">
                        <h4><br>Benefits</h4>
                    </div>
                </div>
                <asp:Literal ID="lBenefitsString" runat="server" />
                <div class="row">
                    <div class="col-md-12">
                        <h4><br>Allocations</h4>
                    </div>
                </div>
                <asp:Literal ID="lAllocationsString" runat="server" />
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>