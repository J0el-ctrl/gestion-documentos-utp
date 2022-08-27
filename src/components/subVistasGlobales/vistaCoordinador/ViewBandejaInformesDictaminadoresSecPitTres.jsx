import React, { useEffect, useState } from 'react'
import {db,storage} from '../../../firebase';
import 'moment/locale/es'
import moment from 'moment'
import Swal from 'sweetalert2';

const ViewBandejaInformesDictaminadoresSecPitTres = () => {
  const [docus, setDocus] = useState([])
  const [docusdosuno, setDocusdosuno] = useState([])
  const [docustresuno, setDocustresuno] = useState([])
  const [buscaNombre, setBuscaNombre] = useState("")

  useEffect(() =>  {
    const obtenerDatos=async()=>{
        try {
            //const dba=app.firestore() todo esto jala del firebase js el 
            //app debe ser igual a lo que se exporta                
            //aqui la respuesta se esta guardando en data
          const data= await db.collection('endoresoluciondictaminadorunosectres').get()
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
          const data= await db.collection('endoresoluciondictaminadordossectres').get()
            //{id:doc.id,...doc.data()} objetos que trae de la base de datos
            const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
            // console.log(arrayData);
            setDocusdosuno(arrayData)                
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
          const data= await db.collection('endoresoluciondictaminadortressectres').get()
            //{id:doc.id,...doc.data()} objetos que trae de la base de datos
            const arrayData=  data.docs.map(doc=>({id:doc.id,...doc.data()}))
            // console.log(arrayData);
            setDocustresuno(arrayData)                
        } catch (error) {
            console.log(error);
        }

    }

   obtenerDatos();
   console.log('test servicio');
}, [])

const eliminar=async(id)=>{
  try {
     await  db.collection('endoresoluciondictaminadorunosectres').doc(id).delete()
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
     await  db.collection('endoresoluciondictaminadordossectres').doc(id).delete()
      const arrayFiltrado=docusdosuno.filter(item=>item.id!==id)
      setDocusdosuno(arrayFiltrado)
      console.log("se borro");
  } catch (error) {
      console.log(error);
      console.log("no se pudo borrar");
  }    
   }
const eliminartres=async(id)=>{
  try {
     await  db.collection('endoresoluciondictaminadortressectres').doc(id).delete()
      const arrayFiltrado=docustresuno.filter(item=>item.id!==id)
      setDocustresuno(arrayFiltrado)
      console.log("se borro");
  } catch (error) {
      console.log(error);
      console.log("no se pudo borrar");
  }    
   }

   const activarEdicion=(item)=>{

    setFecharesolucion(item.fechaResolucion)
    setDnialumno(item.numdniAlumno)
    setInformeobs(item.nombreArchivodictauno)
    setVeredicto(item.veredictos)

  }

  const [fecharesolucion, setFecharesolucion] = useState('')
  const [dnialumno, setDnialumno] = useState('')
  const [informeobs, setInformeobs] = useState('')
  const [veredicto, setVeredicto] = useState('')


  const agregar=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            fechaderesolucion:fecharesolucion,
            numdnidealumno:dnialumno,
            informededicta:informeobs,
            veredictoo:veredicto,
            fecha:Date.now()
          }

          if(  await db.collection('endoinforatres').add(nuevo)){
            Swal.fire("Success","Documento Enviado","success")
            setFecharesolucion('')
            setDnialumno('')
            setInformeobs('')
            setVeredicto('')
          
            return
                  }
           
    } catch (error) {
        console.log(error)
    }
}

// MAPEANDO DOCUMENTOS ENVIADOS POR DOCENTE
const [docucantidadjalasecpittres, setDocucantidadjalasecpittres] = useState([])
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
  return (
    <div>
        <div className="container text-enter bg-info mt-5">
        
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='text-center'>Informes recibidos de dictaminador A</h2>
            <p>Documentos Procesados :{docus.length}</p>
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
                        <th className="text-dark">FECHA RECIBIDA</th>
                        <th className="text-dark">FECHA RESOLUCION</th>
                        <th className="text-dark">DNI</th>
                        <th className="text-dark">DOCUMENTO-TESIS</th>
                        <th className="text-dark">DICTAMINADOR</th>
                        <th className="text-dark">INFORME</th>
                        <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                    </thead>
                    <tbody>
              <tr>
                            
                            <td className="table-success">{moment(item.fecharecibida).format('LLL')}</td>
                            <td className="table-success">{moment(item.fechaResolucion).format('LLL')}</td>
                            <td className="table-success">{item.numdniAlumno}</td>
                            <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.jurado}</td>
                            <td className="table-danger"><a href={item.nombreArchivodictauno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.veredictos}</td>
                            
                         <td> <button 
                            type="button"
                onClick={()=>eliminar(item.id)}
                className="btn btn-danger  float-end ">
                    Eliminar
                    
                    </button></td>
                    <td>  <button 
                            className="btn btn-warning w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                    Enviar
                    
                    </button></td>


                    {/* regreso a docente */}

                    <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">



