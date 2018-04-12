var provider = $('#provider'); 
var category = $('#category'); 
var quantity = $('#quantity'); 

// creando variables reutilizables

var btnEnviarForm = $('#btnEnviarForm'); 
var contenedor = $('#contenedor');  

var refConvalidaciones = firebase.database().ref().child('chat');

console.log(localStorage.state)

// funcion al boton enviar

btnEnviarForm.on('click', function(){

  var nombre = provider.val();
  var mensaje = category.val();
  var luna = quantity.val();
  var code = localStorage.code;
  var state = localStorage.state;


// ingresando a database .ref (rama a la que quiero ir) --- push es para ingresar datos a mi arbol
  firebase.database().ref('chat').push({
    proveedor: nombre,
    categoría:mensaje,
    quantity:luna,
    codigo:code,
    estado:state
  });
});

// snapshot objeto que contiene informacion de todo el nodo

firebase.database().ref('chat')
.on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    let element = e.val();
    let proveedor = element.proveedor;
    let categoría = element.categoría;
    let quantity = element.quantity;
    let state = element.estado;
    let code = element.codigo;
    
    html += `<div class="ui vertical menu">
    <div class="item">
      <div class="header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">INFORME</font></font></div>
      <div class="menu">
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proveedor: ${proveedor} </font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Categoria: ${categoría}</font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cantidad: ${quantity} </font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Estado: ${state} </font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codigo: ${code} </font></font></a>
        </div>
    </div>`;
  });
  contenedor.html(html);
});

