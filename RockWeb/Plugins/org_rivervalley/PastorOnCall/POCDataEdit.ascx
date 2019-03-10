<%@ Control Language="C#" AutoEventWireup="true" CodeFile="POCDataEdit.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PastorOnCall.POCDataEdit" %>
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
        <asp:Panel ID="pnlPastorSelection" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfEditId" runat="server" />
            <asp:HiddenField ID="hfCampusId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Campus - <asp:Literal ID="lCampusName" runat="server" />
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddPastors" runat="server" Label="Select Pastor" Required="false" />                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpScheduleDate" runat="server" Label="Schedule Date" DatePickerType="Date" Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnPastorSave" runat="server" Text="Select" CssClass="btn btn-primary" OnClick="btnPastorSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnPastorCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDelete" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfDeleteId" runat="server" />
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
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Pastor On Call
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        Scheduled Updated
                    </div>                   
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

