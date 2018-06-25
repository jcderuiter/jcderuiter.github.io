// javascript
'use strict';
var jcr_js_object = {};
onload = (function(other)
{  return function()
   {  if (other) other();
      jcr_js_object.main();
   }
})(onload);

(function(me)
{
   me.main = function()
   {
      try
      {  me.element("copyyear").innerHTML = new Date(document.lastModified).getFullYear();
      }  catch(e) {}
   }

   me.element = function(id)
   {  return document.getElementById(id);
   }
})(jcr_js_object);
