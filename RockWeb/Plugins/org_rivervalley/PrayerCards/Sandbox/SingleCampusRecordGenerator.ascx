<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SingleCampusRecordGenerator.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.SingleCampusRecordGenerator" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        <asp:Panel ID="pnlDetail" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Cards Single Campus 
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">                          
                    <div class="col-sm-6">
                        <Rock:ButtonDropDownList ID="ddlList" runat="server" Label="Campus" /> 
                    </div>                            
                </div>
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
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Cards Single Campus
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