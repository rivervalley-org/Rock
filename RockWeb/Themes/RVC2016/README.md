# River Valley Church Rock Theme
Based off of Arena my.rivervalley.org template
  
## Needed Defined Types
* Defined Type for the Page's Header Images
  * Name: RVC Page Headers
  * Description: List of pages (Value) and their corresponding header image URLs (Description).
  * Help Text: Value: Page ID (1234)    Description: URL to header image (/Themes/RVC/Assets/img/header-default.jpg)
  * Category: Tools 
* Defined Type for the Page's Header Button
  * Name: RVC Header Button List
  * Description: List of pages (Value) and their corresponding header/hero buttons (Description).
  * Help Text: Value: Page ID (1234) Description: Add a comma separated string of the URL and desired button text to add a styled button in the banner section. Example: 'www.youthsite.org, visit youth page'
  * Category: Tools 

## Needed Global Attributes
* Global Attribute for Default Header Image
  * Name: RVC Header Default
  * Description: The default image to use as a page banner.
  * Categories: CMS
  * Key: RVCHeaderDefault
  * Field Type: Text
  * Value: "" (example: /Themes/RVC/Assets/img/header-default.jpg)
* Global Attribute for Page Headers Defined Type ID
  * Name: RVC Header List
  * Description: The GUID of the Defined type to use as the list to manage RVC Page Headers.
  * Categories: CMS
  * Key: RVCHeaderList
  * Field Type: DefinedType
* Global Attribute for Page Header Buttons Defined Type ID
  * Name: RVC Header Button List
  * Description: The GUID of the Defined type to use as the list to manage RVC Page Header Buttons.
  * Categories: CMS
  * Key: RVCHeaderButtonList
  * Field Type: DefinedType

## Blocks in base template
* Header Zone
  * Header, HTML Block
    * Lava/HTML: `{% include "~~/Assets/Lava/Header.lava" %}`
    * Context Name: SiteHeader
* Navigation Zone
  * Navigation, Page Menu Block
    * Template: `{% include '~~/Assets/Lava/PageNav.lava' %}`
    * Number of Levels: 2
* Login Zone
  * Login, Login Status Block
    * Default
* Footer Zone
  * Footer Menu, HTML Block
    * Lava/HTML: `{% include "~~/Assets/Lava/FooterMenu.lava" %}`
    * Context Name: FooterMenu
* Footer Bottom Zone
  * Footer Left, HTML block
    * Pre-HTML: `<div class="site-info__left">`
    * Post-HTML: `</div>`
    * Context Name: ftrBottomLeft
    * Lava/HTML: `<a href="http://www.mydailysoap.org" target="_blank">MY DAILY SOAP</a><span class="desktop-only">&nbsp;|&nbsp;<a href="https://network.rivervalley.org" target="_blank">FREE RESOURCES</a>
</span>`
  * Footer Right, HTML Block
    * Pre-HTML: `<div class="site-info__left">`
    * Post-HTML: `</div>`
    * Context Name: ftrBottomRight
    * Lava/HTML: `<a href="https://rivervalley.org/contact-us">CONTACT</a> <span class="copyright"> <span class="sep"> | </span> COPYRIGHT © 2016 River Valley Church</span>`


