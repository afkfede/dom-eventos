var productos = [
    { 
      nombre: "Buzo liso",
      precio: 34.00,
      descripcion: "Buzo color gris",
      imagen: "buzo.jpg"
    },
    {
      nombre: "Remera lisa",
      precio: 20.00,
      descripcion: "Remera de algodon, color negro",
      imagen: "remera.png"
    },
  ];
  
  function generarHTMLProductos() {
    var html = "";
    for (var i = 0; i < productos.length; i++) {
      html += "<div class='producto'>";
      html += "<h2>" + productos[i].nombre + "</h2>";
      html += "<p>Precio: $" + productos[i].precio.toFixed(2) + "</p>";
      html += "<p>" + productos[i].descripcion + "</p>";
      html += "</div>";
    }
    return html;
  }
  
  document.getElementById("contenedor-productos").innerHTML = generarHTMLProductos();