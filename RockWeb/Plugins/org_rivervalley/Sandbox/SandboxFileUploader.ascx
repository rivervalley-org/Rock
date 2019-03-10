<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxFileUploader.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxFileUploader" %>
<asp:HiddenField ID="hfTestId" runat="server" />
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    File Uploader
                </h1>                
            </div>
            <div class="panel-body">
                 <div class="row">
                    <div class="col-md-12">                                               
                        <Rock:FileUploader ID="fuJobDescription" runat="server" Label="UploadedFiles"  IsBinaryFile="false" RootFolder="~/Content/InternalSite/HR/PRF_Job_Descriptions" OnFileUploaded="fuJobDescription_UpLoad" OnFileRemoved="fuJobDescription_Removed" Visible="true"  />
                        
                        <asp:Literal ID="lUploadStatus" runat="server" Visible="false" />
                        <asp:LinkButton ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-link" OnClick="btnDelete_Click" CausesValidation="false" />
                    </div>                    
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" CausesValidation="false" />
                </div>   
                <div class="row">
                    <div class="col-md-12">
                        <asp:Literal ID="lDebugString" runat="server" />
                        <p><a href="https://rock.rivervalley.org/Content/InternalSite/HR/PRF_Job_Descriptions/Test PDF Doc.pdf" target="blank">PDF File</a>        
                        <p><a href="https://rock.rivervalley.org/Content/InternalSite/HR/PRF_Job_Descriptions/Test TXT Doc.txt" target="blank">TXT File</a>     
                        <p><a href="https://rock.rivervalley.org/Content/InternalSite/HR/PRF_Job_Descriptions/Test Word Doc.docx" target="blank">DOCX File</a>     
                                 
                        
                    </div>
                </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>
