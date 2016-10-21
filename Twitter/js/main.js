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

