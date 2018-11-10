'use strict';
const jcr_js_object = {};
document.addEventListener('DOMContentLoaded', () => jcr_js_object.onload(), false);
   
(function(api)
{
   api.onload = function()
   {
      try
      {  document.querySelector('#jcr-copy').innerHTML = new Date(document.lastModified).getFullYear();
      }  catch(e) { console.log(`oops: ${e}`) }
   }
})(jcr_js_object);
