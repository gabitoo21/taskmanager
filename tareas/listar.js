const listar = function (tareas = this.tareas) {
    tareas.forEach(({ clase, titulo, estado }) => {
      console.log(`CLASE: ${clase}: ${titulo} --> ${estado}`);
    });
  }

module.exports = listar