<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxGenericForm.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxGenericForm" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlForm" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Generic Form Example
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCampus" runat="server" Label="Campus" Required="true" />                        
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dtPicker" runat="server" Label="Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:RockRadioButtonList ID="rbStatus" runat="server" Required="true" Label="Email Send Status" RepeatDirection="Horizontal">
						    <asp:ListItem Text="Value 0" Value="0" ></asp:ListItem>
						    <asp:ListItem Text="Value 1" Value="1"></asp:ListItem>
					    </Rock:RockRadioButtonList>
                    </div>
                </div>
                <div class="row">                          
                    <div class="col-sm-6">
                        <Rock:RockCheckBoxList ID="cblFruit" runat="server" Label="Fruits" DataTextField="Name" DataValueField="Id"  /> 
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbComment" runat="server" Label="Comments" Required="false" />                     
                    </div>                
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:PersonPicker runat="server" ID="ppPerson" Label="Name" Required="false"/>	
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnContinue" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnContinue_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                    <asp:LinkButton ID="btnLink" runat="server" Text="Link Test" CssClass="btn btn-primary" OnClick="btnLink_Click" CausesValidation="false" />
                </div>
            </div>
        </asp:Panel>
   
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Generic Form Response
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


