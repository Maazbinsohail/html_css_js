const bar =document.getElementById('bar');
const nav =document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click',() => {
    nav.classList.add('active');
  })
}









var mainimage = document.getElementById("mainimage");
    var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function(){
      mainimage.src = smallimg[0].src;
    }
    smallimg[1].onclick = function(){
      mainimage.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
      mainimage.src = smallimg[2].src;
    }
    smallimg[3].onclick = function(){
      mainimage.src = smallimg[3].src;
    }
    smallimg[4].onclick = function(){
      mainimage.src = smallimg[4].src;
    }
// add to cart
    (() => {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    