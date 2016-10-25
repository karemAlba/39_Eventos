var incremento = 1;
var incremento1 = 1;
var incremento2 = 1;

function eliminar(elemento){
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}


function crear(obj) {

        var elemento = document.getElementById("boton");
        elemento.style.display = 'none';
        tarjetas = document.getElementById('tarjetas'); //Busca fieldset en el HTMl con nombre field
        contiene = document.createElement('div');
        contiene.id = 'div'+incremento++;
        contiene.setAttribute("class", "contenedor");
        tarjetas.appendChild(contiene);
        var titulo = document.createElement('input'); //Crea un input
        titulo.setAttribute("type", "text");//Le pone al input todos sus atributos
        titulo.setAttribute("id" ,"titulo");
        titulo.setAttribute("class","form-control");
        titulo.setAttribute("placeholder","Ingresa un titulo");
        contiene.appendChild(titulo); //el input se hace hijo del div


        boton = document.createElement('button'); //Crea un boton 
        boton.setAttribute("type", "button");//Asigna atributos al boton
        boton.setAttribute("class","btn btn-primary espacio");
        boton.innerHTML='Guardar'; //PAra escribir dentro del boton
        boton.setAttribute("onclick","guardar()");//Dice que ejecute la funcion guardar
        contiene.appendChild(boton);//boton se hace hijo de contenedor al igual que el input
        
}

function guardar(){
        if (titulo.value == ""){
            alert("Debes de ingresar un titulo");
            document.getElementById("titulo").focus();
        }else{
            incremento++;   
            incremento1++;

            div = document.getElementById('tarjetas'); //Busca fieldset en el HTMl con nombre field
            contenedor = document.createElement('div');//Crea un div dentro de espacio
            contenedor.setAttribute("class", "tarjetas pull-left");//asigna una clase
            contenedor.id= 'div'+incremento;
            div.appendChild(contenedor);//el div se hace hijo del fieldset 
            
            texto = document.createElement('p');//Se crea un p
            texto.id ="texto"+incremento1;
            contenedor.appendChild(texto);//Texto se hace hijo del div
            titulo = document.createElement('h1'); //se crea un elemento h1
            texto.appendChild(titulo)//el h1 se hace hijo de p
            titulo.innerHTML = document.getElementById("titulo").value; //REcibe los valores del primer input y los escribe en el h1 

            var añade = document.createElement('a'); //Crea un boton 
            añade.setAttribute("class", "cursor")
            añade.setAttribute("id" , "crea");
            añade.innerHTML='Crear una tarjeta...'; //PAra escribir dentro del boton
            añade.setAttribute("onclick","lista()");//Dice que ejecute la funcion guardar
            texto.appendChild(añade);//boton se hace hijo de contenedor al igual que el input

            document.getElementById("titulo").value= "";
            document.getElementById("titulo").setAttribute("placeholder", "Ingresa un titulo");
        }
}

function lista(){

        var elemento1 = document.getElementById("crea");
        elemento1.style.display = 'none';
        var texto1 = document.createElement('p');//Se crea un p
        contenedor.appendChild(texto1);//Texto se hace hijo del div

        var opciones = document.createElement('input'); //Crea un input
        opciones.setAttribute("type", "text");//Le pone al input todos sus atributos
        opciones.setAttribute("id" ,"opciones");
        opciones.setAttribute("class","form-control");
        opciones.setAttribute("placeholder","Añade tu nueva tarea");
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

    }

function añadir()
{
    var opciones=document.getElementById("opciones").value;
    if(opciones.length>0)
    {
        if(find_li(opciones))
        {

            var li=document.createElement('input');
            li.setAttribute("type" , "textarea");
            li.setAttribute("class" , 'campo rows="5"');
            li.setAttribute("disable", "disable");
            li.setAttribute("readonly", "readonly");
            li.value = opciones;
            li.id="li"+incremento2;

            var span = document.createElement('span');
            span.onclick = eliminar;
            span.setAttribute("class", "glyphicon glyphicon-trash");
            
            //li.innerHTML= opciones+'<span onclick="eliminar(this)" class=""></span>';
            
            document.getElementById("listaDesordenada").appendChild(li);
            document.getElementById("listaDesordenada").appendChild(span);

            document.getElementById("opciones").value= "";
            document.getElementById("opciones").setAttribute("placeholder", "Añade tu nueva tarea");

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

