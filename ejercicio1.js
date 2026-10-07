function constructora (marca, procesador,ram,precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const compu1 = new constructora("Asus","intel",16,500000);
const compu2 = new constructora("Appl","Aus",20,1000000);
const compu3 = new constructora("lenovo","asus",10,300000);

console.log(compu1);
console.log(compu2);
console.log(compu3);