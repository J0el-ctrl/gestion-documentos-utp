import React, { useEffect, useState } from 'react'
import {db} from '../../../firebase';
import moment from 'moment'
import Swal from 'sweetalert2';
import 'moment/locale/es'
import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewBandejaDocenteDocumento = () => {
    const {usuario}=React.useContext(UsuarioContext)

    const [docus, setDocus] = useState([])
    const [docussecpitdos, setDocussecpitdos] = useState([])
    const [docussecpittres, setDocussecpittres] = useState([])
    const [buscaNombre, setBuscaNombre] = useState("")
    

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    
    const [numdni, setNumdni] = useState('')  
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [archivoUrl, setArchivoUrl] = useState('');
    const [emisor, setEmisor] = useState(usuario.email)

    
    
    const agregar=async(e)=>{
        e.preventDefault()
        try {
            const nuevo={
                nombreAlumno:nombre,
                apellidoAlumno:apellido,
                numdniAlumno:numdni,
                correoAlumno:correo,
                telefonoAlumno:telefono,
                observaciones:mensaje,
                nombreArchivoAlumno:archivoUrl,
                nombreEmisor:emisor,
                fecha:Date.now()
              }

              if(  await db.collection('endodocenteyasesor').add(nuevo)){
                Swal.fire("Success","Documento Enviado","success")
                setMensaje('')
                setApellido('')
                setNumdni('')
                setCorreo('')
                setTelefono('')
                setArchivoUrl('')
                setNombre('')
                return
                      }
                     
                
            
             
        } catch (error) {
            console.log(error)
        }
    }

    const agregarsecpitdos=async(e)=>{
        e.preventDefault()
        try {
            const nuevo={
                nombreAlumno:nombre,
                apellidoAlumno:apellido,
                numdniAlumno:numdni,
                correoAlumno:correo,
                telefonoAlumno:telefono,
                observaciones:mensaje,
                nombreArchivoAlumno:archivoUrl,
                nombreEmisor:emisor,
                fecha:Date.now()
              }

              if(  await db.collection('endodocenteyasesorsecpitdos').add(nuevo)){
                Swal.fire("Success","Documento Enviado","success")
                setMensaje('')
                setApellido('')
                setNumdni('')
                setCorreo('')
                setTelefono('')
                setArchivoUrl('')
                setNombre('')
                return
                      }
                     
                
            
             
        } catch (error) {
            console.log(error)
        }
    }
    const agregarsecpittres=async(e)=>{
        e.preventDefault()
        try {
            const nuevo={
                nombreAlumno:nombre,
                apellidoAlumno:apellido,
                numdniAlumno:numdni,
                correoAlumno:correo,
                telefonoAlumno:telefono,
                observaciones:mensaje,
                nombreArchivoAlumno:archivoUrl,
                nombreEmisor:emisor,
                fecha:Date.now()
              }

              if(  await db.collection('endodocenteyasesorsecpittres').add(nuevo)){
                Swal.fire("Success","Documento Enviado","success")
                setMensaje('')
                setApellido('')
                setNumdni('')
                setCorreo('')
                setTelefono('')
                setArchivoUrl('')
                setNombre('')
                return
                      }
                     
                
            
             
        } catch (error) {
            console.log(error)
        }
    }
  




    // ingreso de cantidade SEC 1 PIT 
    const [docucantidad, setDocucantidad] = useState('')
    const [docucantidadjala, setDocucantidadjala] = useState([])
    const agregarcantidad=async(e)=>{
        e.preventDefault()
        try {
            const nuevo={
                docucantidad:docucantidad,
              
              }
        if(  await db.collection('docucantidad').add(nuevo)){
        Swal.fire("Success","Documento Enviado","success")
        setDocucantidad('')
        return
                      }
                   
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>  {
        const obtenerDatos=async()=>{
            try {
                //const dba=app.firestore() todo esto jala del firebase js el 
                //app debe ser igual a lo que se exporta                
                //aqui la respuesta se esta guardando en data
                const data= await db.collection('docucantidad').get()
                //{id:doc.id,...doc.data()} objetos que trae de la base de datos
                const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
                // console.log(arrayData);
                setDocucantidadjala(arrayData)                
            } catch (error) {
                console.log(error);
            }

        }

       obtenerDatos();
       console.log('test servicio');
    }, [])

    const eliminardocucantidad=async(id)=>{
        try {
           await  db.collection('docucantidad').doc(id).delete()
            const arrayFiltrado=docucantidadjala.filter(item=>item.id!==id)
            setDocucantidadjala(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }

// ingreso de cantidade fin


// ingreso de cantidade SEC 2 PIT 

const [docucantidadsecpitdos, setDocucantidadsecpitdos] = useState('')
const [docucantidadjalasecpitdos, setDocucantidadjalasecpitdos] = useState([])

const agregarcantidadsecpitdos=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            docucantidad:docucantidadsecpitdos,
          
          }
    if(  await db.collection('docucantidadsecpitdos').add(nuevo)){
    Swal.fire("Success","Documento Enviado","success")
    setDocucantidadsecpitdos('')
    return
                  }
               
    } catch (error) {
        console.log(error)
    }
}
useEffect(() =>  {
    const obtenerDatos=async()=>{
        try {
            //const dba=app.firestore() todo esto jala del firebase js el 
            //app debe ser igual a lo que se exporta                
            //aqui la respuesta se esta guardando en data
            const data= await db.collection('docucantidadsecpitdos').get()
            //{id:doc.id,...doc.data()} objetos que trae de la base de datos
            const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
            // console.log(arrayData);
            setDocucantidadjalasecpitdos(arrayData)                
        } catch (error) {
            console.log(error);
        }

    }

   obtenerDatos();
   console.log('test servicio');
}, [])

const eliminardocucantidadsecpitdos=async(id)=>{
    try {
       await  db.collection('docucantidadsecpitdos').doc(id).delete()
        const arrayFiltrado=docucantidadjalasecpitdos.filter(item=>item.id!==id)
        setDocucantidadjalasecpitdos(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }


// ingreso de cantidade FIN SEC 2 PIT

// ingreso de cantidade SEC 3 PIT 
const [docucantidadsecpittres, setDocucantidadsecpittres] = useState('')
const [docucantidadjalasecpittres, setDocucantidadjalasecpittres] = useState([])
const agregarcantidadsecpittres=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            docucantidad:docucantidadsecpittres,
          
          }
    if(  await db.collection('docucantidadsecpittres').add(nuevo)){
    Swal.fire("Success","Documento Enviado","success")
    setDocucantidadsecpittres('')
    return
                  }
               
    } catch (error) {
        console.log(error)
    }
}
useEffect(() =>  {
    const obtenerDatos=async()=>{
        try {
            //const dba=app.firestore() todo esto jala del firebase js el 
            //app debe ser igual a lo que se exporta                
            //aqui la respuesta se esta guardando en data
            const data= await db.collection('docucantidadsecpittres').get()
            //{id:doc.id,...doc.data()} objetos que trae de la base de datos
            const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
            // console.log(arrayData);
            setDocucantidadjalasecpittres(arrayData)                
        } catch (error) {
            console.log(error);
        }

    }

   obtenerDatos();
   console.log('test servicio');
}, [])