{/*  */}    <div className="container mt-3">
            <div className="justify-content-center">
        <div className="modal-dialog">
            <div className="modal-content">
                <h3>
                Envio de informes 
                </h3>
        <div className="modal-body">
                 
         <form onSubmit={agregar} className="text-center py-5">

        
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label>Informe</label>
                    <input 
                        onChange={e=>setInformeobs(e.target.value)}
                        value={informeobs}
                        type="text"
                        className="form-control mb-2"
                        />
                    </div>
                   
                </div>
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label>DNI</label>
                            <input 
                                 onChange={e=>setDnialumno(e.target.value)}
                                 value={dnialumno}
                                type="text"
                                className="form-control mb-2"
                                />
                </div>
                  
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Resolución</label>
                            <input 
                            onChange={e=>setFecharesolucion(e.target.value)}
                             value={fecharesolucion}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Veredicto</label>
                            <input 
                            onChange={e=>setVeredicto(e.target.value)}
                             value={veredicto}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
                 
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
       <div className="container text-enter bg-primary mt-5">
        
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='text-center'>Informes recibidos de dictaminador B</h2>
            <p>Documentos Procesados : {docusdosuno.length}</p>
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
        docusdosuno.filter((item)=>{
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
                        <th className="text-dark">FECHA RECIBIDA</th>
                        <th className="text-dark">FECHA RESOLUCION</th>
                        <th className="text-dark">DNI</th>
                        <th className="text-dark">DOCUMENTO-TESIS</th>
                        <th className="text-dark">DICTAMINADOR</th>
                        <th className="text-dark">INFORME</th>
                        <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                    </thead>
                    <tbody>
              <tr>
                            
                            <td className="table-success">{moment(item.fecharecibida).format('LLL')}</td>
                            <td className="table-success">{moment(item.fechaResolucion).format('LLL')}</td>
                            <td className="table-success">{item.numdniAlumno}</td>
                            <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.jurado}</td>
                            <td className="table-danger"><a href={item.nombreArchivodictauno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.veredictos}</td>
                            
                         <td> <button 
                            type="button"
                onClick={()=>eliminardos(item.id)}
                className="btn btn-danger  float-end ">
                    Eliminar
                    
                    </button></td>
                    <td>  <button 
                            className="btn btn-warning w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                    Enviar
                    
                    </button></td>


                    {/* regreso a docente */}

                    <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">



{/*  */}    <div className="container mt-3">
            <div className="justify-content-center">
        <div className="modal-dialog">
            <div className="modal-content">
                <h3>
                Envio de informes 
                </h3>
        <div className="modal-body">
                 
         <form onSubmit={agregar} className="text-center py-5">

        
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label>Informe</label>
                    <input 
                        onChange={e=>setInformeobs(e.target.value)}
                        value={informeobs}
                        type="text"
                        className="form-control mb-2"
                        />
                    </div>
                   
                </div>
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label>DNI</label>
                            <input 
                                 onChange={e=>setDnialumno(e.target.value)}
                                 value={dnialumno}
                                type="text"
                                className="form-control mb-2"
                                />
                </div>
                  
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Resolución</label>
                            <input 
                            onChange={e=>setFecharesolucion(e.target.value)}
                             value={fecharesolucion}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Veredicto</label>
                            <input 
                            onChange={e=>setVeredicto(e.target.value)}
                             value={veredicto}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
                 
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
       <div className="container text-enter bg-warning mt-5">
        
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='text-center'>Informes recibidos de dictaminador C</h2>
            <p>Documentos Procesados : {docustresuno.length}</p>
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
        docustresuno.filter((item)=>{
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
                        <th className="text-dark">FECHA RECIBIDA</th>
                        <th className="text-dark">FECHA RESOLUCION</th>
                        <th className="text-dark">DNI</th>
                        <th className="text-dark">DOCUMENTO-TESIS</th>
                        <th className="text-dark">DICTAMINADOR</th>
                        <th className="text-dark">INFORME</th>
                        <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                    </thead>
                    <tbody>
              <tr>
                            
                            <td className="table-success">{moment(item.fecharecibida).format('LLL')}</td>
                            <td className="table-success">{moment(item.fechaResolucion).format('LLL')}</td>
                            <td className="table-success">{item.numdniAlumno}</td>
                            <td className="table-danger"><a href={item.nombreArchivoAlumno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.jurado}</td>
                            <td className="table-danger"><a href={item.nombreArchivodictauno} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                            <td className="table-info ">{item.veredictos}</td>
                            
                         <td> <button 
                            type="button"
                onClick={()=>eliminartres(item.id)}
                className="btn btn-danger  float-end ">
                    Eliminar
                    
                    </button></td>
                    <td>  <button 
                            className="btn btn-warning w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                    Enviar
                    
                    </button></td>


                    {/* regreso a docente */}

                    <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">



{/*  */}    <div className="container mt-3">
            <div className="justify-content-center">
        <div className="modal-dialog">
            <div className="modal-content">
                <h3>
                Envio de informes 
                </h3>
        <div className="modal-body">
                 
         <form onSubmit={agregar} className="text-center py-5">

        
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label>Informe</label>
                    <input 
                        onChange={e=>setInformeobs(e.target.value)}
                        value={informeobs}
                        type="text"
                        className="form-control mb-2"
                        />
                    </div>
                   
                </div>
            <div className="row">
                <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <label>DNI</label>
                            <input 
                                 onChange={e=>setDnialumno(e.target.value)}
                                 value={dnialumno}
                                type="text"
                                className="form-control mb-2"
                                />
                </div>
                  
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Resolución</label>
                            <input 
                            onChange={e=>setFecharesolucion(e.target.value)}
                             value={fecharesolucion}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
            <div className="row">
                     <div className="col mb-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                         <label >Veredicto</label>
                            <input 
                            onChange={e=>setVeredicto(e.target.value)}
                             value={veredicto}
                            type="text"
                           className="form-control mb-2"
                              />
                    </div>
            </div>
                 
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

export default ViewBandejaInformesDictaminadoresSecPitTres