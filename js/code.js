// var config = {
//   apiKey: "AIzaSyBGrNj6MfOQ3vKoYVoOamInrTKKbMs6KFs",
//   authDomain: "sodimac-eaf3d.firebaseapp.com",
//   databaseURL: "https://sodimac-eaf3d.firebaseio.com",
//   projectId: "sodimac-eaf3d",
//   storageBucket: "sodimac-eaf3d.appspot.com",
//   messagingSenderId: "401548083126"
// };

// firebase.initializeApp(config);

var btnCode = $('#btnCode');
var btnEnviarForm = $('#btnEnviarForm');

var provider = $('#provider');
var category = $('#category');
var quantity = $('#quantity');
var code = $('#code');

// var refConvalidaciones = firebase.database().ref().child('chat');

$('#informCode').html(localStorage.code);

btnCode.on('click', validCode);
code.on('keyup', validCodeOn)
btnEnviarForm.on('click', submitForm);

 function validCode(event) {
   event.preventDefault();
   window.location.href = 'informe.html'
}
   
  function validCodeOn() {
    data.map(function (element) {
    
      if(code.val() == element.codigo) {
        localStorage.code = code.val()
        console.log(localStorage.code)
        btnCode.removeClass('disabled');      

      }     
    });

  }

  function submitForm(event) {
    event.preventDefault();

    var nombre = provider.val();
    var mensaje = category.val();
 
  // ingresando a database .ref (rama a la que quiero ir) --- push es para ingresar datos a mi arbol
    // firebase.database().ref('chat').push({
    //   name: nombre,
    //   message:mensaje
    // });


    
    data.map(function (element) {
      if(localStorage.code == element.codigo && provider.val() == element.proveedor && category.val() == element.categoría && quantity.val() == element.cantidad  ) {

        alert('datos correctos, espere un  momento')
        window.location.href = 'finish.html'

        localStorage.provider = provider.val();
        localStorage.category = category.val();
        localStorage.quantity = quantity.val();
        console.log(localStorage.provider);
        console.log(localStorage.category);
        console.log(localStorage.quantity);

        
    

      }  
      // else {
      //   alert('datos incorrectos')
      // }   
    });

    
  }


 


  
   
