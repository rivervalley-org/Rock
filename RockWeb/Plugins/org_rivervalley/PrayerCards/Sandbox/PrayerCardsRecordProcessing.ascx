<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PrayerCardsRecordProcessing.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.PrayerCardsRecordProcessing" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="true">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Card Record Generation Results
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" />
                    </div>
                </div>        
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false
            ">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Debug Panel
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lDebugString" runat="server" />
                    </div>
                </div>        
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>  