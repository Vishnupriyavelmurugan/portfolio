var firebaseConfig = {
    apiKey: "AIzaSyC0cB97hi0sebAOz58KuglxQ51TGbuRv-o",
    authDomain: "portfolio-198a7.firebaseapp.com",
    projectId: "portfolio-198a7",
    storageBucket: "portfolio-198a7.appspot.com",
    messagingSenderId: "346715480771",
    appId: "1:346715480771:web:1aba70e996d22d49acf876",
    measurementId: "G-H0LY3GTB29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
var el = document.getElementById('contactForm');
if(el){
el.addEventListener('submit', submitForm);
}
  console.log("hello1");


// Submit form
function submitForm(e){
  e.preventDefault();
  console.log("hello2");

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  console.log(fname);

  // Save message
  saveMessage(fname, lname,email, subject);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  console.log("hello");
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname,email,subject){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    subject:subject,
  
  });
}
