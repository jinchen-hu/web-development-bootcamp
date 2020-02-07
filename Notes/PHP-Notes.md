# PHP

Php is a server scripting language, and a powerful tool for making dynamic and interactive web pages.

Internal: &lt;?php ... ?&gt;

External: include (&quot;myScript.inc&quot;)

## Variable

* Name always begin with $, can contain letters, digits, underscore, cannot start with a digit, are case sensitive
* An unassigned variable has the value, NULL
* unset($var); //sets a variable to NULL
* isset($var); //returns true if the variable is not null

## Boolean

* FALSE and TRUE – case sensitive
* If an integer, 0-false; if a string, empty or string &quot;0&quot; is false; if a double, 0.0 si false

## String

* Defined with ‘ 'or &quot;&quot;
  * With &quot;&quot; will substitude value of variable, while with &#39;&#39; will not

* strlen(str); //returns the number of characters in str
* str\_word\_count(str);// counts the number of words
* strrev(str); // reverses a string
* strpos(str, str); //searcher for a specific text within a string and return the index
* trim(str); //with spaces from both sides
* ltrim(str); //removes the spaces from its beginning
* str\_replace(str1,str2,str3); //replaces str1 of str3 with str2
* substr(str,start,len);// returns a substring of str form start to end or to the length
* strtolower, strtoupper
* strcmp(str1,str2);//if str1 is greater than 2, reutrns positive integer
* ucwords(str);//returns a given string with the first letter of each word in uppercase
* explode(&quot;delimeter&quot;,str);//split string with the delimiter and store in an array
* implode(&quot;delimeter&quot;,arr);//catenates the elements of array with delimeter

## Scalar type conversion

* implicit: coercions
  * context of expression determines type that is expected or require
  * if string in a numeric context, it&#39;s converted; otherwise, it&#39;s 0

* explicit: casts
  * (int)$var
  * intval($var)
  * settype($var, &quot;integer&quot;)
  * is\_int(var)
  * is\_integer
  * is\_long
  * is\_double
  * is\_float
  * is\_bool
  * is\_string

## Output

* print:
  * takes a string, but will coerce other values to strings

* printf:
  * printf(literal\_string, param1,param2,…)
  * %10s-for string
  * %6d-for integer
  * %5.2f-for float, 5 is whole spaces, 2 is the decimal part

## Arrays

* To create an array use the array() constructor, which takes one or more key=\&gt;value pairs as parameters, the keys are non-negative integer or string

* If a key is omitted, 0 is default key, if more than a key omitted and there have been integer keys, the default key will be the largest current key +1. If a key appears that has already appeared, the new value will overwrite the old one.
  * $arr = array(key=\&gt;value,…); $arr[key]=value

* for loop and for each loop:
  * foreach($arrayName as $elementName)

* count(arr); or sizeof(arr)
  * returns the number of entries in array
* array\_keys(arr);
  * returns an array of the keys of the given array
* array\_values(arr);
  * returns an array of the values of the given array
* is\_array(arr);
  * returns true if it&#39;s an array
* array\_pop(arr,$var);
  * deletes and returns last entry
* array\_push(arr,$var1,$var2,…);
  * inserts one or more elements to the end of the array
* array\_shift(arr,$var);
  * deletes and returns the first entry
* array\_unshift(arr,$var,…);
  * inserts one or more elements at the beginning
* array\_reverse(arr);
  * returns an array in the reversed order
* sort(arr) or rsort(arr);
  * sorts the value in increasing or decreasing, replacing the keys with 0,1,2,…
* asort(arr) or arsort(arr);
  * sort the value, but doesn&#39;t change keys
* ksort(arr) or krsort(arr);
  * sort the array with key order
* array\_intersect(arr1,arr2);
  * compare arrays and return the common elements as an array
* in\_array($var,arr);
  * return true if the var is in the array

## Function

* similar to js
* function names are not case sensitive
* to specify pass-by-reference, prepend an ampersand &amp; to the formal parameter
* if a function returns a reference, the name of the function must have a prepended ampersand
* an undeclared variable in a function has the scope of the function
* to access a nonlocal variable, it must be declared to be global. Global $var;

