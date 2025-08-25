async function postData(obj) {
   try {
     const peticion = await fetch('http://localhost:3001/peliculas',{
         method: 'POST',
         headers:{
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(obj)
     })
     const respuesta = await peticion.json()
     console.log(respuesta);
   } catch (error) {
        console.error(error);
   }
}
export {postData}