import toast from "react-hot-toast";

export async function getProyectos() {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL +"/api/proyectos/proyectosUsuario/" + sessionStorage.getItem("usuarioID"), requestOptions);
    const dataJson = await respuestaApi.json();
    return dataJson;
}

export async function crearProyecto(nombreProyecto) {
  const usuarioID = sessionStorage.getItem("usuarioID");
  const myHeaders = new Headers();
  myHeaders.append("jwt", sessionStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
  "nombre": nombreProyecto,
  "usuarioAdmin": usuarioID
  });

  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
  };

  const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/proyectos/crearProyecto", requestOptions);
  const dataJson = await respuestaApi.json();
  if(respuestaApi.status === 200){
    toast.success(dataJson.mensaje);
  }else{
    try{
      toast.error(dataJson.mensaje);
    }catch(e){
      toast.error("Error al crear el proyecto");
    }
  }
}

export async function eliminarProyectoApi(proyectoID) {
  const myHeaders = new Headers();
  myHeaders.append("jwt", sessionStorage.getItem("token"));

  const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
  };

  const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/proyectos/eliminarProyecto/" + proyectoID, requestOptions);
  const dataJson = await respuestaApi.json();
  if(respuestaApi.status === 200){
    toast.success(dataJson.mensaje);
  }else{
    try{
      toast.error(dataJson.mensaje);
    }catch(e){
      toast.error("Error al eliminar Proyecto");
    }
  }
}

export async function agregarParticipante(usuarioID, proyectoID) {
  const myHeaders = new Headers();
  myHeaders.append("jwt", sessionStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "usuarioId": usuarioID
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/proyectos/agregarParticipante/"+proyectoID, requestOptions);
  const dataJson = await respuestaApi.json();
  if(respuestaApi.status === 200){
    toast.success("Se agrego correctamente el participante");
    return dataJson;
  }else{
    try{
      toast.error(dataJson.mensaje);
    }catch(e){
      toast.error("Error al agregar Participante");
    }
  }
}

export async function modificarNombreDelProyecto(proyectoID, nuevoNombre){
  const myHeaders = new Headers();
  myHeaders.append("jwt", sessionStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "nombre": nuevoNombre
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/proyectos/editarProyecto/" + proyectoID, requestOptions)
  if(respuestaApi.status === 200){
    toast.success("Se modifico correctamente el nombre");
  }else{
    toast.error("Error al modificar el nombre");
  }
}

export async function modificarDescripcionDelProyecto(proyectoID, nuevaDescripcion){
  const myHeaders = new Headers();
  myHeaders.append("jwt", sessionStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "descripcion": nuevaDescripcion
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/proyectos/editarProyecto/" + proyectoID, requestOptions)
  if(respuestaApi.status === 200){
    toast.success("Se modifico correctamente la descripcion");
  }else{
    toast.error("Error al modificar la descripcion");
  }
}