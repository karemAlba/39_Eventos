function añadir()
        {
            var opciones=document.getElementById("opciones").value;
            if(opciones.length>0)
            {
                if(find_li(opciones))
                {
                    var li=document.createElement('li');
                    li.id=opciones;
                    li.innerHTML="<span onclick='eliminar(this)'>X</span>"+opciones;
                    document.getElementById("listaDesordenada").appendChild(li);
                }
            }
            return false;
        }
 
        function find_li(contenido)
        {
            var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }
 
        function eliminar(elemento)
        {
            var id=elemento.parentNode.getAttribute("id");
            node=document.getElementById(id);
            node.parentNode.removeChild(node);
        }