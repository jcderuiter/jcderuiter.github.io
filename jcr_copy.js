'use strict';
document.addEventListener('DOMContentLoaded', () =>
{  try
   {
      let year = new Date(document.lastModified).getFullYear();
      document.querySelectorAll('.jcr-copy').forEach(y => y.innerHTML = year);
   }  catch(err) { console.log('oops', err) }
}, false);
