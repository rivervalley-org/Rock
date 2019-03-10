using org.rivervalley.PrayerDates.Data;
using Rock.Model;

namespace org.rivervalley.PrayerDates.Model
{
    /// <summary>
    /// 
    /// </summary>
    public class PrayerDatesDetailService : PrayerDatesService<PrayerDatesDetail>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PrayerDatesDetailService"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public PrayerDatesDetailService(PrayerDatesContext context) : base(context) { }

    }
}