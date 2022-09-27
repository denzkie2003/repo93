window.addEventListener('load', (e) => {
   //Prevent page from loading when screen wider than 800 pixels
   if (window.innerWidth > 800) {
      alert('This page does not support wider screen than 800 pixels. Please to resize the browser by dragging its border!');
      //Hide body elements
      document.getElementsByTagName('body')[0].style.display = 'none';
   }else{}
});