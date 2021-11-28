﻿using DotLiquid;

using Rock.Utility;
using Rock.Web.UI.Controls;

namespace org.rivervalley.Engagement
{
    /// <summary>
    /// Custom startup class used to register custom filters
    /// </summary>
    public class Startup : IRockStartup
    {
        public int StartupOrder => 0;

        /// <summary>
        /// Called when rock application starts up.
        /// </summary>
        /// <exception cref="System.NotImplementedException"></exception>
        public void OnStartup()
        {
            Template.RegisterFilter( typeof( Lava.RockFilters ) );
        }
    }
}