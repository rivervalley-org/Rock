<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ClearstreamPhoneMatching.ascx.cs" Inherits="RockWeb.Plugins.org_riverValley.Reporting.ClearstreamPhoneMatching" %>

<asp:UpdatePanel ID="upnlContent" runat="server">

    <ContentTemplate>

        <asp:Panel ID="pnlView" runat="server" CssClass="panel panel-block">

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-download"></i>
                    Clear Stream Import
                </h1>
            </div>

            <div class="panel-body">

                <asp:Panel ID="pnlEntry" runat="server" Visible="true">

                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                    <Rock:NotificationBox ID="nbMessage" runat="server" />

                    <div class="row">
                        <div class="col-sm-3 col-md-2">
                            <Rock:FileUploader ID="fuTxnFile" runat="server" Label="Clear Stream Import CSV" Required="true" OnFileUploaded="fuTxnFile_FileUploaded" Visible="false" />
                        </div>
                    </div>

                    <div class="actions">
                        <Rock:BootstrapButton ID="btnMatch" runat="server" CssClass="btn btn-primary" Text="Match" OnClick="btnMatch_Click" Visible="false" DataLoadingText="Matching..." />
                    </div>

                </asp:Panel>

                <asp:Panel ID="pnlConfirm" runat="server" Visible="false">

                    <Rock:NotificationBox ID="nbConfirm" runat="server" NotificationBoxType="Info" />

                    <Rock:Grid ID="gRows" runat="server" DisplayType="Full" AllowSorting="true">
                        <Columns>
                            <Rock:SelectField></Rock:SelectField>
                            <Rock:RockBoundField HeaderText="Phone Number" DataField="PhoneNumber" />
                            <Rock:RockBoundField HeaderText="Name" DataField="Name" />
                            <Rock:RockBoundField HeaderText="Email" DataField="Email" />
                            <Rock:RockBoundField HeaderText="Campus" DataField="Campus" />
                            <Rock:RockBoundField HeaderText="Other Possible Matches" DataField="OtherPossibleMatches" HtmlEncode="false" />
                        </Columns>
                    </Rock:Grid>

                </asp:Panel>
            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>
