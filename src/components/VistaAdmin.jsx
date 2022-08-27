import React, { useEffect, useState } from 'react'
import {db,functions} from '../firebase'
const VistaAdmin = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
      fetchUsuarios()
    }, [])
    
    const fetchUsuarios=async()=>{
      try {
        const res= await db.collection('usuarios').get()
        const arrayUsuarios=res.docs.map(doc=>doc.data())
        setUsuarios(arrayUsuarios)
      } catch (error) {
        console.log(error); 
      }
    }

    const administrador=email=>{
      if(!email.trim()){
        return console.log('email Vacio');
      }

        const agregarRol=functions.httpsCallable('agregarAdministrador')
          // email 1 : viene del parametro que esta pasando "PROPIEDAD"
          // email2: viene del valor enviado en el onclick  "VALOR"
          //agregarRol({email:email}) se envia al backend , el backen debe tener el valor email
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'admin'})
           .then(user=>{
             console.log('usuario modificado rol administrador');
             fetchUsuarios()
           })        
         })
    } 
    const crearGestor=email=>{
        const agregarRol=functions.httpsCallable('crearGestor')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'gestor'})
           .then(user=>{
             console.log('usuario modificado rol gestor');
             fetchUsuarios()
           })        
         })
    } 
    const crearCoordinador=email=>{
        const agregarRol=functions.httpsCallable('crearCoordinador')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'coordinador'})
           .then(user=>{
             console.log('usuario modificado rol coordinador');
             fetchUsuarios()
           })        
         })
    } 
    const crearAsesor=email=>{
        const agregarRol=functions.httpsCallable('crearAsesor')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'asesor'})
           .then(user=>{
             console.log('usuario modificado rol asesor');
             fetchUsuarios()
           })        
         })
    } 
    const crearAsesorSecDos=email=>{
        const agregarRol=functions.httpsCallable('crearAsesorSecDos')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'asesorsecdos'})
           .then(user=>{
             console.log('usuario modificado rol asesor');
             fetchUsuarios()
           })        
         })
    } 
    const crearAsesorSecTres=email=>{
        const agregarRol=functions.httpsCallable('crearAsesorSecTres')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'asesorsectres'})
           .then(user=>{
             console.log('usuario modificado rol asesor');
             fetchUsuarios()
           })        
         })
    } 
    const crearDocente=email=>{
        const agregarRol=functions.httpsCallable('crearDocente')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'docente'})
           .then(user=>{
             console.log('usuario modificado rol docente');
             fetchUsuarios()
           })        
         })
    } 
    const crearDocenteSecDos=email=>{
        const agregarRol=functions.httpsCallable('crearDocenteSecDos')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'docentesecdos'})
           .then(user=>{
             console.log('usuario modificado rol docente');
             fetchUsuarios()
           })        
         })
    } 
    const crearDocenteSecTres=email=>{
        const agregarRol=functions.httpsCallable('crearDocenteSecTres')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'docentesectres'})
           .then(user=>{
             console.log('usuario modificado rol docente');
             fetchUsuarios()
           })        
         })
    } 
    const crearDictaminadorUno=email=>{
        const agregarRol=functions.httpsCallable('crearDictaminadorUno')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'dictaminadoruno'})
           .then(user=>{
             console.log('usuario modificado rol dictaminadoruno');
             fetchUsuarios()
           })        
         })
    } 
    const crearDictaminadorDos=email=>{
        const agregarRol=functions.httpsCallable('crearDictaminadorDos')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'dictaminadordos'})
           .then(user=>{
             console.log('usuario modificado rol dictaminadordos');
             fetchUsuarios()
           })        
         })
    } 
    const crearDictaminadorTres=email=>{
        const agregarRol=functions.httpsCallable('crearDictaminadorTres')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'dictaminadortres'})
           .then(user=>{
             console.log('usuario modificado rol dictaminadortres');
             fetchUsuarios()
           })        
         })
    } 
    const crearEstudiante=email=>{
        const agregarRol=functions.httpsCallable('crearEstudiante')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'estudiante'})
           .then(user=>{
             console.log('usuario modificado rol estudiante');
             fetchUsuarios()
           })        
         })
    } 
    const crearEstudianteSecDos=email=>{
        const agregarRol=functions.httpsCallable('crearEstudianteSecDos')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'estudiantesecdos'})
           .then(user=>{
             console.log('usuario modificado rol estudiante');
             fetchUsuarios()
           })        
         })
    } 
    const crearEstudianteSecTres=email=>{
        const agregarRol=functions.httpsCallable('crearEstudianteSecTres')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'estudiantesectres'})
           .then(user=>{
             console.log('usuario modificado rol estudiante');
             fetchUsuarios()
           })        
         })
    } 
    const crearInvitado=email=>{
        const agregarRol=functions.httpsCallable('crearInvitado')
       
         agregarRol({email:email})
         .then(res=>{
           console.log(res);
           if(res.data.error){
              console.log('no tiene los permisos'); 
            return
           }
           db.collection('usuarios').doc(email).update({rol:'invitado'})
           .then(user=>{
             console.log('usuario modificado rol invitado');
             fetchUsuarios()
           })        
         })
    } 

    // CONSTANTES DE ELIMINACION

    // const elminarAutor=email=>{
    //   const agregarRol=functions.httpsCallable("eliminarCoordinador")
    //   agregarRol({email:email})
    //   .then(res=>{
    //     console.log(res);
    //     if(res.data.error){
    //       console.log('no tiene los permisos');
    //       return
    //     }
    //     db.collection('usuarios').doc(email).update({rol:'invitado'})
    //     .then(user=>{
    //       console.log('usuario modificado rol autor');
    //       fetchUsuarios()
    //     })
    //   })

    // }




  return (
    <div className='container'>
        
           <h2>Panel de administración y asignación de rol a usuarios</h2>
           {
             usuarios.map(usuario=>(
               <div key={usuario.uid} className="mb-4">
                  {usuario.email}-rol:{usuario.rol}
                 <button 
                  className='btn btn-danger mx-2'
                  onClick={()=>administrador(usuario.email)}
                 >Administrador
                 </button>
                 {/* <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearGestor(usuario.email)}
                 >Gestor
                 </button> */}
                 <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearCoordinador(usuario.email)}
                 >Coordinador
                 </button>
                 {/* <button 
                  className='btn btn-primary mx-2'
                  onClick={()=>crearAsesor(usuario.email)}
                 >Asesor SEC PIT 1
                 </button> */}
                 {/* <button 
                  className='btn btn-primary mx-2'
                  onClick={()=>crearAsesorSecDos(usuario.email)}
                 >Asesor SEC PIT 2
                 </button> */}
                 {/* <button 
                  className='btn btn-primary mx-2'
                  onClick={()=>crearAsesorSecTres(usuario.email)}
                 >Asesor SEC PIT 3
                 </button> */}
                 <button 
                  className='btn btn-info mx-2'
                  onClick={()=>crearDocente(usuario.email)}
                 >Docente SEC PIT 1
                 </button>
                 <button 
                  className='btn btn-info mx-2'
                  onClick={()=>crearDocenteSecDos(usuario.email)}
                 >Docente SEC PIT 2
                 </button>
                 <button 
                  className='btn btn-info mx-2'
                  onClick={()=>crearDocenteSecTres(usuario.email)}
                 >Docente SEC PIT 3
                 </button>
                 <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearDictaminadorUno(usuario.email)}
                 >Dictaminador A
                 </button>
                 <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearDictaminadorDos(usuario.email)}
                 >Dictaminador B
                 </button>
                 <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearDictaminadorTres(usuario.email)}
                 >Dictaminador C
                 </button>
                 <button 
                  className='btn btn-warning mx-2'
                  onClick={()=>crearEstudiante(usuario.email)}
                 >Estudiante SEC PIT 1
                 </button>
                 <button 
                  className='btn btn-warning mx-2'
                  onClick={()=>crearEstudianteSecDos(usuario.email)}
                 >Estudiante SEC PIT 2
                 </button>
                 <button 
                  className='btn btn-warning mx-2'
                  onClick={()=>crearEstudianteSecTres(usuario.email)}
                 >Estudiante SEC PIT 3
                 </button>
                 <button 
                  className='btn btn-success mx-2'
                  onClick={()=>crearInvitado(usuario.email)}
                 >Invitado
                 </button>

               </div>

             ))
           }
    </div>
  )
}

export default VistaAdmin