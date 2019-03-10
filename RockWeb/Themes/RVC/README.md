# River Valley Church Rock Theme
Based off of Arena my.rivervalley.org template

## Blocks in base template
* Top Nav Zone
  - Top Nav, HTML Block
    - Lava/HTML: `{% include "~~/Assets/Lava/TopNav.lava" %}`
    - Context Name: TopNav
* Header Zone
  * Header, HTML Block
    * Lava/HTML: `{% include "~~/Assets/Lava/Header.lava" %}`
    * Context Name: SiteHeader
* Navigation Zone
  * Navigation, Page Menu Block
    * Template: `{% include "~~/Assets/Lava/PageNav.lava" %}`
    * Number of Levels: 2
* Full Width Top Zone
  * Login, Login Status Block
    - Default
    - CSS Class: absoluteright
* Footer Zone
  * Footer Menu, HTML Block
    * Lava/HTML: `{% include "~~/Assets/Lava/Footer.lava" %}`
    * Context Name: Footer
* Footer Bottom Zone
  * Footer Bottom, HTML block
    * Context Name: FooterBottom
    * Lava/HTML: `{% include "~~/Assets/Lava/FooterBottom.lava" %}`
  * Login, Login Status Block
    - Default
    - CSS Class: `dropup`


