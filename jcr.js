'use strict';
const jcr_js_object = {};
try {
document.addEventListener('DOMContentLoaded', () => jcr_js_object.onload(), false);
} catch(e) { console.log(`oops: ${e}`) }
   
//onload = (function(loadbefore)
//   return function()
//   {  if (loadbefore) loadbefore();
//      jcr_js_object.onload();
//   }
//})(onload);

(function(api)
{
   api.onload = function()
   {
      try
      {  document.querySelector('#jcr-copy').innerHTML = new Date(document.lastModified).getFullYear();
      }  catch(e) { console.log(`oops: ${e}`) }
   }
})(jcr_js_object);
