import React, { useEffect, useState } from 'react'

import {db,storage} from '../../firebase'
 import Swal from 'sweetalert2';

 import {UsuarioContext} from '../../Context/UsuarioProvider'

const ViewRecursosInformes = () => {
    const {usuario}=React.useContext(UsuarioContext)

    const [nombre, setNombre] = useState('')
    const [archivoUrl, setArchivoUrl] = useState('');

  const archivoHandler = async (e)=> {
  
    const archivo = e.target.files[0];
    const storageRef =storage.ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);

  }

  const agregar= async(e)=>{
    e.preventDefault()
    
    try {        
        const nuevo={
          nombreRecurso:nombre,
          rutaRecurso:archivoUrl,
          fecha:Date.now()
        }
        await db.collection('recursos').add(nuevo)    
        Swal.fire("Success","Documento registrado","success")  
        setNombre('')
        setArchivoUrl('')      
              
    } catch (error) {
        console.log(error);
    }
    
}

const [docusenvio, setDocusenvio] = useState([])
    useEffect(() =>  {
        const obtenerDatos=async()=>{
            try {
                //const dba=app.firestore() todo esto jala del firebase js el 
                //app debe ser igual a lo que se exporta                
                //aqui la respuesta se esta guardando en data
                const data= await db.collection('recursos').orderBy('fecha','desc').get()
                //{id:doc.id,...doc.data()} objetos que trae de la base de datos
                const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
                // console.log(arrayData);
                setDocusenvio(arrayData)                
            } catch (error) {
                console.log(error);
            }
  
        }
  
       obtenerDatos();
       console.log('test servicio');
    }, [])
    const eliminarrecurso=async(id)=>{
        try {
           await  db.collection('recursos').doc(id).delete()
            const arrayFiltrado=docusenvio.filter(item=>item.id!==id)
            setDocusenvio(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }

  return (
    <div>
         {
            usuario.rol==="admin" ?( <div className="d-block  bg-info py-2">
            <div className="container">
           <h2 className='text-center'>Cargar recursos</h2>
                  
            <form onSubmit={agregar} className="text-center py-5">               
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input
                        onChange={e=>setNombre(e.target.value)}
                        value={nombre}
                        type="text"
                        className="form-control mb-2"
                        placeholder="NOMBRE DE RECURSO"/>
                    </div>
                    
                </div>
                

                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input type="file" onChange={archivoHandler} />
                    </div>
                    {
                        usuario.rol==='admin'?(
                            <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                onChange={e=>setArchivoUrl(e.target.value)}
                                value={archivoUrl}
                                type="text"
                                className="form-control mb-2"
                                placeholder="DOCUMENTO"/>
                            </div>
                        ):(
                                null
                        )
                    }
                   
                </div>
               

            <button 
            type="submit"
            className="btn btn-success w-100">Enviar</button>

              </form>
             </div>
             </div>):(null)
        }

<div className="container  py-5">
        
        <h2 className='text-center'>Recursos</h2>
        <div className='row justify-content-center'>
        {
    docusenvio.map(item=>(    
                
        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 col-xl-4 col-xxl-4 py-3" key={item.id}>
            <div className="card"  >
               <div className="card-body text-center">
           <h5 className="card-title">{item.nombreRecurso}</h5>
            
           <a href={item.rutaRecurso} target="_blank" rel="noreferrer" > <i className="bi bi-cloud-download-fill"></i></a>
           {
                          usuario.rol==="admin"?(  <button 
                           type="button"
               onClick={()=>eliminarrecurso(item.id)}
               className="btn btn-danger w-100 mt-5 ">
                   Eliminar
                   
                   </button>):(null)
                       }
               </div>
               
       </div>
        </div>
        
    ))
}
        </div>                 
   </div>
        
    </div>
        
  )
}

export default ViewRecursosInformes