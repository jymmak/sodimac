$('.ui.form')
  .form({
    fields: {

      name: {
        identifier: 'proveedor',
        rules: [{
          type: 'empty',
          prompt: 'Ingrese nombre del proveedor'
        }]
      },

      category: {
        identifier: 'category',
        rules: [{
          type: 'empty',
          prompt: 'Ingrese categoria'
        }]
      },

      quantity: {
        identifier: 'quantity',
        rules: [{
          type: 'empty',
          prompt: 'Ingrese cantidad'
        }]
      },

    }
  });