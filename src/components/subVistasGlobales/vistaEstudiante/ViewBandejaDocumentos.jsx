import React, { useEffect, useState } from 'react'
import {db} from '../../../firebase';
import moment from 'moment'
// import Swal from 'sweetalert2';
import 'moment/locale/es'
import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewBandejaDocumentos = () => {
  const {usuario}=React.useContext(UsuarioContext)

    const [docus, setDocus] = useState([])
     const [docussecpitdos, setDocussecpitdos] = useState([])
     const [docussecpittres, setDocussecpittres] = useState([])
    const [buscaNombre, setBuscaNombre] = useState("")
   
    useEffect(() =>  {
      const obtenerDatos=async()=>{
          try {
              //const dba=app.firestore() todo esto jala del firebase js el 
              //app debe ser igual a lo que se exporta                
              //aqui la respuesta se esta guardando en data
              const data= await db.collection('endoinforestudiuno').orderBy('fechadocente','desc').get()
              //{id:doc.id,...doc.data()} objetos que trae de la base de datos
              const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
              // console.log(arrayData);
              setDocus(arrayData)                
          } catch (error) {
              console.log(error);
          }

      }

     obtenerDatos();
     console.log('test servicio');
  }, [])
    useEffect(() =>  {
      const obtenerDatos=async()=>{
          try {
              //const dba=app.firestore() todo esto jala del firebase js el 
              //app debe ser igual a lo que se exporta                
              //aqui la respuesta se esta guardando en data
              const data= await db.collection('endoinforestudidos').orderBy('fechadocente','desc').get()
              //{id:doc.id,...doc.data()} objetos que trae de la base de datos
              const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
              // console.log(arrayData);
              setDocussecpitdos(arrayData)                
          } catch (error) {
              console.log(error);
          }

      }

     obtenerDatos();
     console.log('test servicio');
  }, [])
    useEffect(() =>  {
      const obtenerDatos=async()=>{
          try {
              //const dba=app.firestore() todo esto jala del firebase js el 
              //app debe ser igual a lo que se exporta                
              //aqui la respuesta se esta guardando en data
              const data= await db.collection('endoinforestuditres').orderBy('fechadocente','desc').get()
              //{id:doc.id,...doc.data()} objetos que trae de la base de datos
              const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
              // console.log(arrayData);
              setDocussecpittres(arrayData)                
          } catch (error) {
              console.log(error);
          }

      }

     obtenerDatos();
     console.log('test servicio');
  }, [])


  

  const eliminar=async(id)=>{
    try {
       await  db.collection('endoinforestudiuno').doc(id).delete()
        const arrayFiltrado=docus.filter(item=>item.id!==id)
        setDocus(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }
  const eliminardos=async(id)=>{
    try {
       await  db.collection('endoinforestudidos').doc(id).delete()
        const arrayFiltrado=docussecpitdos.filter(item=>item.id!==id)
        setDocussecpitdos(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }
  const eliminartres=async(id)=>{
    try {
       await  db.collection('endoinforestuditres').doc(id).delete()
        const arrayFiltrado=docussecpittres.filter(item=>item.id!==id)
        setDocussecpittres(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }
 

    //  OBTENIENDO DATA DE CRUZADA DE ENVIO DOCUMENTOS

    const [docusenvio, setDocusenvio] = useState([])
    useEffect(() =>  {
        const obtenerDatos=async()=>{
            try {
                //const dba=app.firestore() todo esto jala del firebase js el 
                //app debe ser igual a lo que se exporta                
                //aqui la respuesta se esta guardando en data
                const data= await db.collection('endocalumno').orderBy('fecha','desc').get()
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
    const eliminarenviouno=async(id)=>{
        try {
           await  db.collection('endocalumno').doc(id).delete()
            const arrayFiltrado=docusenvio.filter(item=>item.id!==id)
            setDocusenvio(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }

const [docusenviodos, setDocusenviodos] = useState([])
useEffect(() =>  {
    const obtenerDatos=async()=>{
        try {
            //const dba=app.firestore() todo esto jala del firebase js el 
            //app debe ser igual a lo que se exporta                
            //aqui la respuesta se esta guardando en data
            const data= await db.collection('endocalumnosecpitdos').orderBy('fecha','desc').get()
            //{id:doc.id,...doc.data()} objetos que trae de la base de datos
            const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
            // console.log(arrayData);
            setDocusenviodos(arrayData)                
        } catch (error) {
            console.log(error);
        }

    }

   obtenerDatos();
   console.log('test servicio');
}, [])
const eliminarenviodos=async(id)=>{
    try {
       await  db.collection('endocalumnosecpitdos').doc(id).delete()
        const arrayFiltrado=docusenviodos.filter(item=>item.id!==id)
        setDocusenviodos(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }



     const [docusenviotres, setDocusenviotres] = useState([])
     useEffect(() =>  {
        const obtenerDatos=async()=>{
            try {
                //const dba=app.firestore() todo esto jala del firebase js el 
                //app debe ser igual a lo que se exporta                
                //aqui la respuesta se esta guardando en data
                const data= await db.collection('endocalumnosecpittres').orderBy('fecha','desc').get()
                //{id:doc.id,...doc.data()} objetos que trae de la base de datos
                const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
                // console.log(arrayData);
                setDocusenviotres(arrayData)                
            } catch (error) {
                console.log(error);
            }
    
        }
    
       obtenerDatos();
       console.log('test servicio');
    }, [])
    const eliminarenviotres=async(id)=>{
        try {
           await  db.collection('endocalumnosecpittres').doc(id).delete()
            const arrayFiltrado=docusenviotres.filter(item=>item.id!==id)
            setDocusenviotres(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }

  return (
    <div>
       {
         usuario.rol==="estudiante" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">
             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Informes recibidos SEC PIT 1</h2>
             <p>Cantidad de informes recibidos :{docus.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docus.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdnidealumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA FINAL</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fechadocente).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                            {
                              usuario.rol==="docente" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminar(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>
             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Envio documentos SEC PIT 1</h2>
             <p>Cantidad de documentos enviados : {docusenvio.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docusenvio.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdniAlumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA INICIAL</th>
                         <th className="text-dark">DNI</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-success">{item.numdniAlumno}</td>
                       
                            
                            {
                              usuario.rol==="docente" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminarenviouno(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>

         </div>
     </div>):(null)
    } 
         {
         usuario.rol==="estudiantesecdos" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">
             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Informes recibidos SEC PIT 2</h2>
             <p>Cantidad de informes recibidos :{docussecpitdos.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docussecpitdos.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdnidealumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA FINAL</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fechadocente).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                            {
                              usuario.rol==="docente" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminardos(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>
             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Documentos enviados SEC PIT 2</h2>
             <p>Cantidad de documentos enviados :{docusenviodos.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docusenviodos.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdniAlumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA INICIAL</th>
                         <th className="text-dark">DNI</th>
                    
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                              <td className="table-success">{item.numdniAlumno}</td>
                        
                            
                            {
                              usuario.rol==="docentesecdos" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminarenviodos(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>
         </div>
     </div>):(null)
    } 
         {
         usuario.rol==="estudiantesectres" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">

             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Informes recibidos SEC PIT 3</h2>
             <p>Cantidad de informes recibidos :{docussecpittres.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docussecpittres.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdnidealumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA FINAL</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fechadocente).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                            {
                              usuario.rol==="docente" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminartres(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>
             <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6">
             <h2 className='text-center'>Documentos enviados SEC PIT 3</h2>
             <p> Cantidad de documentos enviados :{docusenviotres.length}</p>
                 <ul className="list-group">
                         <div className="py-5 ">
                                  <input
                         className="form-control"
                             type="text"
                         placeholder="Buscar DNI"
                         onChange={(event)=>{
                             setBuscaNombre(event.target.value);
                         }}
                                                 />
                        </div>
     {
         docusenviotres.filter((item)=>{
             if(buscaNombre===""){
                 return item
             }else if(item.numdniAlumno.toLowerCase().includes(buscaNombre.toLowerCase())){
                 return item
             }
             return ""
             //abajo de este .map debe is contactos solo para listarse 
         }).map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">FECHA INICIAL</th>
                         <th className="text-dark">DNI</th>
                         
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                            <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                            
                            <td className="table-success">{item.numdniAlumno}</td>
                            
                            {
                              usuario.rol==="docentesectres" || usuario.rol==="admin"?(<td>  <button 
                                type="button"
                    onClick={()=>eliminarenviotres(item.id)}
                    className="btn btn-danger  float-end ">
                        Eliminar
                        
                        </button></td>):(null)
                            }
                            
                             
                            
                         </tr>
                         
                     </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>
 
 
             </div>


         </div>
     </div>):(null)
    } 



    </div>
  )
}

export default ViewBandejaDocumentos