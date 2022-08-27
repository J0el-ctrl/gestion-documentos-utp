import React, { useState } from 'react'

import {db,storage} from '../../../firebase'
 import Swal from 'sweetalert2';

 import {UsuarioContext} from '../../../Context/UsuarioProvider'

const ViewEnvioDocumentos = (props) => {

    const {usuario}=React.useContext(UsuarioContext)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [numdni, setNumdni] = useState('')  
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')



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
    if(!nombre){
        Swal.fire("Error","Campo Nombre Obligatorio","warning")
        return
    }
    if(!apellido){
        Swal.fire("Error","Campo apellido Obligatorio","warning")
        return
    }
    if(!numdni){
        Swal.fire("Error","Campo DNI Obligatorio","warning")
        return
    }
    if(!correo){
        Swal.fire("Error","Campo correo Obligatorio","warning")
        return
    }
    if(!telefono){
        Swal.fire("Error","Campo telefono Obligatorio","warning")
        return
    }


    try {        
        const nuevo={
          nombreAlumno:nombre,
          apellidoAlumno:apellido,
          numdniAlumno:numdni,
          correoAlumno:correo,
          telefonoAlumno:telefono,
          mensajeAlumno:mensaje,
          nombreArchivoAlumno:archivoUrl,
          fecha:Date.now()
        }
        await db.collection('endocalumno').add(nuevo)    
        Swal.fire("Success","Documento Enviado","success")  
        setNombre('')
        setApellido('')
        setNumdni('')
        setCorreo('')
        setTelefono('')
        setMensaje('')
        setArchivoUrl('')      
        
    } catch (error) {
        console.log(error);
    }
    
}

  const agregarsecpitdos= async(e)=>{
    e.preventDefault()
    if(!nombre){
        Swal.fire("Error","Campo Nombre Obligatorio","warning")
        return
    }
    if(!apellido){
        Swal.fire("Error","Campo apellido Obligatorio","warning")
        return
    }
    if(!numdni){
        Swal.fire("Error","Campo numdni Obligatorio","warning")
        return
    }
    if(!correo){
        Swal.fire("Error","Campo correo Obligatorio","warning")
        return
    }
    if(!telefono){
        Swal.fire("Error","Campo telefono Obligatorio","warning")
        return
    }


    try {        
        const nuevo={
          nombreAlumno:nombre,
          apellidoAlumno:apellido,
          numdniAlumno:numdni,
          correoAlumno:correo,
          telefonoAlumno:telefono,
          mensajeAlumno:mensaje,
          nombreArchivoAlumno:archivoUrl,
          fecha:Date.now()
        }
        await db.collection('endocalumnosecpitdos').add(nuevo)    
        Swal.fire("Success","Documento Enviado","success")  
        setNombre('')
        setApellido('')
        setNumdni('')
        setCorreo('')
        setTelefono('')
        setMensaje('')
        setArchivoUrl('')      
        
    } catch (error) {
        console.log(error);
    }
    
}
  const agregarsecpittres= async(e)=>{
    e.preventDefault()
    if(!nombre){
        Swal.fire("Error","Campo Nombre Obligatorio","warning")
        return
    }
    if(!apellido){
        Swal.fire("Error","Campo apellido Obligatorio","warning")
        return
    }
    if(!numdni){
        Swal.fire("Error","Campo numdni Obligatorio","warning")
        return
    }
    if(!correo){
        Swal.fire("Error","Campo correo Obligatorio","warning")
        return
    }
    if(!telefono){
        Swal.fire("Error","Campo telefono Obligatorio","warning")
        return
    }


    try {        
        const nuevo={
          nombreAlumno:nombre,
          apellidoAlumno:apellido,
          numdniAlumno:numdni,
          correoAlumno:correo,
          telefonoAlumno:telefono,
          mensajeAlumno:mensaje,
          nombreArchivoAlumno:archivoUrl,
          fecha:Date.now()
        }
        await db.collection('endocalumnosecpittres').add(nuevo)  
        Swal.fire("Success","Documento Enviado","success")  
        setNombre('')
        setApellido('')
        setNumdni('')
        setCorreo('')
        setTelefono('')
        setMensaje('')
        setArchivoUrl('')      
        
    } catch (error) {
        console.log(error);
    }
    
}

    


  return (
    <div>
        {
            usuario.rol==="estudiante" ||  usuario.rol==="admin" ?( <div className="d-block w-100 bg-info py-2">
            <div className="container">

            <div className="row">
                    <div className="text-center col mb-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 display-4 fst-italic">
                        <h2>Envio de Documentos</h2>
                    </div>
                </div>
                  
            <form onSubmit={agregar} className="text-center py-5">

               
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input
                        onChange={e=>setNombre(e.target.value)}
                        value={nombre}
                        type="text"
                        className="form-control mb-2"
                        placeholder="NOMBRE"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setApellido(e.target.value)}
                        value={apellido}
                        type="text"
                        className="form-control mb-2"
                        placeholder="APELLIDOS"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setNumdni(e.target.value)}
                        value={numdni}
                        type="number"
                        className="form-control mb-2"
                        placeholder="DNI"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setCorreo(e.target.value)}
                        value={correo}
                        type="email"
                        className="form-control mb-2"
                        placeholder="EMAIL"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setTelefono(e.target.value)}
                        value={telefono}
                        type="number"
                        className="form-control mb-2"
                        placeholder="TELEFONO"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <textarea  
                        onChange={e=>setMensaje(e.target.value)}
                        value={mensaje}
                        type="text"
                        className="form-control mb-2 w-100"
                        placeholder="MENSAJE"  ></textarea>
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
            
            {
                usuario.rol==="estudiantesecdos" ||  usuario.rol==="admin"?(<div className="d-block w-100 bg-primary py-2">
                <div className="container">
    
                <div className="row">
                        <div className="text-center col mb-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 display-4 fst-italic">
                            <h2>Envio de Documentos</h2>
                        </div>
                    </div>
                      
                <form onSubmit={agregarsecpitdos} className="text-center py-5">
    
                   
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                            onChange={e=>setNombre(e.target.value)}
                            value={nombre}
                            type="text"
                            className="form-control mb-2"
                            placeholder="NOMBRE"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setApellido(e.target.value)}
                            value={apellido}
                            type="text"
                            className="form-control mb-2"
                            placeholder="APELLIDOS"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setNumdni(e.target.value)}
                            value={numdni}
                            type="number"
                            className="form-control mb-2"
                            placeholder="DNI"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setCorreo(e.target.value)}
                            value={correo}
                            type="email"
                            className="form-control mb-2"
                            placeholder="EMAIL"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setTelefono(e.target.value)}
                            value={telefono}
                            type="number"
                            className="form-control mb-2"
                            placeholder="TELEFONO"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <textarea  
                            onChange={e=>setMensaje(e.target.value)}
                            value={mensaje}
                            type="text"
                            className="form-control mb-2 w-100"
                            placeholder="MENSAJE"  ></textarea>
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
            {
                usuario.rol==="estudiantesectres" ||  usuario.rol==="admin" ?(<div className="d-block w-100 bg-warning py-2">
                <div className="container">
    
                <div className="row">
                        <div className="text-center col mb-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 display-4 fst-italic">
                            <h2>Envio de Documentos</h2>
                        </div>
                    </div>
                      
                <form onSubmit={agregarsecpittres} className="text-center py-5">
    
                   
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                            onChange={e=>setNombre(e.target.value)}
                            value={nombre}
                            type="text"
                            className="form-control mb-2"
                            placeholder="NOMBRE"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setApellido(e.target.value)}
                            value={apellido}
                            type="text"
                            className="form-control mb-2"
                            placeholder="APELLIDOS"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setNumdni(e.target.value)}
                            value={numdni}
                            type="number"
                            className="form-control mb-2"
                            placeholder="DNI"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setCorreo(e.target.value)}
                            value={correo}
                            type="email"
                            className="form-control mb-2"
                            placeholder="EMAIL"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input 
                            onChange={e=>setTelefono(e.target.value)}
                            value={telefono}
                            type="number"
                            className="form-control mb-2"
                            placeholder="TELEFONO"/>
                        </div>
                        <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <textarea  
                            onChange={e=>setMensaje(e.target.value)}
                            value={mensaje}
                            type="text"
                            className="form-control mb-2 w-100"
                            placeholder="MENSAJE"  ></textarea>
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

     {/* <div className="d-block w-100 bg-info py-2">
            <div className="container">

            <div className="row">
                    <div className="text-center col mb-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 display-4 fst-italic">
                        <h2>Envio de Documentos</h2>
                    </div>
                </div>
                  
            <form onSubmit={agregar} className="text-center py-5">

               
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input
                        onChange={e=>setNombre(e.target.value)}
                        value={nombre}
                        type="text"
                        className="form-control mb-2"
                        placeholder="NOMBRE"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setApellido(e.target.value)}
                        value={apellido}
                        type="text"
                        className="form-control mb-2"
                        placeholder="APELLIDOS"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setNumdni(e.target.value)}
                        value={numdni}
                        type="number"
                        className="form-control mb-2"
                        placeholder="DNI"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setCorreo(e.target.value)}
                        value={correo}
                        type="email"
                        className="form-control mb-2"
                        placeholder="EMAIL"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        onChange={e=>setTelefono(e.target.value)}
                        value={telefono}
                        type="number"
                        className="form-control mb-2"
                        placeholder="TELEFONO"/>
                    </div>
                    <div className="col mb-6 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <textarea  
                        onChange={e=>setMensaje(e.target.value)}
                        value={mensaje}
                        type="text"
                        className="form-control mb-2 w-100"
                        placeholder="MENSAJE"  ></textarea>
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
             </div> */}

    </div>
  )
}

export default ViewEnvioDocumentos