const eliminardocucantidadsecpittres=async(id)=>{
    try {
       await  db.collection('docucantidadsecpittres').doc(id).delete()
        const arrayFiltrado=docucantidadjalasecpittres.filter(item=>item.id!==id)
        setDocucantidadjalasecpittres(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }

// ingreso de cantidade FIN SEC 3 PIT












    
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
                const data= await db.collection('endocalumnosecpitdos').orderBy('fecha','desc').get()
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
                const data= await db.collection('endocalumnosecpittres').orderBy('fecha','desc').get()
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
           await  db.collection('endocalumno').doc(id).delete()
            const arrayFiltrado=docus.filter(item=>item.id!==id)
            setDocus(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }
    const eliminarsecpitdos=async(id)=>{
        try {
           await  db.collection('endocalumnosecpitdos').doc(id).delete()
            const arrayFiltrado=docussecpitdos.filter(item=>item.id!==id)
            setDocussecpitdos(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }
    const eliminarsecpittres=async(id)=>{
        try {
           await  db.collection('endocalumnosecpittres').doc(id).delete()
            const arrayFiltrado=docussecpittres.filter(item=>item.id!==id)
            setDocussecpittres(arrayFiltrado)
            console.log("se borro");
        } catch (error) {
            console.log(error);
            console.log("no se pudo borrar");
        }    
         }



    const activarEdicion=(item)=>{

        setApellido(item.apellidoAlumno)
        setNombre(item.nombreAlumno)
        setArchivoUrl(item.nombreArchivoAlumno)
        setNumdni(item.numdniAlumno)
        setTelefono(item.telefonoAlumno)
        setCorreo(item.correoAlumno)

       }


  return (
<div>

   
    {
         usuario.rol==="docente" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
     
     {/* BLOQUE UNO */}
<button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ingrese cantidad de documentos 
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
            <div className="col mb-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">

            </div>
       


{/* INGRESO DE CANTIDAD INICIO*/}

<form onSubmit={agregarcantidad} className="text-center py-5 bg-info">
              
 <div className="row">
     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
             
             <label>Cantidad de documentos</label>
         <input
             onChange={e=>setDocucantidad(e.target.value)}
              value={docucantidad}
             type="text"
             className="form-control mb-2"
             placeholder='Ingrese cantidad de documentos'
         />
         </div>        
 </div>
        <button              
        type="submit"
        className="btn btn-success w-100">Cargar
        </button> 

</form>

   {/* INGRESO DE CANTIDAD FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE UNO  FIN */}


{/* BLOQUE DOS INICIO */}
{
     usuario.rol==="admin" ? (<button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModalx">
     Gestione la cantidad de documentos 
   </button>):(null)
}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalx" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
         
{/* INGRESO DE GESTION  DE PIT*/}

<ul className="list-group">
                       
     {
         docucantidadjala.map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">Cantidad documentos</th>
                         
                     </tr>                        
                     </thead>
        <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.docucantidad}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminardocucantidad(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                         </tr>
        </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>


   {/* INGRESO DE GESTION DE PIT FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE DOS FIN */}

{/* FIN DE MODAL ANCLA */}

         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
           
             <h2 className='text-center'>Bandeja de Documentos</h2>
             <p>Documentos recibidos: {docus.length}</p>
             {
         docucantidadjala.map(item=>(
              
                <p key={item.id}>Documentos Elaborados: {item.docucantidad}</p>  
               
         ))
     }
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
                         
                         <th className="text-dark">APELLIDOS</th>
                         <th className="text-dark">EMAIL</th>
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">OBSERVACIONES</th>
                         <th className="text-dark">NOMBRE</th>
                         <th className="text-dark">DOCUMENTO</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">TELEFONO</th>
                     </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.apellidoAlumno}</td>
                             <td className="table-info ">{item.correoAlumno}</td>
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-info">{item.mensajeAlumno}</td>
                             <td className="table-info">{item.nombreAlumno}</td>
 
                             <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                             
                             <td className="table-success">{item.numdniAlumno}</td>
                             <td className="table-info">{item.telefonoAlumno}</td>
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminar(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-info w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                     {/* teste */}
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
 {/*  */}    <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                 Envio documento a Coordinador
                 </h3>
                {/* <p>{emisor}</p> */}
               
             {/* <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">{item.numdniAlumno}</h5>
             </div> */}
 
             <div className="modal-body">
                 {/* <p>{item.correoAlumno}</p> */}
                 
          <form onSubmit={agregar} className="text-center py-5">
 
                
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                         
                         <label>APELLIDO</label>
                     <input
                         onChange={e=>setApellido(e.target.value)}
                          value={apellido}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>CORREO</label>
                     <input 
                         onChange={e=>setCorreo(e.target.value)}
                          value={correo}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
             </div>
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>DNI</label>
                             <input 
                                  onChange={e=>setNumdni(e.target.value)}
                                 value={numdni}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>TELEFONO</label>
                             <input 
                                  onChange={e=>setTelefono(e.target.value)}
                                 value={telefono}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                    
                 </div>
             
                 <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>DOCUMENTO</label>
                     <input 
                         onChange={e=>setArchivoUrl(e.target.value)}
                         value={archivoUrl}
                         type="text"
                         className="form-control mb-2"
                         />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label >NOMBRE</label>
                     <input 
                         onChange={e=>setNombre(e.target.value)}
                          value={nombre}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                 </div>
                
               
 
               
                 <div className="row">
                    
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                   {
                       usuario.rol==='docente' ?(<label>OBSERVACIONES DE DOCENTE </label>):null ||
                       usuario.rol==='asesor' ?(<label>OBSERVACIONES DE ASESOR </label>):null || 
                       usuario.rol==='admin' ?(<label>OBSERVACIONES DE ADMIN </label>):null 
                   }
                     {/* <label>OBSERVACIONES </label> */}
                     <textarea  
                          onChange={e=>setMensaje(e.target.value)}
                          value={mensaje}
                         type="text"
                         className="form-control mb-2 w-100"
                          ></textarea>
                     </div>
                 </div>
                
 
             {/* <button 
             
             type="submit"
             className="btn btn-success w-100">Enviar</button>  */}
             <button 
             onClick={()=>activarEdicion(item)}
             type="submit"
             className="btn btn-primary w-100 py-2">Enviar cargar</button>
 
               </form>
 
             </div>
             <div className="modal-footer">
                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                 
             </div>
             </div>
         </div>
         </div>
         </div>
 
         
         </div>
 
                     {/* test */}
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
         usuario.rol==="docentesecdos" ||  usuario.rol==="admin"?( <div className="container text-enter bg-warning mt-5">
        

 {/* BLOQUE UNO */}
 <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalsecdos">
  Ingrese cantidad de documentos 
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalsecdos" tabindex="-1" aria-labelledby="exampleModalLabelsecdos" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
            <div className="col mb-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">

            </div>
       


{/* INGRESO DE CANTIDAD INICIO*/}

<form onSubmit={agregarcantidadsecpitdos} className="text-center py-5 bg-info">
              
 <div className="row">
     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
             
             <label>Cantidad de documentos sec dos</label>
         <input
             onChange={e=>setDocucantidadsecpitdos(e.target.value)}
              value={docucantidadsecpitdos}
             type="text"
             className="form-control mb-2"
             placeholder='Ingrese cantidad de documentos'
         />
         </div>        
 </div>
        <button              
        type="submit"
        className="btn btn-success w-100">Cargar
        </button> 

</form>

   {/* INGRESO DE CANTIDAD FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE UNO  FIN */}

{/* BLOQUE DOS INICIO */}
{
     usuario.rol==="admin" ? (<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalxd">
     Gestione la cantidad de documentos 
   </button>):(null)
}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalxd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
         
{/* INGRESO DE GESTION  DE PIT*/}

<ul className="list-group">
                       
     {
         docucantidadjalasecpitdos.map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">Cantidad documentos</th>
                         
                     </tr>                        
                     </thead>
        <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.docucantidad}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminardocucantidadsecpitdos(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                         </tr>
        </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>


   {/* INGRESO DE GESTION DE PIT FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE DOS FIN */}










        {/* FIN DE MODAL ANCLA */}
         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
             
             

             <h2 className='text-center'>Bandeja de Documentos</h2>
             <p>Documentos recibidos: {docussecpitdos.length}</p>
             {
         docucantidadjalasecpitdos.map(item=>(
              
                <p key={item.id}>Documentos Elaborados: {item.docucantidad}</p>  
               
         ))
     }



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
                         
                         <th className="text-dark">APELLIDOS</th>
                         <th className="text-dark">EMAIL</th>
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">OBSERVACIONES</th>
                         <th className="text-dark">NOMBRE</th>
                         <th className="text-dark">DOCUMENTO</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">TELEFONO</th>
                     </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.apellidoAlumno}</td>
                             <td className="table-info ">{item.correoAlumno}</td>
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-info">{item.mensajeAlumno}</td>
                             <td className="table-info">{item.nombreAlumno}</td>
 
                             <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                             
                             <td className="table-success">{item.numdniAlumno}</td>
                             <td className="table-info">{item.telefonoAlumno}</td>
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminarsecpitdos(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-info w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                     {/* teste */}
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
 {/*  */}    <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                 Envio documento a Coordinador
                 </h3>
                {/* <p>{emisor}</p> */}
               
             {/* <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">{item.numdniAlumno}</h5>
             </div> */}
 
             <div className="modal-body">
                 {/* <p>{item.correoAlumno}</p> */}
                 
          <form onSubmit={agregarsecpitdos} className="text-center py-5">
 
                
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                         
                         <label>APELLIDO</label>
                     <input
                         onChange={e=>setApellido(e.target.value)}
                          value={apellido}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>CORREO</label>
                     <input 
                         onChange={e=>setCorreo(e.target.value)}
                          value={correo}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
             </div>
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>DNI</label>
                             <input 
                                  onChange={e=>setNumdni(e.target.value)}
                                 value={numdni}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>TELEFONO</label>
                             <input 
                                  onChange={e=>setTelefono(e.target.value)}
                                 value={telefono}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                    
                 </div>
             
                 <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>DOCUMENTO</label>
                     <input 
                         onChange={e=>setArchivoUrl(e.target.value)}
                         value={archivoUrl}
                         type="text"
                         className="form-control mb-2"
                         />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label >NOMBRE</label>
                     <input 
                         onChange={e=>setNombre(e.target.value)}
                          value={nombre}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                 </div>
                
               
 
               
                 <div className="row">
                    
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                   {
                       usuario.rol==='docentesecdos' ?(<label>OBSERVACIONES DE DOCENTE </label>):null ||
                       usuario.rol==='asesor' ?(<label>OBSERVACIONES DE ASESOR </label>):null || 
                       usuario.rol==='admin' ?(<label>OBSERVACIONES DE ADMIN </label>):null 
                   }
                     {/* <label>OBSERVACIONES </label> */}
                     <textarea  
                          onChange={e=>setMensaje(e.target.value)}
                          value={mensaje}
                         type="text"
                         className="form-control mb-2 w-100"
                          ></textarea>
                     </div>
                 </div>
                
 
             {/* <button 
             
             type="submit"
             className="btn btn-success w-100">Enviar</button>  */}
             <button 
             onClick={()=>activarEdicion(item)}
             type="submit"
             className="btn btn-primary w-100 py-2">Cargar y enviar</button>
 
               </form>
 
             </div>
             <div className="modal-footer">
                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                 
             </div>
             </div>
         </div>
         </div>
         </div>
 
         
         </div>
 
                     {/* test */}
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
         usuario.rol==="docentesectres" ||  usuario.rol==="admin"?( <div className="container text-enter bg-primary mt-5">

{/* BLOQUE UNO */}
 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalsectres">
  Ingrese cantidad de documentos 
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalsectres" tabindex="-1" aria-labelledby="exampleModalLabelsectres" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
            <div className="col mb-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">

            </div>
       


{/* INGRESO DE CANTIDAD INICIO*/}

<form onSubmit={agregarcantidadsecpittres} className="text-center py-5 bg-info">
              
 <div className="row">
     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
             
             <label>Cantidad de documentos sec tres</label>
         <input
             onChange={e=>setDocucantidadsecpittres(e.target.value)}
              value={docucantidadsecpittres}
             type="text"
             className="form-control mb-2"
             placeholder='Ingrese cantidad de documentos'
         />
         </div>        
 </div>
        <button              
        type="submit"
        className="btn btn-success w-100">Cargar
        </button> 

</form>

   {/* INGRESO DE CANTIDAD FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE UNO  FIN */}

{/* BLOQUE DOS INICIO */}
{
     usuario.rol==="admin" ? (<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalxdd">
     Gestione la cantidad de documentos 
   </button>):(null)
}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalxdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-body">
    <div className="row">
         
{/* INGRESO DE GESTION  DE PIT*/}

<ul className="list-group">
                       
     {
         docucantidadjalasecpittres.map(item=>(
             <li className="list-group-item" key={item.id}>
                 <div className="table-responsive-md">
                     <table className="table table-hover">
                     <thead>
                     <tr>
                         
                         <th className="text-dark">Cantidad documentos</th>
                         
                     </tr>                        
                     </thead>
        <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.docucantidad}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminardocucantidadsecpittres(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                         </tr>
        </tbody>
                     </table>
                     </div>
             
             </li>
         ))
     }
 
                 </ul>


   {/* INGRESO DE GESTION DE PIT FIN */}
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

{/* BLOQUE DOS FIN */}


        {/* FIN DE MODAL ANCLA */}
         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
             
             

             <h2 className='text-center'>Bandeja de Documentos</h2>
             <p>Documentos recibidos: {docussecpittres.length}</p>
             {
         docucantidadjalasecpittres.map(item=>(
              
                <p key={item.id}>Documentos Elaborados: {item.docucantidad}</p>  
               
         ))
     }



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
                         
                         <th className="text-dark">APELLIDOS</th>
                         <th className="text-dark">EMAIL</th>
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">OBSERVACIONES</th>
                         <th className="text-dark">NOMBRE</th>
                         <th className="text-dark">DOCUMENTO</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">TELEFONO</th>
                     </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-info ">{item.apellidoAlumno}</td>
                             <td className="table-info ">{item.correoAlumno}</td>
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-info">{item.mensajeAlumno}</td>
                             <td className="table-info">{item.nombreAlumno}</td>
 
                             <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                             
                             <td className="table-success">{item.numdniAlumno}</td>
                             <td className="table-info">{item.telefonoAlumno}</td>
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminarsecpittres(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-info w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                     {/* teste */}
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
 {/*  */}    <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                 Envio documento a Coordinador
                 </h3>
                {/* <p>{emisor}</p> */}
               
             {/* <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">{item.numdniAlumno}</h5>
             </div> */}
 
             <div className="modal-body">
                 {/* <p>{item.correoAlumno}</p> */}
                 
          <form onSubmit={agregarsecpittres} className="text-center py-5">
 
                
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                         
                         <label>APELLIDO</label>
                     <input
                         onChange={e=>setApellido(e.target.value)}
                          value={apellido}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>CORREO</label>
                     <input 
                         onChange={e=>setCorreo(e.target.value)}
                          value={correo}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
             </div>
             <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>DNI</label>
                             <input 
                                  onChange={e=>setNumdni(e.target.value)}
                                 value={numdni}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                 <label>TELEFONO</label>
                             <input 
                                  onChange={e=>setTelefono(e.target.value)}
                                 value={telefono}
                                 type="text"
                                 className="form-control mb-2"
                                 />
                             </div>
                    
                 </div>
             
                 <div className="row">
                 <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label>DOCUMENTO</label>
                     <input 
                         onChange={e=>setArchivoUrl(e.target.value)}
                         value={archivoUrl}
                         type="text"
                         className="form-control mb-2"
                         />
                     </div>
                     <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                     <label >NOMBRE</label>
                     <input 
                         onChange={e=>setNombre(e.target.value)}
                          value={nombre}
                         type="text"
                         className="form-control mb-2"
                     />
                     </div>
                 </div>
                
               
 
               
                 <div className="row">
                    
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                   {
                       usuario.rol==='docentesectres' ?(<label>OBSERVACIONES DE DOCENTE </label>):null ||
                       usuario.rol==='asesor' ?(<label>OBSERVACIONES DE ASESOR </label>):null || 
                       usuario.rol==='admin' ?(<label>OBSERVACIONES DE ADMIN </label>):null 
                   }
                     {/* <label>OBSERVACIONES </label> */}
                     <textarea  
                          onChange={e=>setMensaje(e.target.value)}
                          value={mensaje}
                         type="text"
                         className="form-control mb-2 w-100"
                          ></textarea>
                     </div>
                 </div>
                
 
             {/* <button 
             
             type="submit"
             className="btn btn-success w-100">Enviar</button>  */}
             <button 
             onClick={()=>activarEdicion(item)}
             type="submit"
             className="btn btn-primary w-100 py-2">Enviar cargar</button>
 
               </form>
 
             </div>
             <div className="modal-footer">
                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                 
             </div>
             </div>
         </div>
         </div>
         </div>
 
         
         </div>
 
                     {/* test */}
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

export default ViewBandejaDocenteDocumento