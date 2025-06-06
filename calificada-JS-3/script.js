   
    const productos = [
      { nombre: "Laptop", precio: 1200 },
      { nombre: "Mouse", precio: 25 },
      { nombre: "Teclado", precio: 50 },
      { nombre: "Monitor", precio: 300 },
      { nombre: "Silla Gamer", precio: 450 },
      { nombre: "Audífonos", precio: 80 },
      { nombre: "Webcam", precio: 60 },
      { nombre: "USB 128GB", precio: 30 },
      { nombre: "Impresora", precio: 200 },
      { nombre: "Tablet", precio: 500 }
    ];

    // Mostrar productos
    console.log("Lista de productos:");
    productos.forEach(p => {
      console.log(`Producto: ${p.nombre}, Precio: $${p.precio}`);
    });

    // Crear array de nombres y verificar disponibilidad
    const productosDisponibles = productos.map(p => p.nombre);
    const productoBuscado = "Tablet";
    const estaDisponible = productosDisponibles.includes(productoBuscado);
    console.log("Productos disponibles:", productosDisponibles);
    console.log(`¿Está "${productoBuscado}" disponible?`, estaDisponible);

    // Aplicar descuento 10%
    const productosConDescuento = productos.map(p => ({
      nombre: p.nombre,
      precio: (p.precio * 0.9).toFixed(2)
    }));
    console.log("Productos con descuento 10%:");
    console.log(productosConDescuento);

    // Filtrar productos con precio menor a 100
    const productosBaratos = productos.filter(p => p.precio < 100);
    console.log("Productos con precio menor a $100:");
    console.log(productosBaratos);

    // Obtener primeros 2 productos
    const primerosDos = productos.slice(0, 2);
    console.log("Primeros 2 productos:");
    console.log(primerosDos);

    // Ordenar productos por precio 
    productos.sort((a, b) => a.precio - b.precio);
    console.log("Productos ordenados por precio (menor a mayor):");
    console.log(productos);

    // Invertir el orden 
    productos.reverse();
    console.log("Productos en orden inverso:");
    console.log(productos);