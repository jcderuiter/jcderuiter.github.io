'use strict';
document.addEventListener('DOMContentLoaded', () =>
{  try
   {
      for (let element of document.querySelectorAll('textarea.jcr-listing'))
      {
         let ol = document.createElement('ol');
         ol.className = element.className;

         for (let line of element.innerHTML.replace(/\n$/, '').split('\n'))
         {
            let li = document.createElement('li');
            li.innerHTML = line;
            ol.appendChild(li);
         }

         element.replaceWith(ol);
      }
   }  catch(err) { console.log('oops', err) }
}, false);
