﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PrayerCardsGeneratorAllCampuses.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.PrayerCardsGeneratorAllCampuses" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>

        <asp:Panel ID="pnlDateSelection" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Card Date Selection
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        This process will create prayer cards for all campuses for the date selected (which must be a Tuesday).<br>&nbsp;<br>
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPickerDate" runat="server" Label="Prayer Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div>                
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnDateSelection" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnDateSelection_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnDateSelectionCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnDetailCancel_Click" />
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

    </ContentTemplate>
</asp:UpdatePanel>  