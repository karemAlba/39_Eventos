incremento =0;
incremento1 =0;

function guardar(){
        incremento1 ++;

        espacio = document.getElementById('espacio')
        contenedor2 = document.createElement('div');
        contenedor2.id = 'div'+incremento1;
        espacio.appendChild(contenedor2);

        var caja2 = document.createElement('input');
        caja2.setAttribute("type", "text");
        caja2.setAttribute("id" ,"caja2");
        caja2.setAttribute("class","form-control");
        espacio.appendChild(caja2);
        document.getElementById("caja2").value = document.getElementById("caja1").value;
        
    }


function crear(obj) {
    incremento++;


    field = document.getElementById('field');
    contenedor = document.createElement('div');
    contenedor.id = 'div'+incremento;
    field.appendChild(contenedor);

    var caja1 = document.createElement('input');
    caja1.setAttribute("type", "text");
    caja1.setAttribute("id" ,"caja1");
    caja1.setAttribute("class","form-control");
    caja1.setAttribute("placeholder","Ingresa un titulo");
    contenedor.appendChild(caja1);


    boton = document.createElement('button');
    boton.setAttribute("type", "button");
    boton.setAttribute("class","btn btn-primary");
    //boton.setAttribute("value","Guardar");
    boton.Value("Guardar");
    boton.setAttribute("onclick","guardar()");
    contenedor.appendChild(boton);

}

