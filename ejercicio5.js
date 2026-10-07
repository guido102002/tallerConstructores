
const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, anio, color, kilometraje, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
  this.kilometraje = kilometraje;
  this.precio = precio;
  this.encendido = false; 

  this.describir = function () {
    return `${this.marca} ${this.modelo} ${this.anio}, color ${this.color}, ` +
           `${this.kilometraje} km, precio $${this.precio}.`;
  };

  this.encender = function () {
    if (this.encendido) {
      return `El ${this.marca} ${this.modelo} ya estaba encendido.`;
    }
    this.encendido = true;
    return `El ${this.marca} ${this.modelo} se encendió.`;
  };

  this.recorrer = function (km) {
    this.kilometraje += km;
    return `${this.marca} ${this.modelo} recorrió ${km} km. Kilometraje tota: ${this.kilometraje} km.`;
  };

  this.aplicarDescuento = function (porcentaje) {
    this.precio = this.precio - (this.precio * porcentaje) / 100;
    return `Descuento ${porcentaje}% aplicade al ${this.marca} ${this.modelo}. precio : $${this.precio}.`;
  };
}

const vehiculos = [];

for (let i = 1; i <= 3; i++) {
  console.log(`\n--- Datos del vehículo ${i} ---`);
  const marca = prompt("Marca: ");
  const modelo = prompt("Modelo: ");
  const anio = Number(prompt("Año: "));
  const color = prompt("Color: ");
  const kilometraje = Number(prompt("Kilometraje: "));
  const precio = Number(prompt("Precio: "));

  const vehiculo = new Vehiculo(marca, modelo, anio, color, kilometraje, precio);
  vehiculos.push(vehiculo);
}

for (const v of vehiculos) {
  console.log("\n-----------------------------");
  console.log(v.describir());
  console.log(v.encender());
  console.log(v.recorrer(150));
  console.log(v.aplicarDescuento(10));
  console.log(v.describir()); 
}