document.addEventListener("DOMContentLoaded", function() {
   let ultimaPosicaoScroll = 0;
   
   window.onscroll = function() {
       rolagemScroll(); 
   };

   function rolagemScroll() {
       const alturaScroll = window.scrollY;
       const header = document.getElementById('fixedHeader');
       if (alturaScroll > ultimaPosicaoScroll) {
           header.classList.add('hidden');
       } else {
           header.classList.remove('hidden');
       }
       ultimaPosicaoScroll = alturaScroll;
   }
});
