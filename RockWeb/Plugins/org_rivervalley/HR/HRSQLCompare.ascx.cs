using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

using org.rivervalley.GLFunds.Data;
using org.rivervalley.GLFunds.Model;

using Rock;
using Rock.Constants;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;
using Rock.Attribute;

namespace RockWeb.Plugins.org_rivervalley.HR
{
    [DisplayName( "HR SQL Compare" )]
    [Category( "org_rivervalley > HR" )]
    [Description( "HR Table compare for conversion efforts" )]

    public partial class HRSQLCompare : Rock.Web.UI.RockBlock
    {
        #region Fields

        //private Person cPerson = null;
        //private int rockPersonId;
        private int convertedPersonId;
        private int arenaDR;
        //private int rockDR;
        private int arenaVT;
        //private int rockVT;
        private int arenaLL;
        //private int rockLL;
        private int arenaDL;
        //private int rockDL;

        List<int> dr_list = new List<int>();
        List<int> vt_list = new List<int>();
        List<int> ll_list = new List<int>();
        List<int> dl_list = new List<int>();
        List<int> r2_list = new List<int>();

        #endregion

        private string connStringArena = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;
        private string connStringRock = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;

        #region Base Control Methods

        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );
        }

        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );
            lOutputString.Text = "<h1>Arena HR Reports To 2 Field</h1>";

            //GetRockDLValues();            
            //arenaDLSQL();

            //GetRockVTValues();
            //arenaVTSQL();

            //GetRockLLValues();
            //arenaLLSQL();

            //GetRockDRValues();
            //arenaDRSQL();

            GetRockReportsToValues();
            arenaR2SQL();
        }

        #endregion

        #region Methods
        protected void arenaVTSQL()
        {
            string qryString = "select distinct(VT_Rep) from cust_hr_employee";

            SqlConnection conn = new SqlConnection(connStringArena);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                arenaVT = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0);
                lOutputString.Text += "<br> Arena ID: " + arenaVT;
                ConvertArenaToRockPersonId(arenaVT);
                lOutputString.Text += " ==> Rock ID: " + convertedPersonId;
                if (vt_list.Contains(convertedPersonId)) { lOutputString.Text += " OK "; } else { lOutputString.Text += " ****** NOT FOUND ****** "; }
            }
            conn.Close();
        }

        protected void arenaDLSQL()
        {
            string qryString = "select distinct(DL_Rep) from cust_hr_employee";

            SqlConnection conn = new SqlConnection(connStringArena);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                arenaDL = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0);
                lOutputString.Text += "<br> Arena ID: " + arenaDL;
                ConvertArenaToRockPersonId(arenaDL);
                lOutputString.Text += " ==> Rock ID: " + convertedPersonId;
                if (dl_list.Contains(convertedPersonId)) { lOutputString.Text += " OK "; } else { lOutputString.Text += " ****** NOT FOUND ****** "; }
            }
            conn.Close();
        }

        protected void arenaLLSQL()
        {
            string qryString = "select distinct(LL_Mgr) from cust_hr_employee";

            SqlConnection conn = new SqlConnection(connStringArena);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                arenaLL = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0);
                lOutputString.Text += "<br> Arena ID: " + arenaLL;
                ConvertArenaToRockPersonId(arenaLL);
                lOutputString.Text += " ==> Rock ID: " + convertedPersonId;
                if (ll_list.Contains(convertedPersonId)) { lOutputString.Text += " OK "; } else { lOutputString.Text += " ****** NOT FOUND ****** "; }
            }
            conn.Close();
        }

        protected void arenaDRSQL()
        {
            string qryString = "select distinct(direct_report) from cust_hr_employee";

            SqlConnection conn = new SqlConnection(connStringArena);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                arenaDR = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0);
                lOutputString.Text += "<br> Arena Person ID: " + arenaDR;
                ConvertArenaToRockPersonId(arenaDR);
                lOutputString.Text += " ==> Rock Person ID: " + convertedPersonId;
                if (dr_list.Contains(convertedPersonId)) { lOutputString.Text += " OK "; } else { lOutputString.Text += " ****** NOT FOUND ****** "; }
            }
            conn.Close();
        }

        protected void arenaR2SQL()
        {
            string qryString = "select distinct(reports_to_2) from cust_hr_employee";

            SqlConnection conn = new SqlConnection(connStringArena);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                arenaDR = rdr.IsDBNull(0) ? 0 : rdr.GetInt32(0);
                lOutputString.Text += "<br> Arena Person ID: " + arenaDR;
                ConvertArenaToRockPersonId(arenaDR);
                lOutputString.Text += " ==> Rock Person ID: " + convertedPersonId;
                if (r2_list.Contains(convertedPersonId)) { lOutputString.Text += " OK "; } else { lOutputString.Text += " ****** NOT FOUND ****** "; }
            }
            conn.Close();
        }

        protected void ConvertArenaToRockPersonId(int personId)
        {
            // get Person data based on Foreign Key 

            var rockContext = new RockContext();
            var qry = new PersonService(rockContext).Queryable();
            qry = qry.Where(a => a.ForeignId == personId);
            foreach (var row in qry)
            {
                convertedPersonId = row.Id;
            }
        }

        protected void GetRockDRValues()
        {
            string qryString = "SELECT p.Id FROM AttributeValue av, Person p WHERE p.Id = av.EntityId AND av.AttributeId = 3281 AND av.Value = 'True'";

            SqlConnection conn = new SqlConnection(connStringRock);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                dr_list.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        protected void GetRockLLValues()
        {
            string qryString = "SELECT p.Id FROM GroupMember gm, Person p WHERE gm.PersonId = p.Id AND GroupId = 77458"; 

            SqlConnection conn = new SqlConnection(connStringRock);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                ll_list.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        protected void GetRockVTValues()
        {
            string qryString = "SELECT p.Id FROM GroupMember gm, Person p WHERE gm.PersonId = p.Id AND GroupId = 77457 ";

            SqlConnection conn = new SqlConnection(connStringRock);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                vt_list.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        protected void GetRockDLValues()
        {
            string qryString = "SELECT p.Id FROM GroupMember gm, Person p WHERE gm.PersonId = p.Id AND GroupId = 77458"; 

            SqlConnection conn = new SqlConnection(connStringRock);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                dl_list.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        protected void GetRockReportsToValues()
        {
            string qryString = "SELECT p.Id FROM AttributeValue av, Person p WHERE p.Id = av.EntityId AND av.AttributeId = 3281 AND av.Value = 'True'";

            SqlConnection conn = new SqlConnection(connStringRock);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                r2_list.Add(rdr.GetInt32(0));
            }
            conn.Close();
        }

        #endregion

        #region Events

        #endregion

    }
}