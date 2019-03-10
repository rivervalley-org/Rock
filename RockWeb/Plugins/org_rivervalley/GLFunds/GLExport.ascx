<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GLExport.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GLFunds.GLExport" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible="false">
            <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        </asp:Panel>
        
        <asp:Panel ID="pnlBatchList" CssClass="panel panel-block" runat="server" Visible="false">

            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-th-list"></i> Batch List</h1>
            </div>
            <div class="panel-body">

                <Rock:ModalAlert ID="mdGridWarning" runat="server" />

                <Rock:Grid ID="gBatches" runat="server" AllowSorting="false" OnRowSelected="gBatchList_Select">
                    <Columns>
                        <asp:BoundField DataField="Id" HeaderText="Batch" />
                        <asp:BoundField DataField="Name" HeaderText="Name" />
                        <asp:BoundField DataField="BatchStartDateTime" HeaderText="Date"/>                        
                        <asp:BoundField DataField="ControlAmount" HeaderText="Control Amount"/>                        
                    </Columns>
                </Rock:Grid>
            </div>
            <div class="actions">
                    <asp:LinkButton ID="btnCancelList" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancelList_Click" />
                </div>
        </asp:Panel>

        <asp:Panel ID="pnlBatchEntry" runat="server" CssClass="panel panel-block" Visible="false">            
            <asp:HiddenField ID="hfBatchId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-exchange"></i>
                    GL Transaction Export 
                </h1>
            </div>    
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-2">
                        <b>Batch:</b>                        
                    </div>
                    <div class="col-sm-4">
                      <asp:Literal ID="lBatchId" runat="server" />  
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-sm-2">
                        <b>Description:</b>
                    </div>
                    <div class="col-sm-4">
                        Contributions
                    </div>                    
                </div>
                <p />
                <div class="row">
                    <div class="col-sm-4">
                        <Rock:RockDropDownList ID="ddlJournalType" runat="server" Label="" PropertyName="JournalType"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <Rock:RockTextBox ID="tbPeriod" runat="server" Label="Accounting Period" PropertyName="Period" Width="50" SourceTypeName=""/>
                    </div>
                </div>

                <p />
                <div class="actions">
                    <asp:LinkButton ID="btnBatchEntry" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnBatchEntry_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlPreview" CssClass="panel panel-block" runat="server" Visible="false">

            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-th-list"></i> Batch Preview</h1>
            </div>
            <div class="panel-body">
                <asp:Literal ID="lPreviewString" runat="server" />                
            </div>
           
        </asp:Panel>
        
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <asp:Literal ID="lCompleteString" runat="server" />
                    </div>
                </div>    
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
