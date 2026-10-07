function costructoraLibro(nombreLibro,autor,genero,año){
    this.nombreLibro = nombreLibro;
    this.autor = autor;
    this.genero = genero;
    this.año = año;
    this.prestadoI = false;


    this.prestar = function () {

    if (!this.prestadoI) {
      this.prestadoI = true;
      console.log(`"${this.nombreLibro}"prestado correctamente.`);
    } else {
      console.warn(`"${this.nombreLibro}" ya esta prestado.`);
    }
  };

  this.devolver = function () {
    if (this.prestadoI) {
      this.prestadoI = false;
      console.log(` "${this.nombreLibro}"devuelto correctamente.`);
    } else {
      console.warn(` "${this.nombreLibro}" no estaba prestado, no se puede devolver.`);
    }
  };
}

const movimiento1 = new costructoraLibro("Satanar","Mario Mendoza","novela",2026)

movimiento1.prestar();
movimiento1.prestar();
movimiento1.devolver();
movimiento1.devolver();





