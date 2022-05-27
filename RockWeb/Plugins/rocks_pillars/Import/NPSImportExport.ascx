<%@ Control Language="C#" AutoEventWireup="true" CodeFile="NPSImportExport.ascx.cs" Inherits="RockWeb.Plugins.rocks_pillars.Import.NPSImportExport" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlTabs" runat="server" Visible="true">
                
            <ul class="nav nav-pills margin-b-md">
                    <li id="liExport" runat="server" class="active">
                        <asp:LinkButton ID="lbExportTab" runat="server" Text="Export" OnClick="lbTab_Click" />
                    </li>
                    <li id="liImport" runat="server">
                        <asp:LinkButton ID="lbImportTab" runat="server" Text="Import" OnClick="lbTab_Click" />
                    </li>
             </ul>

            <asp:Panel ID="pnlExport" runat="server" Visible="true" >

                <div class="row">
                    <div class="col-md-2">
                        <Rock:DataViewItemPicker ID="dvpDataViewPicker" runat="server" Label="Data View" EntityTypeId="15" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2">
                        <asp:LinkButton ID="btnExport" runat="server" CssClass="btn btn-primary" ToolTip="Export " OnClick="btnExport_Click"><i class="fa fa-download"></i> Export</asp:LinkButton>
                    </div>
                </div>

                <br /><br />

                 <asp:Panel ID="pnlExpSuccess" runat="server" Visible="false">
                    <div class="alert alert-success">
                    <p>File has been successfully created.</p>
                        <p>
                            <asp:HyperLink ID="hlDownload" runat="server" Text="Download" CssClass="btn btn-success" />
                        </p>
                    </div>
                </asp:Panel>
            </asp:Panel>

            <asp:Panel ID="pnlImport" runat="server" Visible="false" >

                <div class="row">
                    <div class="col-md-2">
                        <Rock:FileUploader ID="fileuploader" runat="server" Label="Import File" OnFileUploaded="fuImport_ImportNPS" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2">
                        <Rock:RockDropDownList ID="ddlValueCol" runat="server" Label="Value Column" Help="The selected column that will be placed in Person Attribute Value." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2">
                        <Rock:RockDropDownList ID="ddlPersonAttribute" runat="server" Label="Person Attribute" Help="The selected Person Attribute that the value will be placed into." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2">
                        <asp:LinkButton ID="btnImport" runat="server" CssClass="btn btn-primary" ToolTip="Import " OnClick="btnImport_Click"><i class="fa fa-upload"></i> Import</asp:LinkButton>
                    </div>
                </div>

                <br /><br />

                 <asp:Panel ID="pnlImpSuccess" runat="server" Visible="false">
                    <div class="alert alert-success">
                        <asp:Label ID="lblImpSuccess" runat="server" />
                    </div>
                </asp:Panel>

                 <asp:Panel ID="pnlImpWarning" runat="server" Visible="false">
                    <div class="alert alert-warning">
                        <asp:Label ID="lblImpWarning" runat="server" />
                    </div>
                </asp:Panel>

            </asp:Panel>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
