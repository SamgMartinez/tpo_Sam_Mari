import toast from "react-hot-toast";

export async function pagarDeudaPorID (deudaID, imagenUrl){
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    myHeaders.append("Content-Type", "application/json");
    console.log(imagenUrl);
    console.log("imagenUrl");

    const raw = JSON.stringify({
        "imagenUrl": imagenUrl
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let respuestaApi = await fetch(process.env.REACT_APP_BACKEND_URL +"/api/deudas/pagarDeuda/" + deudaID, requestOptions);
    if(respuestaApi.status === 200){
        toast.success("Su pago se ha registrado correctamente");
    }else{
        toast.error("Ocurrio un error al registrar su pago");
    }
}