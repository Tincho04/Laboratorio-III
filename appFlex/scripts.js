window.addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('seleccion1');
  ob.addEventListener('change',modificarControl1,false);  
  ob=document.getElementById('seleccion2');
  ob.addEventListener('change',modificarControl2,false);  
  ob=document.getElementById('seleccion4');
  ob.addEventListener('change',modificarControl4,false);      
}

function modificarControl1(e)
{
  var ob=e.target;  
  document.getElementById("contenedor1").style.flexDirection=document.getElementById("seleccion1").value;  
}

function modificarControl2(e)
{
  var ob=e.target;  
  document.getElementById("contenedor1").style.justifyContent = document.getElementById("seleccion2").value;  
}

function modificarControl4(e)
{
  var ob=e.target;  
  document.getElementById("contenedor1").style.alignItems = document.getElementById("seleccion4").value;  
}