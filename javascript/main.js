/** PRODUCTOS OKTECH */

const productos = [
    // Accesorios
    { 
      id: "accesorio-01",
      titulo: "Audifonos 1",
      imagen: "./img/Accesorios/audifonos 1.jpg",
      categoria: {
        nombre: "Accesorios",
        id:"accesorios"
       },
       precio: 50000 
    },

 { 
    id: "accesorio-02",
    titulo: "Audifonos 2",
    imagen: "./img/Accesorios/audifonos 2.jfif",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 40000
 },

 { 
    id: "accesorio-03",
    titulo: "Smartwatch 2",
    imagen: "./img/Accesorios/smarwatch 3.jpg",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 33000
 },

 { 
    id: "accesorio-04",
    titulo: "Smartwatch 2",
    imagen: "./img/Accesorios/smarwatch 4.jpg",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 30000
 },

{ 
    id: "accesorio-05",
    titulo: "soporte 5",
    imagen: "./img/Accesorios/soporte 5.jpg",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 10000
},

{ 
    id: "accesorio-06",
    titulo: "Soporte 6",
    imagen: "./img/Accesorios/soporte 6.jpg",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 10000
},

{ 
    id: "accesorio-07",
    titulo: "Monitor 7",
    imagen: "./img/Accesorios/monitor7.jpg",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 200000
},
{ 
    id: "accesorio-08",
    titulo: "Monitor 8",
    imagen: "./img/Accesorios/monitor8.jfif",
    categoria: {
        nombre: "Accesorios",
        id:"accesorios"
    },
    precio: 30000
},

// Computadores


{ 
    id: "computador-02",
    titulo: "Lenovo IdeaPad",
    imagen: "./img/LENOVO LOQ.jpg",
    categoria: {
        nombre: "Computadores",
        id:"Computadores"
    },
    precio: 800000
},

{ 
    id: "computador-04",
    titulo: "Hp Laptop",
    imagen: "./img/Computadores/Hp Portatil.jpg",
    categoria: {
        nombre: "Computadores",
        id:"computadores"
    },
    precio: 500000
},


{ 
    id: "computador-05",
    titulo: "Hp Pavilion",
    imagen: "./img/Computadores/Hp Pavilion.jpg",
    categoria: {
        nombre: "Computadores",
        id:"computadores"
    },
    precio: 400000
},

{ 
    id: "computador-07",
    titulo: "Macbook",
    imagen: "./img/Computadores/Macbook.jpg",
    categoria: {
        nombre: "Computadores",
        id:"Computadores"
    },
    precio: 600000
},

{ 
    id: "computador-08",
    titulo: "Asus",
    imagen: "./img/Computadores/ASUS.jpg",
    categoria: {
        nombre: "Computadores",
        id:"computadores"
    },
    precio: 300000
},



// Celulares

{ 
    id: "celular-01",
    titulo: "Samsung A55",
    imagen: "./img/Celulares/Samsung A55.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 200000
},

{ 
    id: "celular-02",
    titulo: "iQOO Z9",
    imagen: "./img/Celulares/iQOO Z9.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 250000
},

{ 
    id: "celular-03",
    titulo: "Xiaomi Redmi 13",
    imagen: "./img/Celulares/Xiaomi.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 300000
},

{ 
    id: "celular-05",
    titulo: "Pixel Google",
    imagen: "./img/Celulares/pixel.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 215000
},

{ 
    id: "celular-06",
    titulo: "TCL",
    imagen: "./img/Celulares/tcl.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 100000
},

{ 
    id: "celular-07",
    titulo: "Motorola",
    imagen: "./img/Celulares/Motorola.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 230000
},

{ 
    id: "celular-08",
    titulo: "Huawei P30",
    imagen: "./img/Celulares/Huawei P30.jpg",
    categoria: {
        nombre: "Celulares",
        id:"celulares"
    },
    precio: 260000
},

// Tablets

{ 
    id: "tablet-01",
    titulo: "Tablet Android",
    imagen: "./img/Tablets/Tablet Android.jpg",
    categoria: {
        nombre: "Tablets",
        id:"tablets"
    },
    precio: 200000
},

{ 
    id: "tablet-02",
    titulo: "UMIDIGI Tablet",
    imagen: "./img/Tablets/UMIDIGI.jpg",
    categoria: {
        nombre: "Tablets",
        id:"tablets"
    },
    precio: 280000
},

{ 
    id: "tablet-03",
    titulo: "iPad Air",
    imagen: "./img/Tablets/iPadAir.jpg",
    categoria: {
        nombre: "Tablets",
        id:"tablets"
    },
    precio: 400000
},

{ 
    id: "tablet-04",
    titulo: "iPad",
    imagen: "./img/Tablets/IPAD.jpg",
    categoria: {
        nombre: "Tablets",
        id:"tablets"
    },
    precio: 420000
},

{ 
    id: "tablet-05",
    titulo: "Lenovo",
    imagen: "./img/Tablets/LENOVO.jpg",
    categoria: {
        nombre: "Tablets",
        id:"Tablets"
    },
    precio: 300000
},

{ 
    id: "tablet-06",
    titulo: "Sky",
    imagen: "./img/Tablets/SKY.jpg",
    categoria: {
        nombre: "Tablets",
        id:"Tablets"
    },
    precio: 100000
}
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-menu");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector(".numerito");


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-imagen" src="${producto.imagen}" alt="" style="width: 100%">
                <div class="producto-detalles">
                 <h3 class="producto-detalles">${producto.titulo}</h3>
                 <p class="producto-precio">${producto.precio}</p>
                 <button class ="producto-agregar" id="${producto.id}">añadir</button>
                </div>
        `;

        contenedorProductos.append(div);             
    })

    actualizarBotonesAgregar();
    




}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach( boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !="todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id );
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText= "Productos"
            cargarProductos(productos);
        }



    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarritoLS = JSON.parse(productosEnCarritoLS);
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlcarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;


    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }  

    
    
    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;    
}






