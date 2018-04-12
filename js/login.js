var config = {
  apiKey: "AIzaSyBGrNj6MfOQ3vKoYVoOamInrTKKbMs6KFs",
  authDomain: "sodimac-eaf3d.firebaseapp.com",
  databaseURL: "https://sodimac-eaf3d.firebaseio.com",
  projectId: "sodimac-eaf3d",
  storageBucket: "sodimac-eaf3d.appspot.com",
  messagingSenderId: "401548083126"
};
firebase.initializeApp(config);


$(document).ready(function() {

  var $email = $('#email');
  var $password = $('#password');
  var btnLogin = $('#btnLogin');
  var btnGoogle = $('#btnGoogle');

  $email.on('keyup', validEmail);
  $email.on('keyup', validEmail);
  $password.on('keyup', disabledButon);
  $password.on('keyup', disabledButon);
  btnGoogle.on('click', logInGoogle);

  function validEmail() {
    
    var correo = false;
    var regex = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);
      if (regex.test($($email).val())) {
        correo = true;
      
      }
    return correo;
  }

  function validPassword() {
   
    var pass = false;
    if($password.val().length > 4  ) {
      pass = true;
 
    } 
    return pass;
  }

  function disabledButon() {
    debugger
    if(validEmail() && validPassword()) {
      btnLogin.removeClass('disabled'); 
    }
  }


  function logInGoogle() {

    event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      user = result.user;
      console.log(user);

      observer();
      

      window.location.href = 'almacen.html';
    });
  }

  function observer() {
    firebase.auth().onAuthStateChanged(function(user) {
      var imgUser = $('#imgUser');
      var nameUsers = $('#nameUsers');
      // var $usersComent = $('.usersComent');
      // var $comentsPhoto = $('.comentsPhoto');


      if (user) {
        console.log('usuario activo');
        localStorage.displayName = user.displayName;
        localStorage.email = user.email;
        localStorage.photoURL = user.photoURL;
        

        imgUser.attr('src', localStorage.photoURL);
        
        // $comentsPhoto.attr('src', photoURL);
        nameUsers.text(localStorage.displayName);
        // $usersComent.text(displayName);

      }else {
        console.log('no existe usuario activo');
      }
    });
  }
  observer();
  

 


}) 