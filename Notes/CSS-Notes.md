# CSS

cascading style sheets, a language that describes the style of an html file

---

## Document-level style sheets

* apply to the whole document is which they appear
* styles defined in the head section
* &lt;style type = &quot;text/css&quot;&gt;

## External style sheets

* can be applied to any number of documents
* specify style sheets to use in the head section
* &lt;link rel = &quot;stylesheet&quot; type = &quot;text/css&quot; href = &quot;xxx.css&quot;&gt;

## CSS syntax

selector: html element that you want to style


## Frequently used patterns for selectors

* #xx: selects the elements with id = &quot;xx&quot;—unique definition
* .xxx: selects all elements with class = &quot;xxx&quot;—can be a group
* *: selects all elements
* x: selects all &lt;x&gt; elements
* x1, x2: selects all &lt;x1&gt; and &lt;x2&gt; elements
* x1 x2: selects all &lt;x2&gt; inside &lt;x1&gt;
* priorities: important! &gt; inline style &gt; id &gt; class &gt; tag &gt; \*
* the bottommost style will overlap the former styles

## Colors

* color name: like gray, red, blue
* HEX values: like #ff6347
* RGB value: like rgb(255,0,0)

## Fonts

* font-size: px – pixels; pt – points; em – iem is equal to the current font size; % - of the current size
* font-family: holds several font names as a fallback system. If the browser doesn&#39;t support the first, it will try the next
* font-style: used to specify italic text
  * normal: shown normally
  * italic: shown in italics
* font-variant: specifies whether or not a text should be displayed in a small-caps (all lowercase letters are converted upper, but the size is smaller than original upper) font
* font-weight: specifies the weight of a font, can be normal, bold, bolder, and lighter
* font shorthand: order must be: style, weight, size, name

## Text

* color: set the color of text
* text-align: set the horizontal alignment of a text, can be center, left, and right
* text-decoration: set or remove decorations from text
  * none: often used to remove underlines from links
  * overline: add a line over the text
  * line-through: add a line through the text
  * underline: add an underline
* text-transform:
  uppercase: turn everything into uppercase
  lowercase: turn everything into lowercase
  capitalize: capitalizes the first letter of each word
* text-indent: specifies the indentation of the first line
* text-spacing: specifies the space between the characters
* word-spacing: specify the space between the words
* line-height: specifies the space between lines

## Links

* can be styled with any CSS property
* a: link: a normal, unvisited link
* a: visited: a link the user has visited
* a: hover: a link when the user hovers (mouse over) over it, must come after link and visited
* a: active: a link the moment it is clicked, must come after hover
* color, background color

## List
* list-style-type:
  * unordered list: circle, square, none
  * ordered list: upper/lower-roman, upper/lower-alpha, numbers
* list-style-image: url(&#39;xxx&#39;): specifies an image as the list item marker
* list-style-position:
  * outside: markers will be outside the list item, default
  * inside: markers will inside the list item
* background, margin(-left/right ), padding(-top/bottom)

## Float
positions and formats content, text float around another elements (usually image or table)

* left: floats to the left of its container
* right: floats to the right of its container
* none: the element does not float, default
* inherit: inherits the float value of its parent

## Box model in CSS:

![](boarder.png)

## Border

* 4 values—top, right, bottom, left; 3 values—top, left/right, bottom
* 2 values—top/bottom, left/right; 1 value—all sides
* border-top/bottom/left/right-xxx
* border-style: specifies what kind of border to display 
  * dashed, dotted, solid, double, groove, ridge, inset, outset, none, hidden, mix:
* border-width: specifies the width of the four borders
  * thin, medium (default), thick, or a length value in pix
* border-color: sets the color, if not set, inherits the element color
  * name, Hex, RGB, transparent
* shorthand property:
  * border: width style(required) color
* border-radius: add rounded borders
* margin/padding(-top/bottom/left/right)

## Background

* background-color: specifies the background color
* background-image: url(&quot;xxx&quot;) : specifies an image to use as the background
* background-repeat: sets the repeat way of image
  * repeat-x: repeated only horizontally
  * repeat-y: repeated only vertically
  * no-repeat: repeated once
* background-position: sets the position of the image
* background-attachment: fixed: specifies that the background image should be fixed

## Blocks tags (often used with CSS)

* &lt;div&gt; &lt;/div&gt; used as a container for other html elements, to style blocks of content
  useful for style specifications
* &lt;span&gt; &lt;/span&gt; used to style parts of the text
