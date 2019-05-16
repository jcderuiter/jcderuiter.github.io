'use strict';
document.addEventListener('DOMContentLoaded', () =>
{  try
   {
      for (let sectionlist of document.querySelectorAll('#jcr-sections'))
      {
         if (location.host) { sectionlist.innerHTML += '<li><a href="/">Home</a></li>'; }
         for (let section of document.querySelectorAll('.jcr-section[id]'))
         {
            let text = section.innerHTML;
            sectionlist.innerHTML += `<li><a href="#${section.id}">${text}</a></li>`;

            section.innerHTML = `<a href="#">${text}</a>`;
            section.title     = 'to top of page';
         }
      }
   }  catch(err) { console.log('oops', err) }
}, false);
