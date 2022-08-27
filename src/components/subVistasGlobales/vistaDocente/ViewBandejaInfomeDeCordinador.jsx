import React, { useEffect, useState } from 'react'
import {db} from '../../../firebase';
import moment from 'moment'
import Swal from 'sweetalert2';
import 'moment/locale/es'
import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewBandejaInfomeDeCordinador = () => {
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
              const data= await db.collection('endoinforauno').orderBy('fecha','desc').get()
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
              const data= await db.collection('endoinforados').orderBy('fecha','desc').get()
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
              const data= await db.collection('endoinforatres').orderBy('fecha','desc').get()
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
       await  db.collection('endoinforauno').doc(id).delete()
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
       await  db.collection('endoinforados').doc(id).delete()
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
       await  db.collection('endoinforatres').doc(id).delete()
        const arrayFiltrado=docussecpittres.filter(item=>item.id!==id)
        setDocussecpittres(arrayFiltrado)
        console.log("se borro");
    } catch (error) {
        console.log(error);
        console.log("no se pudo borrar");
    }    
     }

     const activarEdicion=(item)=>{

      setFecharesolucion(item.fechaderesolucion)
      setInformeobs(item.informededicta)
      setDnialumno(item.numdnidealumno)
      setVeredicto(item.veredictoo)
      
  
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
            fechadocente:Date.now()
          }

          if(  await db.collection('endoinforestudiuno').add(nuevo)){
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
  const agregardos=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            fechaderesolucion:fecharesolucion,
            numdnidealumno:dnialumno,
            informededicta:informeobs,
            veredictoo:veredicto,
            fechadocente:Date.now()
          }

          if(  await db.collection('endoinforestudidos').add(nuevo)){
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
  const agregartres=async(e)=>{
    e.preventDefault()
    try {
        const nuevo={
            fechaderesolucion:fecharesolucion,
            numdnidealumno:dnialumno,
            informededicta:informeobs,
            veredictoo:veredicto,
            fechadocente:Date.now()
          }

          if(  await db.collection('endoinforestuditres').add(nuevo)){
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


  return (
    <div>
      {
         usuario.rol==="docente" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
             <h2>Informes recibidos SEC PIT 1</h2>
             <p>{docus.length}</p>
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
                         
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminar(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-primary w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                  
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
          <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                Envio informe a docente
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
             <label >Fecha de resolución</label>
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
     </div>):(null)
    }
      {
         usuario.rol==="docentesecdos" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
             <h2>Informes recibidos SEC PIT 2</h2>
             <p>{docussecpitdos.length}</p>
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
                         
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminarsecpitdos(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-primary w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                  
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
          <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                Envio informe a docente
                 </h3>                
             <div className="modal-body">
              
             <form onSubmit={agregardos} className="text-center py-5">

        
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
     </div>):(null)
    }
      {
         usuario.rol==="docentesectres" ||  usuario.rol==="admin"?(<div className="container text-enter bg-info mt-5">
        
         <div className="row">
             <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 col-xxl-12">
             <h2>Informes recibidos SEC PIT 3 </h2>
             <p>{docussecpittres.length}</p>
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
                         
                         <th className="text-dark">FECHA</th>
                         <th className="text-dark">RESOLUCION</th>
                         <th className="text-dark">INFORME</th>
                         <th className="text-dark">DNI</th>
                         <th className="text-dark">VEREDICTO</th>
                    </tr>                        
                     </thead>
                     <tbody>
                         <tr>
                             
                             <td className="table-success">{moment(item.fecha).format('LLL')}</td>
                             <td className="table-success">{moment(item.fechaderesolucion).format('LLL')}</td>
                        <td className="table-danger"><a href={item.informededicta} target="_blank" rel="noreferrer" > <i className="bi bi-caret-down-square"></i></a></td>
                              <td className="table-success">{item.numdnidealumno}</td>
                              <td className="table-success">{item.veredictoo}</td>
                            
                             <td>  <button 
                             type="button"
                 onClick={()=>eliminarsecpittres(item.id)}
                 className="btn btn-danger  float-end ">
                     Eliminar
                     
                     </button></td>
                             <td>  <button 
                             className="btn btn-primary w-100" type="button" data-bs-toggle="modal" data-bs-target={`#`+(item.id)}>
                     Ver
                     
                     </button></td>
                  
                     <div className="modal fade " id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 
 
 
          <div className="container mt-3">
             <div className="justify-content-center">
         <div className="modal-dialog">
             <div className="modal-content">
                 <h3>
                Envio informe a docente
                 </h3>                
             <div className="modal-body">
              
             <form onSubmit={agregartres} className="text-center py-5">

        
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
     </div>):(null)
    }
    </div>
  )
}

export default ViewBandejaInfomeDeCordinador