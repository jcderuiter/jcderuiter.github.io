document.addEventListener('DOMContentLoaded',
                          () =>
{
   for (let label of document.querySelectorAll('.motto-hue label'))
   {
      let radio = document.getElementById(label.htmlFor);
      if (radio)
      {
         label.style.backgroundColor = isNaN(Number(radio.value))
                                     ? 'hsl(0, 0%, 50%)'
                                     : `hsl(${radio.value}, 100%, 50%)`;

         radio.onchange = isNaN(Number(radio.value))
                        ? function(e)
                          {
                             document.documentElement.style.setProperty('--sat', 0);
                          }
                        : function(e)
                          {
                             document.documentElement.style.setProperty('--hue', e.target.value);
                             document.documentElement.style.setProperty('--sat', 1);
                          }
      }
   }

   for (let modal of document.querySelectorAll('.motto-modal'))
   {
      if (modal.dataset.motto)
      {
         let motto = document.getElementById(modal.dataset.motto);
         if (motto)
         {
            motto.onclick = (m => () => { m.style.display = (getComputedStyle(m).display == 'none') ? 'block' : 'none'; })(modal);
            motto.style.cursor = 'pointer';

            modal.onclick = (m => e => { if (e.target === m) m.style.display = 'none'; })(modal);
         }
      }
   }
},
                          false);
