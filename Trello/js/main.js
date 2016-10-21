icremento =0;
function crear(obj) {
    icremento++;

    field = document.getElementById('field');
    contenedor = document.createElement('div');
    contenedor.id = 'div'+icremento;
    field.appendChild(contenedor);

    var caja = document.createElement('input');
    caja.innerHTML='<input type="text" name="caja" class="form-control" placeholder="Ingresa un titulo">';
    contenedor.appendChild(caja);

    boton = document.createElement('button');
    boton.innerHTML='<input type="button" class="btn btn-primary" value="Guardar" onclick="guardar()">';
    contenedor.appendChild(boton);

    function guardar(){
        texto = getElementByTagName(boton);
        console.log(texto);
    }

}

