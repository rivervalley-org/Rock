<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxDynamicFormTwo.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxDynamicFormTwo" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="true">

            <asp:HiddenField ID="hfPersonId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    Dynamic Forms Test
                </h1>
            </div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem1" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rbl1" runat="server" RepeatDirection="Horizontal" Visible="false">
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem2" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rbl2" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem3" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rbl3" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>             
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem4" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rbl4" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div> 
                <div class="row">
                    <div class="col-md-6">
                        <asp:Literal ID="lItem5" runat="server" Visible="false" />
                        <asp:RadioButtonList ID="rbl5" runat="server" RepeatDirection="Horizontal" Visible="false" >
                            <asp:ListItem Text="2nd" Value="2" />
                            <asp:ListItem Text="3rd" Value="3" />
                            <asp:ListItem Text="Final" Value="4" />
                        </asp:RadioButtonList>                    
                    </div>
                </div>                    
                <div class="row">
                    <div class="col-md-6">
                        &nbsp;
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>

        </asp:Panel>
        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="true">
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

