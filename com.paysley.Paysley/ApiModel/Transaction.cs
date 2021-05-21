using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace com.paysley.Paysley
{
    public class PaysleyResponse
    {
        public int limit { get; set; }
        public int page { get; set; }
        public int page_count { get; set; }
        public List<PaysleyPayment> payments { get; set; }
        public int total_count { get; set; }
    }

    public class PaysleyPayment
    {
        public decimal amount { get; set; }
        public string currency { get; set; }
        public string customer_phone_number { get; set; }
        public string email { get; set; }
        public DateTime payment_date { get; set; }
        public string payment_id { get; set; }
        public string payment_type { get; set; }
        public string reference_number { get; set; }
        public string reference_payment_id { get; set; }
        public string result_description { get; set; }
        public string shipping_information { get; set; }
        public string status { get; set; }
        public DateTime transaction_date { get; set; }
        public string transaction_id { get; set; }
        public string transaction_type { get; set; }
        public PaysleyRequestDetail request_detail { get; set; }
    }

    public class PaysleyRequestDetail
    {
        public string payment_type { get; set; }
        public string reference { get; set; }
        public string currency { get; set; }
        public string url { get; set; }
        public DateTime date { get; set; }
        public Dictionary<string, string> additional_info { get; set; }
        public Dictionary<string, string> additional_info_text { get; set; }
        public Dictionary<string, string> additional_info_dropdown { get; set; } 
    }
}
