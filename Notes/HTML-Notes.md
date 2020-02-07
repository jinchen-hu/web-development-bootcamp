# HTML: Hypertext Markup Language

---

## Main Tags

* &lt;!DOCTYPE html&gt;  declaration defines this document to be HTML5
* &lt;html lang = &quot;en&quot; &gt; &lt;/html&gt; root element of an html page
* &lt;head&gt; &lt;/head&gt; contains meta information about the document
* &lt;title&gt; &lt;/title&gt; specifies a title for the document
* &lt;body&gt; &lt;/body&gt; contains the visible page content

## Text tags

* &lt;p&gt; &lt;/p&gt; defines a paragraph
* &lt;br&gt; defines a line break
* &lt;h1&gt; &lt;/h1&gt;…&lt;h6&gt; &lt;/h6&gt; denotes 1st…6th level of headers
* &lt;blockquote cite = &quot;…&quot;&gt; &lt;/blockquote&gt; defines a section that quoted from another source, indented
* &lt;strong&gt; &lt;/strong&gt; defines important text, bold
* &lt;em&gt; &lt;/em&gt; emphasis text, makes it italic
* &lt;sub&gt; &lt;/sub&gt; defines subscript text
* &lt;sup&gt; &lt;/sup&gt; defines superscript text

## Character entitles

space: &amp;nbsp

## Image tag

&lt;img src = &quot;…&quot; alt = &quot;…&quot; width = &quot;…&quot; height = &quot;…&quot;&gt;
**Must have 'src' and 'alt' attributes**

## Links tags

* &lt;a href = &quot;..&quot;&gt; &lt;/a&gt; href attribute is required and indicates the resource
* &lt;a href = &quot;..&quot;&gt; &lt;img&gt; &lt;/a&gt;  images as a link target attribute:
* target = &quot;\_balnk&quot; opens the link in a new window or tab
* target = &quot;\_self&quot; opens the link in the same widow, default
* title = &quot;…&quot; the information is most often shown as a tooltip text when the mouse over
* **email address:** &lt;a href = &quot;mailto: [xxx@xxx.xx](mailto:xxx@xxx.xx)&quot; &gt; &lt;/a&gt;

## List tags

* &lt;li&gt; &lt;/li&gt; defines a list
* &lt;ul&gt; &lt;/ul&gt; unordered list
* style = &quot;list-style-type: xxx&quot;

  * disc: bullet, default
  * circle: circle
  * square: square
  
  * none: will not be marked
* &lt;ol&gt; &lt;/ol&gt; ordered list
* type = &quot;xxx&quot;

  * 1: numbers, default
* a: starts with lowercase letters
  
  * A: starts with uppercase letters
  * i: starts with lowercase roman letters
  * I: starts with uppercase roman letters
* &lt;dl&gt; &lt;/dl&gt; defines description list
* &lt;dt&gt; &lt;/dt&gt; defines description term
* &lt;dd&gt; &lt;/dd&gt; describe each term

## Table tags

* &lt;table&gt; &lt;/table&gt; defines a table
* &lt;caption&gt; &lt;/caption&gt; add a caption
* &lt;th&gt; &lt;/th&gt; defines a table header
* &lt;tr&gt; &lt;/tr&gt; defines a row
* &lt;td&gt; &lt;/td&gt; defines a table data/cell
* &lt;th colspan = &quot;x&quot;&gt; make a cell span more than one column
* &lt;th rowspan = &quot;x&quot;&gt; make a cell span more than one row

## Form tags

* &lt;form&gt; &lt;/form&gt; defines a form used to collect user input
* &lt;label&gt; &lt;/label&gt; sets a chunk of text as label
* &lt;input type = &quot;xxx&quot; name = &quot;xxx&quot; value = &quot;xxx&quot;&gt; to collect data
  * name attribute: required, must be filled out
  * type = &quot;text&quot;: defines a one-line input field, default width is 20 characters
  * size = &quot;x&quot;: specifies the size for the input field
  * maxlength = &quot;x&quot;: specifies the maximum allowed length for input
  * type = &quot;radio&quot;: defines a radio button for selecting one of many choices
  * type = &quot;checkbox&quot; defines a checkbox let users select 0 to more options
  * type = &quot;password&quot;: defines a password field
  * type = &quot;number&quot;: defines a numeric input field, uses attributes to add restrictions. min/max = &quot;x&quot;
  * type = &quot;submit&quot;: defines a submit button for submitting the form
  * type = &quot;reset&quot;: defines a reset button that will reset all form values
  * type = &quot;search&quot;: used for search fields
  * type = &quot;color&quot;: show a color picker
  * type = &quot;date&quot;: show a date picker, and can use the min and max attribute to add restrictions to date, max = &quot;xxxx-xx-xx&quot; min = &quot;xxxx-xx-xx&quot;
  * type = &quot;time&quot;: allow users to select a time
  * type = &quot;email&quot;: lets users input an email address
  * type = &quot;file&quot;: defines a file-select field and &quot;Browse&quot; button for file uploads
* &lt;textarea name = &quot;xxx&quot; rows = &quot;x&quot; cols = &quot;x&quot; &gt; &lt;/textarea&gt; defines a text area
* &lt;fieldset&gt; &lt;/fieldset&gt; group related data in a form
* &lt;legend&gt; &lt;/legend&gt; defines a caption for the fieldset
* &lt;select name = &quot;xxx&quot;&gt; &lt;/select&gt; defines a drop-down list
  * size = &quot;x&quot;: specifies the number of visible values
  * &lt;option value = &quot;xxx&quot;&gt; &lt;/option&gt; defines an option that can be selected,
  * selected--attribute to define a pre-selected option
  * uses &lt;p&gt; tag to distinguish different parts of the form
* placeholder="xxx" value pre-shown

## Media tags

* &lt;audio&gt; &lt;/audio&gt; specifies a standard way to embed audio in a web page
* controls attribute: adds audio controls, like play, pause, and volume
* &lt;source src = &quot;xxx&quot; type = &quot;audio/ogg(mpeg)&quot;&gt; allows you to specify alternative audio file which the browser may choose form. The first recognized format will be played
* &lt;video width = &quot;x&quot; height = &quot;x&quot; &gt; to show a video in html
* controls attribute: same with audio
* autoplay attribute: start a video automatically
* &lt;source src = &quot;xxx&quot; type = &quot;video/xxx&quot;&gt; same with audio

## HTML style attributes

* style = &quot;attribute: xxx; &quot;
* background-color: defines the background color for an html element
* color: defines the text color
* font-family: defines the font to be used
* font-size: defines the text size
* text-align: defines the horizontal text alignment