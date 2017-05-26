 $(document).ready(function() {
     $("input").keydown(function(event) {
         if (event.keyCode === 13) {
             event.preventDefault();
             return false;
         }
     });
     $(".postal-code").keydown(function(event) {
         if (event.keyCode === 38 || event.keyCode === 40) {
             event.preventDefault();
             return false;
         }
     });
     $(".mob-input").keydown(function(event) {
         if (event.keyCode === 38 || event.keyCode === 40) {
             event.preventDefault();
             return false;
         }
     });

 });

 window.sr = ScrollReveal({
     duration: 1000,
     scale: 1
 });

 window.contentRevealOptions = {
     origin: 'bottom',
     distance: '100px',
     reset: false,
     afterReveal: function() {
         this.reset = false
     }
 };

 window.contentRevealOptions1 = {
     origin: 'right',
     distance: '100px',
     reset: false,
     afterReveal: function() {
         this.reset = false
     }
 };

 sr.reveal('.icon-container', {
     scale: 0.1
 });
 sr.reveal('.contents1', contentRevealOptions1);
 sr.reveal('.contents', contentRevealOptions);