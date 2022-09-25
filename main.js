//Prevent webpage from loading within 800pixels wide screen
window.addEventListener('load', (event) => {
  
  if(window.innerWidth >= 800){
    alert('The site does not support wider screen. Please drog the border of your browser to make it small.');
    //Hide all elements
    document.getElementsByTagName('body')[0].style.display = "none";
  }else{
    
  }
  
});
