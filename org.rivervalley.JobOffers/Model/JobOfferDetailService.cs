using Rock.Data;

namespace org.rivervalley.JobOffers.Model
{
    public class JobOfferDetailService : Service<JobOfferDetail>
    {
        public JobOfferDetailService(RockContext context) : base(context) { }

        public bool CanDelete(JobOfferDetail item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
