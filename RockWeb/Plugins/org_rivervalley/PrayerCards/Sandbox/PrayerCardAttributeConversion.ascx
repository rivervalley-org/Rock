<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PrayerCardAttributeConversion.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PrayerCards.PrayerCardAttributeConversion" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-9">
                        <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" Heading="Attention..."/>
                    </div>
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDetail" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Prayer Cards Attribute Conversion
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">                          
                    <div class="col-sm-12">
                        <p> Congregational Prayer Cards are based on the "Family Last Prayed For" (#2521 - Arena 34-306) attribute. This  program converts "Date Family Last Prayed For" person attributes to "Famliy Last Prayed For" attributes. Attibutes can be converted by Campus or all at once.                        
                    </div>
                </div>
                <div class="row">                          
                    <div class="col-sm-6">
                        <Rock:RockRadioButtonList ID="rblAttributes" runat="server" Label="Attribute Campus">
                            <asp:ListItem Text="Apple Valley - Arena-34-581" Value="2512" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Faribault - Arena-34-582" Value="2513" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Shakopee - Arena-34-583" Value="2514" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Minnetrista - Arena-34-584" Value="2515" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Burnsville - Arena-34-585" Value="2516" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Edina Area - Arena-34-586" Value="2517" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Egan - Arena-34-5061" Value="2518" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Woodbury - Arena-34-5065" Value="2519" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="Minneapolis - Arena-34-5137" Value="2520" Selected="False"></asp:ListItem>
                            <asp:ListItem Text="All Campuses" Value="All" Selected="False"></asp:ListItem>
                        </Rock:RockRadioButtonList> 
                    </div>                            
                </div>                
                
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
                    Prayer Cards Attribute Conversion
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" />
                    </div>        
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>  

