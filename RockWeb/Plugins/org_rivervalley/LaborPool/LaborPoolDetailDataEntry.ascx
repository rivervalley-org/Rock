<%@ Control Language="C#" AutoEventWireup="true" CodeFile="LaborPoolDetailDataEntry.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.LaborPool.LaborPoolDetailDataEntry" %>
<asp:HiddenField ID="hfTransactionId" runat="server" />
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lErrorString" runat="server" />
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDataEntry" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Labor Pool Transaction Entry
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:PersonPicker runat="server" ID="ppPerson" Label="Transaction Person" Required="false"/>	
                    </div>
                </div>                
                <div class="row">
                    <div class="col-sm-6">
                        <Rock:DatePicker ID="dpDate" runat="server" Label="Transaction Date"  DatePickerType="Date" Required="true" />
                    </div>                            
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbDescription" runat="server" Label="Description" Required="false" />                     
                    </div>                
                </div>
                <div class="row">
                    <div class="col-md-3">                        
                        <Rock:RockTextBox ID="tbDebit" runat="server" Label="Debit Amount (as a negative)" Required="false" />
                    </div>                
                    <div class="col-md-3">                        
                        <Rock:RockTextBox ID="tbCredit" runat="server" Label="Credit Amount (as a positive)" Required="false" />
                    </div>                
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Rock:RockTextBox ID="tbAccount" runat="server" Label="GL Account" Required="false" />                     
                    </div>                
                    <div class="col-md-3">
                        <Rock:RockTextBox ID="tbProject" runat="server" Label="Project Code" Required="false" />                     
                    </div>                
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <Rock:RockRadioButtonList ID="rbFund" runat="server" Required="true" Label="SNF Campus ID" RepeatDirection="Horizontal">
						    <asp:ListItem Text="AV" Value="000" ></asp:ListItem>
						    <asp:ListItem Text="FBO" Value="100"></asp:ListItem>
                            <asp:ListItem Text="SHK" Value="200"></asp:ListItem>
                            <asp:ListItem Text="MNT" Value="300"></asp:ListItem>
                            <asp:ListItem Text="EGN" Value="400"></asp:ListItem>
                            <asp:ListItem Text="CEN" Value="600"></asp:ListItem>
                            <asp:ListItem Text="GTeam" Value="601"></asp:ListItem>
                            <asp:ListItem Text="WDB" Value="700"></asp:ListItem>
                            <asp:ListItem Text="MPL" Value="800"></asp:ListItem>
                            <asp:ListItem Text="CST" Value="900"></asp:ListItem>
                            <asp:ListItem Text="KB" Value="602"></asp:ListItem>
					    </Rock:RockRadioButtonList>
                    </div>
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-primary" OnClick="btnSubmit_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />                    
                </div>
            </div>
        </asp:Panel>
   
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                     Labor Pool Transactions Entry
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

        <asp:Panel ID="pnlDelete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                     Labor Pool Transactions Delete
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lDeleteString" runat="server" />
                        </div>  
                    </div>                   
                </div>                 
                <div class="actions">
                    <asp:LinkButton ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-primary" OnClick="btnDelete_Click" />
                    <asp:LinkButton ID="btnCancelDelete" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>   
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


