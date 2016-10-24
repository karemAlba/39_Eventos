var incremento = 0;
var incremento1 =0;

function crear(obj) {

    field = document.getElementById('field'); //Busca fieldset en el HTMl con nombre field
    contenedor = document.createElement('div');//Crea un div 
    field.appendChild(contenedor);//el div se hace hijo del fieldset

    var caja1 = document.createElement('input'); //Crea un input
    caja1.setAttribute("type", "text");//Le pone al input todos sus atributos
    caja1.setAttribute("id" ,"caja1");
    caja1.setAttribute("class","form-control boton1");
    caja1.setAttribute("placeholder","Ingresa un titulo");
    contenedor.appendChild(caja1); //el input se hace hijo del div
    document.getElementById("caja1").focus();


    boton = document.createElement('button'); //Crea un boton 
    boton.setAttribute("type", "button");//Asigna atributos al boton
    boton.setAttribute("class","btn btn-primary");
    boton.innerHTML='Guardar'; //PAra escribir dentro del boton
    boton.setAttribute("onclick","guardar()");//Dice que ejecute la funcion guardar
    contenedor.appendChild(boton);//boton se hace hijo de contenedor al igual que el input



}

function guardar(){

        div = document.getElementById('field1'); //Busca fieldset en el HTMl con nombre field
        contenedor2 = document.createElement('div');//Crea un div dentro de espacio
        contenedor2.setAttribute("class", "tarjetas");//asigna una clase
        div.appendChild(contenedor2);//el div se hace hijo del fieldset

        var texto = document.createElement('p');//Se crea un p
        texto.id ="texto";
        contenedor2.appendChild(texto);//Texto se hace hijo del div
        var titulo = document.createElement('h1'); //se crea un elemento h1
        texto.appendChild(titulo)//el h1 se hace hijo de p
        titulo.innerHTML = document.getElementById("caja1").value; //REcibe los valores del primer input y los escribe en el h1

        var añade = document.createElement('a'); //Crea un boton 
        añade.setAttribute("class", "cursor")
        añade.innerHTML='Crear una tarjeta...'; //PAra escribir dentro del boton
        añade.setAttribute("onclick","lista()");//Dice que ejecute la funcion guardar
        texto.appendChild(añade);//boton se hace hijo de contenedor al igual que el input


}

function lista(){

        var texto1 = document.createElement('p');//Se crea un p
        contenedor2.appendChild(texto1);//Texto se hace hijo del div

        var opciones = document.createElement('input'); //Crea un input
        opciones.setAttribute("type", "text");//Le pone al input todos sus atributos
        opciones.setAttribute("id" ,"opciones");
        opciones.setAttribute("class","form-control");
        opciones.setAttribute("placeholder","Ingresa tu articulo");
        texto1.appendChild(opciones); //el input se hace hijo del div
        document.getElementById("opciones").focus();
        
        var listaDesordenada = document.createElement('ul');  
        listaDesordenada.setAttribute("id", "listaDesordenada");
        texto1.appendChild(listaDesordenada);

        boton2 = document.createElement('button'); //Crea un boton 
        boton2.setAttribute("type", "button");//Asigna atributos al boton
        boton2.setAttribute("class","btn btn-primary");
        boton2.innerHTML='Añadir Tarjeta...'; //PAra escribir dentro del boton
        boton2.setAttribute("onclick","añadir()");//Dice que ejecute la funcion guardar
        texto1.appendChild(boton2);//boton se hace hijo de contenedor al igual que el input

        var parentDiv = texto1.parentNode;

        parentDiv.replaceChild(boton1,texto1);
    }

function añadir()
{
    var opciones=document.getElementById("opciones").value;
    if(opciones.length>0)
    {
        if(find_li(opciones))
        {
            var li=document.createElement('li');
            li.id=opciones;
            li.innerHTML='<input type ="checkbox" onclick="tachar(this)">' + opciones+'<span onclick="eliminar(this)" class="glyphicon glyphicon-trash"></span>';
            document.getElementById("listaDesordenada").appendChild(li);
            document.getElementById("opciones").value= "";
            document.getElementById("opciones").setAttribute("placeholder", "Añade tu tarea");

        }
    }else if( opciones == ""){
        alert("Debes ingresar un elemento a la lista");
    }

    return false;

}

function find_li(contenido){
    var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
    for (var i=0; i<el.length; i++)
    {
        if(el[i].innerHTML==contenido)
            return false;
    }
    return true;
}
function tachar(elemento){  
    var tachar=elemento.parentNode.getAttribute("id");
    node=document.getElementById(tachar);
    node.innerHTML=tachar.strike()+'<span onclick="eliminar(this)" class="glyphicon glyphicon-trash"></span>';
}

function eliminar(elemento){
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}





