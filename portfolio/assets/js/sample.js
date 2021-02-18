// Listen for form submit
var el = document.getElementById('contactForm');
if(el){
el.addEventListener('submit', submitForm);
}

// Submit form
function submitForm(e){
  e.preventDefault();
  console.log(123);
  }
