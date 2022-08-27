import React, { useState, useEffect } from 'react'
import {db,storage} from '../../../firebase';
import 'moment/locale/es'
import moment from 'moment'
import Swal from 'sweetalert2';

import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewBandejaDocumentosDictaminadorDos = () => {
  const {usuario}=React.useContext(UsuarioContext)

  const [docus, setDocus] = useState([])
  const [buscaNombre, setBuscaNombre] = useState("")
  const [emisor, setEmisor] = useState(usuario.email)
  const [apellido, setApellido] = useState('')
  const [nombre, setNombre] = useState('')
  const [numdni, setNumdni] = useState('')  
  
  const [fecharecepcion, setFecharecepcion] = useState('')
  const [veredicto, setVeredicto] = useState("")

const [archivourlrecibido, setArchivourlrecibido] = useState("")


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

  useEffect(() =>  {
    const obtenerDatos=async()=>{
        try {
            //const dba=app.firestore() todo esto jala del firebase js el 
            //app debe ser igual a lo que se exporta                
            //aqui la respuesta se esta guardando en data
            const data= await db.collection('endodictaminadores').orderBy('fecha','desc').get()
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
     await  db.collection('endodictaminadores').doc(id).delete()
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
    setFecharecepcion(item.fecha)
    setNombre(item.nombreAlumno)
    setArchivourlrecibido(item.nombreArchivoAlumno)

    setNumdni(item.numdniAlumno)
    
   

  }

  const agregar= async(e)=>{
    e.preventDefault()
   try {        
        const nuevo={
          nombreAlumno:nombre,
          apellidoAlumno:apellido,
          numdniAlumno:numdni,
          nombreArchivodictauno:archivoUrl,
          nombreArchivoAlumno:archivourlrecibido,
          fecharecibida:fecharecepcion,
          veredictos:veredicto,
          jurado:emisor,
          fechaResolucion:Date.now()
        }
        if(await db.collection('endoresoluciondictaminadordos').add(nuevo)){
        Swal.fire("Success","Informe enviado","success")

        setApellido('')
        setFecharecepcion('')
        setArchivourlrecibido('')
        setNombre('')
        setNumdni('')
        setArchivoUrl('')    
        
            
        }
        
       
        
    } catch (error) {
        console.log(error);
    }
    
}

const [revisadodos, setRevisadodos] = useState('revisado')
const editar = async (id) => {
        
    try {
        
      await db.collection('endodictaminadores').doc(id).update({
        activadordictados: revisadodos
      })
      const data= await db.collection('endodictaminadores').orderBy('fecha','desc').get()
      const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
      setDocus(arrayData)  
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="container text-enter bg-primary mt-5">
        
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
            
            {
                usuario.rol==='dictaminadordos' ?  <h2>Documentos recibidos dictaminador B</h2>:null||
                usuario.rol==='admin' ?  <h2>Documentos recibidos DB </h2>:null
              
            }
            <p>Cantidad de documentos:{docus.length}</p>
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
                        <th className="text-dark">FECHA</th>
                        <th className="text-dark">NOMBRE</th>
                        <th className="text-dark">DOCUMENTO</th>
                        <th className="text-dark">DNI</th>
                        <th className="text-dark">ESTADO</th>
                           
                    </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td className="table-info ">{item.apellidoAlumno}</td>
                            <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                            <td className="table-info">{item.nombreAlumno}</td>
                            <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-success">{item.numdniAlumno}</td>
                            <td className="table-success">{item.activadordictados}</td>
                             
                            <td>  <button 
                            type="button"
                onClick={()=>eliminar(item.id)}
                className="btn btn-danger  float-end ">
                    Eliminar
                    
                    </button></td>
                    <td>  <button 
                            type="button"
                onClick={()=>editar(item.id)}
                className="btn btn-danger  float-end ">
                    validar
                    
                    </button></td>
                            <td>  <button 
                            className="btn btn-success w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                    Procesar
                    
                    </button></td>
                            
                    {/* teste */}
                    <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">



{/*  */}    <div className="container mt-3">
            <div className="justify-content-center">
        <div className="modal-dialog">
            <div className="modal-content">
                <h3>
                Envio Resolucion
                </h3>
               
            <div className="modal-body">
                                
         <form onSubmit={agregar} className="text-center py-5">
            
               
            <div className="row">
                <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        
                        <label>Apellido</label>
                    <input
                         onChange={e=>setApellido(e.target.value)}
                        value={apellido}
                        type="text"
                        className="form-control mb-2"
                    />
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <label>Fecha recepcion</label>
                    <input 
                         onChange={e=>setFecharecepcion(e.target.value)}
                          value={fecharecepcion}
                        type="text"
                        className="form-control mb-2"
                    />
                    </div>
            </div>

            <div className="row">
                <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <label>Documento</label>
                    <input 
                        onChange={e=>setArchivourlrecibido(e.target.value)}
                        value={archivourlrecibido}
                        type="text"
                        className="form-control mb-2"
                        />
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <label >Nombre</label>
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
                     <select className='form-select' 
                onChange={(e)=>{
                    const selectVeredicto=e.target.value;
                    setVeredicto(selectVeredicto)
                }}
                >
                    <option selected>Seleccione veredicto</option>
                    <option value="con observacion">con observacion</option>
                    <option value="sin observacion">sin observacion</option>

                </select>
                </div> 
                   
            </div>
            
            
               
               
              

              
            <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input type="file" onChange={archivoHandler} />
                    </div>
                    {
                        usuario.rol==='admin' ?(
                            <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                onChange={e=>setArchivoUrl(e.target.value)}
                                value={archivoUrl}
                                type="text"
                                className="form-control mb-2"
                                placeholder="INFORME DE DICTAMINADOR"/>
                            </div>
                        ):(
                                null
                        )
                    }
                   
                </div>
         
           
               

            {/* <button 
            onClick={agregar}
             type="submit"
            className="btn btn-success w-100">Enviar Registro</button>   */}
            
            <button 
            onClick={()=>activarEdicion(item)}
             type="submit"
            className="btn btn-primary w-100 py-2">Cargar y Enviar</button>

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

export default ViewBandejaDocumentosDictaminadorDos