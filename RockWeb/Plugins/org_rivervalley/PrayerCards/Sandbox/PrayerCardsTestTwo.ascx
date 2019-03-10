<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PrayerCardsTestTwo.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.Sandbox.PrayerCardsTestTwo" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:Panel ID="pnlMultiCampusDetail" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Card Generator Test Two
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">                          
                    <div class="col-sm-6">
                        <Rock:RockCheckBoxList ID="cblCampuses" runat="server" Label="Campus Selection" DataTextField="Name" DataValueField="Id"  /> 
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPickerMulti" runat="server" Label="Start Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div
                
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnMultiCampusDetail" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnMultiCampusDetail_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnMultiCampusDetailCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnDetailCancel_Click" />
                </div>
                                
            </div>
        </asp:Panel>

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

        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">            
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