## Pattern matching

* preg\_match (regex, str);
  * returns a Boolean value

* preg\_split (regex, str);
  * returns an array of the substrings split by regex

## Form handling

* user enters information in a form and presses the submit button

* need to validate form data to pretext malicious code

* GET method
  * Can be cached, remain in the browser history, can be bookmarked, are visible to everyone, should never be used when dealing with sensitive data, have length restrictions (2000 characters), result in an implicit array $\_GET

* POST method
  * Are never cached, do not remain in the browser history, cannot be bookmarked, have no restrictions on data length, result in an implicit array $\_POST.

* empty(var);
  * returns false if the variable exists and has a non-empty, non-zero value
  * &quot;&quot;, 0, 0.0, &quot;0&quot;, NULL, FALSE, undefined variable—are considered empty

* isset(var,var,…);
  * returns true if set to any value except NULL

## File I/O

* Provides a complete set of file and directory functions enabling you to easily access and manipulate files and folders on the local file system

* Tests: file\_exists, is\_file, is\_dir, is\_readablle, is\_writable, is\_executable, filesize

* Syntax: function\_name($filename)
* fileatime—last access time of file
* fileectime—inode change time of file
* filegroup—file group
* filemtime—file modification time
* fileowner—file owner
* fileperms—file permissions
* filetype—file type
* copy—copies a file
* unlink—deletes a file
* rename—renames a file
* fopen—opens file for I/O, returns handle—mode: w, r, a
* fclose—closes handle, returns a Boolean
* feof—out put lines until reach the end of file
* fflush—writes all buffered output to open file
* fwrite(file, str)—writes to handle
* fread(file, length)—reads from handle
* fget(handle)—read file as lines
* readfile(file)—sends file to output buffer
* file(name)—returns the lines of the given file into an array
* file\_get\_contents(name)—returns the file contents as a string
* mkdir—creates a directory
* rmdir—removes a directory
* chdir—changes dir
* to include other php files in a php script
  * include(file)—generates a warning, but the script will continue executing
  * require(file)—generates a fatal error, and the script will stop

## Cookie

* cookies are used to often to perform session management, user identification, tracking, and analytics.
* A cookie is a name/value pair that is passed between a browser and a server in the http header, a small file that the server embeds on the user&#39;s computer, each time the same computer requests a page with a browser, it will send the cookie too. With php, you can both create and retrieve cookie values
* setcookie(name, value, time()+(84600\*30), &quot;/&quot;);
  * creates and returns a Boolean
* $\_COOKIE[&quot;numOfVistits&quot;] = 0; $count = $\_COOKIE[&quot;numOfVistits&quot;] + 1;
* setcookie(&quot;numOfVisits&quot;, $count, expire
  * set a cookie for number of visits, and increment this counter
* isset($\_COOKIE[&quot;numOfVistits&quot;]
  * to see if a cookie has already been set

## Sessions

* a session is a conversation between the server and a client, consisting of series of continuous request and response, stored on server side and closed once user closes browser.
* Session variables hold information about one single user, and are available to all pages in one application
* When a session is started:
  1. Php first creates a unique identifier for that particular session which is a random string of 32 hexadecimal.
  2. A cookie called PHPSESSID is automatically sent to the user&#39;s computer to store unique session identification string
  3. A file is automatically created on the server in the designated temporary directory
  4. when a php file script wants to retrieve the value from a session variable, php automatically gets the unique session identifier string from the PHPSESSID cookie and then looks in its temporary directory for the file bearing that name and a validation can be done by comparing both values
  5. a session ends when the user closes the browser or after leaving the site, the server will terminate the session after a predetermined period time, commonly 30 mins duration

* &lt;?php session\_start(); ?\&gt;
  * Checks to see if a session has already been started, then if none currently exists starts one
  * Also alerts php engine to expect session variables

* $\_SESSION: a global associative array which holds the session states/variables
* $\_SESSION[&#39;count&#39;] = $counter---to create/store a session state/variable
* unset($\_SESSION[&#39;count&#39;])—to delete/free a session state/variable
* session\_unset()
* session\_destroy()—to destroy a session