var contenedor = $('#contenedor');
var btnallOrders = $('#allOrders');
var missingOrders = $('#missingOrders');
var deliveredOrders = $('#deliveredOrders');


btnallOrders.on('click',showOrders);
missingOrders.on('click', showMisingOrders);
deliveredOrders.on('click',showDelivered);

function showOrders() {
  contenedor.empty();

  const allProvedores = data.map(function (distribuidor, index) {
    var template = `<div class="ui vertical menu">
    <div class="item">
      <div class="header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">INFORME</font></font></div>
      <div class="menu">
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proveedor: ${distribuidor.proveedor} </font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Categoria: ${distribuidor.categoría}</font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cantidad: ${distribuidor.cantidad} </font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">codigo: ${distribuidor.codigo}</font></font></a>
        <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">estado: ${distribuidor.estado}</font></font></a>
        </div>
    </div>`;

  contenedor.append(template);
  
  });
}

function showMisingOrders() {
  contenedor.empty();

  const allProvedores = data.map(function (distribuidor, index) {
    debugger
    if(distribuidor.estado === 'pendiente') {
      var template = `<div class="ui vertical menu">
      <div class="item">
        <div class="header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">INFORME</font></font></div>
        <div class="menu">
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proveedor: ${distribuidor.proveedor} </font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Categoria: ${distribuidor.categoría}</font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cantidad: ${distribuidor.cantidad} </font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">codigo: ${distribuidor.codigo}</font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">estado: ${distribuidor.estado}</font></font></a>
          </div>
      </div>`;
  
    contenedor.append(template);

    }
  });
}
function showDelivered() {
  contenedor.empty();

  const allProvedores = data.map(function (distribuidor, index) {
    debugger
    if(distribuidor.estado === 'entregado') {
      var template = `<div class="ui vertical menu">
      <div class="item">
        <div class="header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">INFORME</font></font></div>
        <div class="menu">
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proveedor: ${distribuidor.proveedor} </font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Categoria: ${distribuidor.categoría}</font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cantidad: ${distribuidor.cantidad} </font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">codigo: ${distribuidor.codigo}</font></font></a>
          <a class="item"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">estado: ${distribuidor.estado}</font></font></a>
          </div>
      </div>`;
  
    contenedor.append(template);

    }
  });
}








