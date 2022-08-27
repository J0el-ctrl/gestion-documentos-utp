import React, { useEffect, useState } from 'react'
import {db} from '../../../firebase';
import 'moment/locale/es'
import moment from 'moment'
 import Swal from 'sweetalert2';

 import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewBandejaDocumentosCoordinadorSecPitTres = () => {

  const {usuario}=React.useContext(UsuarioContext)
  const [docus, setDocus] = useState([])
  const [buscaNombre, setBuscaNombre] = useState("")

  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')

  const [nombre, setNombre] = useState('')
  const [archivoUrl, setArchivoUrl] = useState('');
   const [emisor, setEmisor] = useState(usuario.email)
   const [numdni, setNumdni] = useState('')  
   const [mensaje, setMensaje] = useState('')
   const [telefono, setTelefono] = useState('')
  
  //  activadores
  const [activadoruno, setActivadoruno] = useState('pendiente')
  const [activadordos, setActivadordos] = useState('pendiente')
  const [activadortres, setActivadortres] = useState('pendiente')
  //  activadores

  const agregar=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            apellidoAlumno:apellido,
            correoAlumno:correo,
            nombreAlumno:nombre,
            nombreArchivoAlumno:archivoUrl,
            nombreEmisor:emisor,
            numdniAlumno:numdni,
            observaciones:mensaje,
            telefonoAlumno:telefono,
           activadordictauno:activadoruno,
           activadordictados:activadordos,
           activadordictatres:activadortres,
            fecha:Date.now()
          }

          if(  await db.collection('endodictaminadoressecpittres').add(nuevo)){
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

useEffect(() =>  {
  const obtenerDatos=async()=>{
      try {
          //const dba=app.firestore() todo esto jala del firebase js el 
          //app debe ser igual a lo que se exporta                
          //aqui la respuesta se esta guardando en data
          const data= await db.collection('endodocenteyasesorsecpittres').orderBy('fecha','desc').get()
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

const eliminar=async(id)=>{
  try {
     await  db.collection('endodocenteyasesorsecpittres').doc(id).delete()
      const arrayFiltrado=docus.filter(item=>item.id!==id)
      setDocus(arrayFiltrado)
      console.log("se borro");
  } catch (error) {
      console.log(error);
      console.log("no se pudo borrar");
  }    
   }

   const activarEdicion=(item)=>{

    setApellido(item.apellidoAlumno)
    setCorreo(item.correoAlumno)
    setNombre(item.nombreAlumno)
    setArchivoUrl(item.nombreArchivoAlumno)

   setNumdni(item.numdniAlumno)
   setTelefono(item.telefonoAlumno)

  }

  return (
    <div>
      <div className="container text-enter bg-info mt-5">
        
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2>Documentos Recibidos coordinador</h2>
            <p>Cantidad de documentos recibidos:{docus.length}</p>
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
                    <table className="table">
                    <thead>
                    <tr>                        
                        <th className="text-dark">APELLIDOS</th>
                        <th className="text-dark">EMAIL</th>
                        <th className="text-dark">FECHA</th>
                        <th className="text-dark">NOMBRE</th>
                        <th className="text-dark">DOCUMENTO</th>
                        <th className="text-dark">ASESOR</th>
                        <th className="text-dark">DNI</th>
                        <th className="text-dark">OBSERVACIONES</th>
                        <th className="text-dark">TELEFONO</th>
                    </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td className="table-info ">{item.apellidoAlumno}</td>
                            <td className="table-info ">{item.correoAlumno}</td>
                            <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                            <td className="table-info">{item.nombreAlumno}</td>
                            <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info">{item.nombreEmisor}</td>
                            <td className="table-success">{item.numdniAlumno}</td>
                            <td className="table-info">{item.observaciones}</td>

                            
                            <td className="table-info">{item.telefonoAlumno}</td>
                         <td> <button 
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
                Envio Documento a Dictaminadores
                </h3>
               {/* <p>{emisor}</p> */}
              
            {/* <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{item.numdniAlumno}</h5>
            </div> */}

            <div className="modal-body">
                {/* <p>{item.correoAlumno}</p> */}
                
         <form  onSubmit={agregar} className="text-center py-5">

               
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
                   
                    <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {
                    usuario.rol==='coordinador' ?(<label>OBSERVACIONES DE COORDINADOR </label>):null ||
                    usuario.rol==='admin' ?(<label>OBSERVACIONES DE ADMIN </label>):null 
                  }
                    
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
            className="btn btn-success w-100">Enviar</button> */}
            <button 
            onClick={()=>activarEdicion(item)}
            type="submit"
            className="btn btn-primary w-100 py-2">Enviar</button>

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
    </div>
    </div>
  )
}

export default ViewBandejaDocumentosCoordinadorSecPitTres