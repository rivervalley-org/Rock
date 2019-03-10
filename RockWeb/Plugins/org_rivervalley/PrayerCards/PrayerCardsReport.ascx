<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PrayerCardsReport.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.PrayerCardsReport" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:Panel ID="pnlDetail" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Card - Church 
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPicker" runat="server" Label="Start Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div
                
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnDetail" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnDetail_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnDetailCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnDetailCancel_Click" />
                </div>
                                
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lReportHeader" runat="server" />
                    </div>        
               </div>
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lElders" runat="server" />
                    </div>        
               </div>
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lLocalChurch" runat="server" />
                    </div>        
               </div>
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lMinistry" runat="server" />
                    </div>        
               </div>
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lMissionary" runat="server" />
                    </div>        
               </div>                
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lNetworkChurch" runat="server" /> 
                    </div>        
               </div>                
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lStaff" runat="server" />  
                    </div>        
               </div>                
               <div class="row">
                   <div class="col-sm-12">
                       <asp:Literal ID="lPolitical" runat="server" />
                   </div>        
               </div>
               <div class="row">
                   <div class="col-sm-12">
                       <asp:Literal ID="lVirtues" runat="server" />
                   </div>        
               </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>  