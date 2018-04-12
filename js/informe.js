$('.ui.form')
  .form({
    fields: {

      name: {
        identifier: 'proveedor',
        rules: [
          {
            type   : 'empty',
            prompt : 'Ingrese nombre del proveedor'
          }
        ]
      },

      category: {
        identifier: 'category',
        rules: [
          {
            type   : 'empty',
            prompt : 'Ingrese categoria'
          }
        ]
      },

 
 
      quantity: {
        identifier: 'quantity',
        rules: [
          {
            type   : 'empty',
            prompt : 'Ingrese cantidad'
          }
        ]
      },

    }
  })
;

// var $provider = $('#provider');
// var $category = $('#category');
// var $quantity = $('#quantity');
// var btnEnviarForm = $('#btnEnviarForm')

// $provider.on('keyup', validProvider);
// $category.on('keyup', validCategory);
// $quantity.on('keyup', validQuantity);

// $provider.on('keyup', desabledBtn);
// $category.on('keyup', desabledBtn);
// $quantity.on('keyup', desabledBtn);


// function validProvider() {
//   var centinel = false;
//   var regex = /^[a-zA-Z]*$/;
//   if (regex.test($($provider).val()) && $provider.val().length >= 3) {
//     centinel = true;
//   }
//   return centinel;
// }



// function validCategory() {
//   var centinel = false;
//   var regex = /^[a-zA-Z]*$/;
//   if (regex.test($($category).val()) && $category.val().length >= 3) {
//     centinel = true;
//   }
//   return centinel;
// }


// function validQuantity() {
//   var centinel = false;
//   if ($quantity.val().length > 0) {
//     centinel = true;
//     // $boton.removeClass('disabled');
//   }
//   return centinel;
// }

// function desabledBtn() {
//   debugger
//   if( validCategory() && validCategory() && validQuantity()) {
//     btnEnviarForm.removeClass('disabled');
//   }
// }
