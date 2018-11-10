'use strict';
const jcr_js_object = {};
document.addEventListener('DOMContentLoaded', jcr_js_object.onload, false);

//load = (function(loadbefore)
// return function()
// {  if (loadbefore) loadbefore();
//    jcr_js_object.onload();
// }
//(onload);

(function(api)
{
   const onload = function()
   {
      try
      {  document.querySelector('#jcr-copy').innerHTML = new Date(document.lastModified).getFullYear();
      }  catch(e) {}
   }

   const api = { onload: onload;
               }
   
   return api;
})(jcr_js_object);
