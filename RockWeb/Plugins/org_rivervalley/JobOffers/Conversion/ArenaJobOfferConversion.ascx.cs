using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.Composition;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Entity;
using System.Text.RegularExpressions;

using org.rivervalley.JobOffers.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.JobOffers
{
    [DisplayName("Arena Job Offer Conversion")]
    [Category("org_rivervalley > JobOffers")]
    [Description("Arena Job Offer Conversion")]

    public partial class ArenaJobOfferConversion : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connArenaString = ConfigurationManager.ConnectionStrings["ArenaContext"].ConnectionString;
        private string connRockString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private DateTime today = DateTime.Now;
        private string offerDate;
        private string birthDate;
        private string effectiveDate;
        private string tenureDate;
        private DateTime nullDate = new DateTime(1900, 1, 1);        
        private int job_offer_id;
        private string job_offer_title;
        private int hr_employee_id;
        private string first_name;
        private string middle_name;
        private string last_name;
        private int address_id;
        private string primary_phone;
        private string email_address;
        private DateTime birth_date;
        private int marital_status_luid;
        private int job_title_luid;
        private string job_title_text;
        private int campus_id;
        private int pr_status_luid;
        private DateTime offer_date;
        private DateTime effective_date;
        private bool is_pastor;
        private decimal current_hourly_rate;
        private decimal weekly_hours;
        private decimal current_base_salary;
        private decimal new_hourly_rate;
        private decimal new_base_salary;
        private decimal housing_allowance_total;
        private decimal social_security_gross_up;
        private decimal medical_plan_type_luid;
        private decimal dental_plan_type_luid;
        private decimal medical_plan_employer_premium;
        private decimal dental_plan_employer_premium;
        private decimal life_insurance_employer_premium;
        private decimal ltd_insurance_employer_premium;
        private decimal medical_reimbursement_amount;
        private decimal hsa_fund_contribution;
        private decimal workers_comp_rate_per_100;
        private decimal workers_comp_premium;
        private decimal retirement_employer_paid_percentage;
        private decimal retirement_employer_paid_amount;
        private decimal car_reimbursement;
        private decimal cell_phone_reimbursement;
        private decimal car_allowance;
        private decimal wellness;
        private decimal christmas_bonus;
        private decimal continuing_education;
        private decimal other_benefit;
        private decimal payroll_tax;
        private decimal allocation_av;
        private decimal allocation_sav;
        private decimal allocation_fbo;
        private decimal allocation_egn;
        private decimal allocation_edn;
        private decimal vacation_days_annual;
        private decimal vacation_days_monthly_accural;
        private decimal sick_days;
        private int offer_status_luid;
        private string created_by;
        private string modified_by;
        private DateTime date_created;
        private DateTime date_modified;
        private bool active;
        private int organization_id;
        private int department_luid;
        private decimal allocation_cen;
        private decimal allocation_mnt;
        private Guid guid;
        //private string social_security;
        private decimal allocation_mpl;
        private DateTime tenure_date;
        private decimal medical_plan_employee_premium;
        private decimal dental_plan_employee_premium;
        private decimal allocation_wdb;
        private string comments;
        private string pattern = "'";
        private string replacement = "''";


        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
            lOutputString.Text = "Arena Job Offers<br>";
            arenaSQL();
            
                    }

        #endregion

        #region Events

        #endregion

        #region Methods

        protected void arenaSQL()
        {
            string qryString = "SELECT * FROM cust_rvc_hr_joboffer ORDER BY job_offer_id";
           
            Regex regex = new Regex(@"'");
            SqlConnection conn = new SqlConnection(connArenaString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                ClearAllocations();
                tenureDate = "null";
                job_offer_id = rdr.GetInt32(0);
                job_offer_title = rdr.GetString(1);
                Match match1 = regex.Match(job_offer_title);
                if (match1.Success)
                {
                    job_offer_title = Regex.Replace(job_offer_title, pattern, replacement);
                }
                if (rdr["hr_employee_id"] != DBNull.Value)
                {
                    hr_employee_id = rdr.GetInt32(2);
                }
                first_name = rdr.GetString(3);
                if (rdr["middle_name"] != DBNull.Value)
                {
                    middle_name = rdr.GetString(4);
                }
                last_name = rdr.GetString(5);
              
                Match match2 = regex.Match(last_name);
                if (match2.Success)
                {                    
                    last_name = Regex.Replace(last_name, pattern, replacement);
                }
                address_id = rdr.GetInt32(6);
                primary_phone = rdr.GetString(7);
                email_address = rdr.GetString(8);
                birth_date = rdr.GetDateTime(9);
                birthDate = birth_date.ToString();
                marital_status_luid = rdr.GetInt32(10);
                if (rdr["job_title_luid"] != DBNull.Value)
                {
                    job_title_luid = rdr.GetInt32(11);
                }
                if (rdr["job_title_text"] != DBNull.Value)
                {
                    job_title_text = rdr.GetString(12);
                    Match match3 = regex.Match(job_title_text);
                    if (match3.Success)
                    {
                        job_title_text = Regex.Replace(job_title_text, pattern, replacement);
                    }
                }
                campus_id = rdr.GetInt32(13);
                pr_status_luid = rdr.GetInt32(14);
                offer_date = rdr.GetDateTime(15);
                offerDate = offer_date.ToString();
                if (rdr["effective_date"] != DBNull.Value)
                {
                    effective_date = rdr.GetDateTime(16);
                    effectiveDate = effective_date.ToString();
                }
                else
                {
                    effectiveDate = nullDate.ToString();
                }               
                is_pastor = rdr.GetBoolean(17);
                if (rdr["current_hourly_rate"] != DBNull.Value)
                {
                    current_hourly_rate = rdr.GetDecimal(18);
                }
                if (rdr["weekly_hours"] != DBNull.Value)
                {
                    weekly_hours = rdr.GetDecimal(19);
                }
                if (rdr["current_base_salary"] != DBNull.Value)
                {
                    current_base_salary = rdr.GetDecimal(20);
                }
                if (rdr["new_hourly_rate"] != DBNull.Value)
                {
                    new_hourly_rate = rdr.GetDecimal(21);
                }
                if (rdr["new_base_salary"] != DBNull.Value)
                {
                    new_base_salary = rdr.GetDecimal(22);
                }
                if (rdr["housing_allowance_total"] != DBNull.Value)
                {
                    housing_allowance_total = rdr.GetDecimal(23);
                }
                if (rdr["social_security_gross_up"] != DBNull.Value)
                {
                    social_security_gross_up = rdr.GetDecimal(24);
                }
                if (rdr["medical_plan_type_luid"] != DBNull.Value)
                {
                    medical_plan_type_luid = rdr.GetInt32(25);
                }
                if (rdr["dental_plan_type_luid"] != DBNull.Value)
                {
                    dental_plan_type_luid = rdr.GetInt32(26);
                }
                if (rdr["medical_plan_employer_premium"] != DBNull.Value)
                {
                    medical_plan_employer_premium = rdr.GetDecimal(27);
                }
                if (rdr["dental_plan_employer_premium"] != DBNull.Value)
                {
                    dental_plan_employer_premium = rdr.GetDecimal(28);
                }
                if (rdr["life_insurance_employer_premium"] != DBNull.Value)
                {
                    life_insurance_employer_premium = rdr.GetDecimal(29);
                }
                if (rdr["ltd_insurance_employer_premium"] != DBNull.Value)
                {
                    ltd_insurance_employer_premium = rdr.GetDecimal(30);
                }
                if (rdr["medical_reimbursement_amount"] != DBNull.Value)
                {
                    medical_reimbursement_amount = rdr.GetDecimal(31);
                }
                if (rdr["hsa_fund_contribution"] != DBNull.Value)
                {
                    hsa_fund_contribution = rdr.GetDecimal(32);
                }
                if (rdr["workers_comp_rate_per_100"] != DBNull.Value)
                {
                    workers_comp_rate_per_100 = rdr.GetDecimal(33);
                }
                if (rdr["workers_comp_premium"] != DBNull.Value)
                {
                    workers_comp_premium = rdr.GetDecimal(34);
                }
                if (rdr["retirement_employer_paid_percentage"] != DBNull.Value)
                {
                    retirement_employer_paid_percentage = rdr.GetDecimal(35);
                }
                if (rdr["retirement_employer_paid_amount"] != DBNull.Value)
                {
                    retirement_employer_paid_amount = rdr.GetDecimal(36);
                }
                if (rdr["car_reimbursement"] != DBNull.Value)
                {
                    car_reimbursement = rdr.GetDecimal(37);
                }
                if (rdr["cell_phone_reimbursement"] != DBNull.Value)
                {
                    cell_phone_reimbursement = rdr.GetDecimal(38);
                }
                if (rdr["car_allowance"] != DBNull.Value)
                {
                    car_allowance = rdr.GetDecimal(39);
                }
                if (rdr["wellness"] != DBNull.Value)
                {
                    wellness = rdr.GetDecimal(40);
                }
                if (rdr["christmas_bonus"] != DBNull.Value)
                {
                    christmas_bonus = rdr.GetDecimal(41);
                }
                if (rdr["continuing_education"] != DBNull.Value)
                {
                    continuing_education = rdr.GetDecimal(42);
                }
                if (rdr["other_benefit"] != DBNull.Value)
                {
                    other_benefit = rdr.GetDecimal(43);
                }
                if (rdr["payroll_tax"] != DBNull.Value)
                {
                    payroll_tax = rdr.GetDecimal(44);
                }
                if (rdr["allocation_av"] != DBNull.Value)
                {
                    allocation_av = rdr.GetDecimal(45);
                }
                if (rdr["allocation_sav"] != DBNull.Value)
                {
                    allocation_sav = rdr.GetDecimal(46);
                }
                if (rdr["allocation_fbo"] != DBNull.Value)
                {
                    allocation_fbo = rdr.GetDecimal(47);
                }
                if (rdr["allocation_egn"] != DBNull.Value)
                {
                    allocation_egn = rdr.GetDecimal(48);
                }
                if (rdr["allocation_edn"] != DBNull.Value)
                {
                    allocation_edn = rdr.GetDecimal(49);
                }
                if (rdr["vacation_days_annual"] != DBNull.Value)
                {
                    vacation_days_annual = rdr.GetDecimal(50);
                }
                if (rdr["vacation_days_monthly_accural"] != DBNull.Value)
                {
                    vacation_days_monthly_accural = rdr.GetDecimal(51);
                }
                if (rdr["sick_days"] != DBNull.Value)
                {
                    sick_days = rdr.GetDecimal(52);
                }
                offer_status_luid = rdr.GetInt32(53);
                created_by = rdr.GetString(54);
                modified_by = rdr.GetString(55);
                date_created = rdr.GetDateTime(56);
                date_modified = rdr.GetDateTime(57);
                active = rdr.GetBoolean(58);
                organization_id = rdr.GetInt32(59);
                department_luid = rdr.GetInt32(60);
                if (rdr["allocation_cen"] != DBNull.Value)
                {
                    allocation_cen = rdr.GetDecimal(61);
                }
                if (rdr["allocation_mnt"] != DBNull.Value)
                {
                    allocation_mnt = rdr.GetDecimal(62);
                }
                guid = rdr.GetGuid(63);
                /*
                if (rdr["social_security"] != DBNull.Value)
                {
                    social_security = rdr.GetString(64);
                }
                */
                if (rdr["allocation_mpl"] != DBNull.Value)
                {
                    allocation_mpl = rdr.GetDecimal(65);
                }
                if (rdr["tenure_date"] != DBNull.Value)
                {
                    tenure_date = rdr.GetDateTime(66);
                    tenureDate = tenure_date.ToString();
                }
                else
                {
                    tenureDate = nullDate.ToString();
                }
                if (rdr["medical_plan_employee_premium"] != DBNull.Value)
                {
                    medical_plan_employee_premium = rdr.GetDecimal(67);
                }
                if (rdr["dental_plan_employee_premium"] != DBNull.Value)
                {
                    dental_plan_employee_premium = rdr.GetDecimal(68);
                }
                if (rdr["allocation_wdb"] != DBNull.Value)
                {
                    allocation_wdb = rdr.GetDecimal(69);
                }
                if (rdr["comments"] != DBNull.Value)
                {
                    comments = rdr.GetString(70);
                    Match match4 = regex.Match(comments);
                    if (match4.Success)
                    {
                        comments = Regex.Replace(comments, pattern, replacement);
                    }                   
                }               

                //rockSQL();
            }
        }

        protected void rockSQL()
        {            
            string qryString = "INSERT INTO _org_rivervalley_Arena_HR_Joboffer ";
            qryString = qryString + "(job_offer_id,job_offer_title,hr_employee_id,first_name,middle_name,last_name,address_id,primary_phone,email_address,birth_date,marital_status_luid,";
            qryString = qryString + "job_title_luid,job_title_text,campus_id,pr_status_luid,offer_date,effective_date,is_pastor,current_hourly_rate,weekly_hours,current_base_salary,new_hourly_rate,";
            qryString = qryString + "new_base_salary,housing_allowance_total,social_security_gross_up,medical_plan_type_luid,dental_plan_type_luid,medical_plan_employer_premium,dental_plan_employer_premium,";
            qryString = qryString + "life_insurance_employer_premium,ltd_insurance_employer_premium,medical_reimbursement_amount,hsa_fund_contribution,workers_comp_rate_per_100,workers_comp_premium,";
            qryString = qryString + "retirement_employer_paid_percentage,retirement_employer_paid_amount,car_reimbursement,cell_phone_reimbursement,car_allowance,wellness,christmas_bonus,continuing_education,";
            qryString = qryString + "other_benefit,payroll_tax,allocation_av,allocation_sav,allocation_fbo,allocation_egn,allocation_edn,vacation_days_annual,vacation_days_monthly_accural,sick_days,";
            qryString = qryString + "offer_status_luid,created_by,modified_by,date_created,date_modified,active,organization_id,department_luid,allocation_cen,allocation_mnt,guid,allocation_mpl,";
            qryString = qryString + "tenure_date,medical_plan_employee_premium,dental_plan_employee_premium,allocation_wdb,comments)";
            qryString = qryString + "VALUES(";
            qryString = qryString + job_offer_id + ",";
            qryString = qryString + "'" + job_offer_title + "',";
            qryString = qryString + hr_employee_id + ",";
            qryString = qryString + "'" + first_name + "',";
            qryString = qryString + "'" + middle_name + "',";
            qryString = qryString + "'" + last_name + "',";
            qryString = qryString + address_id + ",";
            qryString = qryString + "'" + primary_phone + "',";
            qryString = qryString + "'" + email_address + "',";
            qryString = qryString + "'" + birthDate + "',";
            qryString = qryString + marital_status_luid + ",";
            qryString = qryString + job_title_luid + ",";
            qryString = qryString + "'" + job_title_text + "',";
            qryString = qryString + campus_id + ",";
            qryString = qryString + pr_status_luid + ",";
            qryString = qryString + "'" + offerDate + "',";
            qryString = qryString + "'" + effectiveDate + "',";
            qryString = qryString + "'" + is_pastor + "',";
            qryString = qryString + current_hourly_rate + ",";
            qryString = qryString + weekly_hours + ",";
            qryString = qryString + current_base_salary + ",";
            qryString = qryString + new_hourly_rate + ",";
            qryString = qryString + new_base_salary + ",";
            qryString = qryString + housing_allowance_total + ",";
            qryString = qryString + social_security_gross_up + ",";
            qryString = qryString + medical_plan_type_luid  + ",";
            qryString = qryString + dental_plan_type_luid  + ",";
            qryString = qryString + medical_plan_employer_premium  + ",";
            qryString = qryString + dental_plan_employer_premium + ",";
            qryString = qryString + life_insurance_employer_premium  + ",";
            qryString = qryString + ltd_insurance_employer_premium + ",";
            qryString = qryString + medical_reimbursement_amount + ",";
            qryString = qryString + hsa_fund_contribution + ",";
            qryString = qryString + workers_comp_rate_per_100 + ",";
            qryString = qryString + workers_comp_premium + ",";
            qryString = qryString + retirement_employer_paid_percentage  + ",";
            qryString = qryString + retirement_employer_paid_amount + ",";
            qryString = qryString + car_reimbursement + ",";
            qryString = qryString + cell_phone_reimbursement + ",";
            qryString = qryString + car_allowance  + ",";
            qryString = qryString + wellness + ",";
            qryString = qryString + christmas_bonus + ",";
            qryString = qryString + continuing_education  + ",";
            qryString = qryString + other_benefit + ",";
            qryString = qryString + payroll_tax  + ",";
            qryString = qryString + allocation_av + ",";
            qryString = qryString + allocation_sav  + ",";
            qryString = qryString + allocation_fbo  + ",";
            qryString = qryString + allocation_egn + ",";
            qryString = qryString + allocation_edn + ",";
            qryString = qryString + vacation_days_annual  + ",";
            qryString = qryString + vacation_days_monthly_accural + ",";
            qryString = qryString + sick_days + ",";
            qryString = qryString + offer_status_luid + ",";
            qryString = qryString + "'" + created_by + "',";
            qryString = qryString + "'" + modified_by + "',";
            qryString = qryString + "'" + date_created + "',";
            qryString = qryString + "'" + date_modified + "',";
            qryString = qryString + "'" + active + "',";
            qryString = qryString + organization_id + ",";
            qryString = qryString + department_luid + ",";
            qryString = qryString + allocation_cen + ",";
            qryString = qryString + allocation_mnt + ",";
            qryString = qryString + "'" + guid + "',";
            //qryString = qryString + "'" + social_security + "',";
            qryString = qryString + allocation_mpl + ",";
            if(tenureDate != "null")
            {
                qryString = qryString + "'" + tenureDate + "',";
            }
            else
            {
                qryString = qryString + nullDate + ",";
            }
            qryString = qryString + medical_plan_employee_premium + ",";
            qryString = qryString + dental_plan_employee_premium + ",";
            qryString = qryString + allocation_wdb + ",";
            qryString = qryString + "'" + comments + "')";

            SqlConnection conn = new SqlConnection(connRockString);
            conn.Open();
            SqlCommand cmd = new SqlCommand(qryString, conn);
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();
            conn.Close();
            
        }

        private void ClearAllocations()
        {
            job_title_luid = 0;
            job_title_text = "";
            current_hourly_rate = 0;
            weekly_hours = 0;
            current_base_salary = 0;
            new_hourly_rate = 0;
            new_base_salary = 0;
            housing_allowance_total = 0;
            social_security_gross_up = 0;
            medical_plan_type_luid = 0;
            dental_plan_type_luid = 0;
            medical_plan_employer_premium = 0;
            dental_plan_employer_premium = 0;
            life_insurance_employer_premium = 0;
            ltd_insurance_employer_premium = 0;
            medical_reimbursement_amount = 0;
            hsa_fund_contribution = 0;
            workers_comp_rate_per_100 = 0;
            workers_comp_premium = 0;
            retirement_employer_paid_percentage = 0;
            retirement_employer_paid_amount = 0;
            car_reimbursement = 0;
            cell_phone_reimbursement = 0;
            car_allowance = 0;
            wellness = 0;
            christmas_bonus = 0;
            continuing_education = 0;
            other_benefit = 0;
            payroll_tax = 0;
            vacation_days_annual = 0;
            vacation_days_monthly_accural = 0;
            sick_days = 0;
            medical_plan_employee_premium = 0;
            dental_plan_employee_premium = 0;
            comments = "";
            allocation_av = 0;
            allocation_sav = 0;
            allocation_fbo = 0;
            allocation_egn = 0;
            allocation_edn = 0;
            allocation_cen = 0;
            allocation_mnt = 0;
            allocation_mpl = 0;
            allocation_wdb = 0;
            effective_date = nullDate;
            tenure_date = nullDate;
    }

        #endregion

    }
}