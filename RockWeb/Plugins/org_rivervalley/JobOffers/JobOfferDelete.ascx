<%@ Control Language="C#" AutoEventWireup="true" CodeFile="JobOfferDelete.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.JobOffers.JobOfferDelete" %>
<asp:HiddenField ID="hfJobOfferId" runat="server" />
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            An error has occurred in processing your request.
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlDelete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lDeleteString" runat="server" />
                        </div>  
                    </div>                   
                </div>                 
                <div class="actions">
                    <asp:LinkButton ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-primary" OnClick="btnDelete_Click" />
                    <asp:LinkButton ID="btnCancelDelete" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>   
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>

