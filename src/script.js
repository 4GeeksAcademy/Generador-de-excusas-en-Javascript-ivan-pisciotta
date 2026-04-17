function generarExcusa() {
    let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let accion = ['comió', 'orino', 'aplastó', 'rompió'];
    let que = ['mi tarea', 'mi teléfono', 'el coche'];
    let cuando = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];
    
    let randomQuien = Math.floor(Math.random() * quien.length);
    let randomAccion = Math.floor(Math.random() * accion.length);
    let randomQue = Math.floor(Math.random() * que.length);
    let randomCuando = Math.floor(Math.random() * cuando.length);
    
    return quien[randomQuien] + " " + accion[randomAccion] + " " + que[randomQue] + " " + cuando[randomCuando];
}

document.getElementById("excuse").innerHTML = generarExcusa();