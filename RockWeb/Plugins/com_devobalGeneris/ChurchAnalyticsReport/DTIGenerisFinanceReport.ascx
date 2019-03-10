<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DTIGenerisFinanceReport.ascx.cs" Inherits="RockWeb.Plugins.com_devobalGeneris.ChurchAnalyticsReport.Plugins_DTIGenerisFinanceReport" %>

<asp:HiddenField ID="hfPageId" runat="server" />
<label>
    "Our report can take up to 5 minutes to pull depending on your database size. It will appear below when it finishes."
</label>
<rock:grid id="grd_person" runat="server" allowsorting="true">
    <Columns>
        <asp:BoundField DataField="donations_id" HeaderText="Donation ID" />
        <asp:BoundField DataField="donations_created_at" HeaderText="Created" />
         <asp:BoundField DataField="donations_updated_at" HeaderText="Updated" />
         <asp:BoundField DataField="donations_transactions_type" HeaderText="Transaction Type" />
         <asp:BoundField DataField="donations_amount" HeaderText="Amount" />
         <asp:BoundField DataField="members_id" HeaderText="Member Id" />
         <asp:BoundField DataField="members_first_name" HeaderText="First Name" />
         <asp:BoundField DataField="members_last_name" HeaderText="Last Name" />
         <asp:BoundField DataField="members_street_1" HeaderText="Street1" />
         <asp:BoundField DataField="members_street_2" HeaderText="Street2" />
         <asp:BoundField DataField="members_city" HeaderText="City" />
         <asp:BoundField DataField="members_state" HeaderText="State" />
         <asp:BoundField DataField="members_postal_code" HeaderText="Postal Code" />
         <asp:BoundField DataField="members_phone" HeaderText="Phone" />
         <asp:BoundField DataField="members_email" HeaderText="Email" />
         <asp:BoundField DataField="members_dob" HeaderText="DOB" />
         <asp:BoundField DataField="members_created_at" HeaderText="Member Create" />
         <asp:BoundField DataField="members_updated_at" HeaderText="Member Update" />
         <asp:BoundField DataField="families_id" HeaderText="Family Id" />
         <asp:BoundField DataField="families_created_at" HeaderText="Family Created" />
         <asp:BoundField DataField="families_updated_at" HeaderText="Family Updated" /> 

    </Columns>

</rock:grid>
