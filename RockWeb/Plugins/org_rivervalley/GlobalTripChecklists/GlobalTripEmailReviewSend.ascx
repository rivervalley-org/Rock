<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripEmailReviewSend.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripEmailReviewSend" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlForm" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Teams Email Review Send
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-info ">
                            This program will send the selected email to globalproject@rivervalley.org using the person "R Global" as a test of the email template.<br>The email will be in the history of R. Global (106787). <br>This program does not process actual team dates or times, the team selection is for demonstration purposes only.
                        </div>  
                    </div>                   
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockRadioButtonList ID="rbTemplate" runat="server" Required="true" Label="Email Template" RepeatDirection="Horizontal">
						    <asp:ListItem Text="Payment Reminder" Value="6936" Selected="True" ></asp:ListItem>
						    <asp:ListItem Text="Late Items" Value="6940"></asp:ListItem>
                            <asp:ListItem Text="Final Notice" Value="6941"></asp:ListItem>
					    </Rock:RockRadioButtonList>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddGlobalTrips" runat="server" Label="Global Team" Required="false" />
                    </div>                
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnContinue" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnContinue_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
   
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Teams Email Review Send
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" />
                    </div>                   
                </div>                                 
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>

