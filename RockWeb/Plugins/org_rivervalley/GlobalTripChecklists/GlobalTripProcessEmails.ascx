<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripProcessEmails.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripProcessEmails" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlSendSelection" runat="server" CssClass="panel panel-block" Visible="false">            
            <div class="panel-heading">
                <h1 class="panel-title">
                    Email Send Selection
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:RockRadioButtonList ID="rbStatus" runat="server" Required="true" Label="Email Send Status" RepeatDirection="Horizontal">
							<asp:ListItem Text="Preview" Value="0" ></asp:ListItem>
							<asp:ListItem Text="Send" Value="1"></asp:ListItem>
						</Rock:RockRadioButtonList>
                    </div>                            
                </div>
                <div class="actions">
                    <p></p>
                    <asp:LinkButton ID="btnContinue" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnContinue_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                                
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlEmailsSent" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Teams Process Emails <asp:Literal ID="lStatusString" runat="server" />
                </h1>
            </div>
            <div class="panel-body">
                <table class="grid-table table table-bordered table-striped table-hover">
                    <asp:Literal ID="lOutputString" runat="server" />            
                </table>    
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <b>Debug Output:</b>
                        <Rock:RockLiteral ID="lDebugString" runat="server" />
                    </div>                   
                </div>                 
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>