'use strict';
const jcr_js_object = {};
document.addEventListener('DOMContentLoaded', () => jcr_js_object.onload(), false);
   
(function(api)
{
   api.onload = function()
   {
      try
      {  
         let year = new Date(document.lastModified).getFullYear();
         document.querySelectorAll('.jcr-copy').forEach(y => y.innerHTML = year);
      }  catch(e) { console.log(`oops: ${e}`) }
   }
})(jcr_js_object);
