'use strict';
document.addEventListener('DOMContentLoaded', () =>
{  try
   {
      let refnr = 1;
      let refitem = {};

      // the referred
      for (let element of document.querySelectorAll('textarea.jcr-referred'))
      {
         let ol = document.createElement('ol');
         ol.className = element.className;
         ol.start = refnr;

         for (let record of element.innerHTML.replace(/\n\s*?\n\s*/, '\n\n').split('\n\n'))
         {
            let [line1, url, text, origin] = record.split('\n').map(s => s.trim());

            let [hash, ...rest] = line1.split(' ');
            let author = rest.join(' ');

            if (!hash.startsWith('#')) { continue }

            let li = document.createElement('li');
            li.id = hash.substr(1);

            if (author)
            {
               let span_author = document.createElement('span');
               span_author.className = 'jcr-referred-author';
               span_author.innerHTML = author;
               li.appendChild(span_author);
            }

            let span_link = document.createElement('span');
            span_link.className = 'jcr-referred-link';

            let a = document.createElement('a');
            a.href = url;
            a.innerHTML = text || url;
            span_link.appendChild(a);
            li.appendChild(span_link);

            if (origin)
            {
               let span_origin = document.createElement('span');
               span_origin.className = 'jcr-referred-origin';
               span_origin.innerHTML = origin;
               li.appendChild(span_origin);
            }

            ol.appendChild(li);

            refitem[hash] = { item: li, refnr: refnr, citation: [] }
            refnr++;
         }

         element.replaceWith(ol);
      }

      // the references
      for (let element of document.querySelectorAll('.jcr-reference'))
      {
         if (!element.hash) { continue }

         let span = document.createElement('span');
         span.style.whiteSpace = 'nowrap';
         span.innerHTML = element.innerHTML;

         if (refitem[element.hash])
         {
            element.innerHTML     = refitem[element.hash].refnr;
            let hash_for_citation = `${[element.hash]}_${refitem[element.hash].citation.length}`;
            element.id            = hash_for_citation.substr(1);
            refitem[element.hash].citation.push(hash_for_citation);
         }
         else
         {
            element.innerHTML = 'link not present';
         }

         element.parentNode.insertBefore(span, element);
         span.appendChild(element);
      }


      // reduce citations array (of hashes) to string of hyperlinks
      function reduceCitations(accum, next, i, all)
      {
         let concat = accum;
         if (i) { concat += ',' }
         concat += `<a href="${next}">&uarr;`;
         if (all.length > 1) { concat += `<sub>${i+1}</sub>` }
         concat += '</a>';

         return concat;
      }

      // add citations to items in hyperlink list
      for (let hash in refitem)
      {
         if (!refitem[hash].citation.length) { continue }

         refitem[hash].item.innerHTML += '<span class="jcr-referred-citations">'
                                      +  refitem[hash].citation.reduce(reduceCitations, '')
                                      + '</span>';
//console.log(refitem[hash].item.innerHTML);
      }
   }  catch(err) { console.log('oops', err) }
}, false);
