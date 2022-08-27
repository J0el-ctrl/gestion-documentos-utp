import React, { useState } from 'react'
import {auth,db,firebase} from '../firebase';

export const UsuarioContext =React.createContext()

const UsuarioProvider = (props) => {

//para los roles trabajan mas este y vista admin
        const dataUsuarioInicial={
            email:null,uid:null,activo:null
        }
        const [usuario, setUsuario] = useState(dataUsuarioInicial)

        
        
        React.useEffect(() => {
            detectarUsuario()
        }, [])
        
       
       

        const detectarUsuario=()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    console.log(user)

                    user.getIdTokenResult()
                    .then(getIdTokenResult=>{
                        console.log(getIdTokenResult);
                        if(!!getIdTokenResult.claims.admin){
                            console.log('es administrador');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'admin'
                            })
                        }else if(!!getIdTokenResult.claims.gestor){
                            console.log('es gestor');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'gestor'
                            })
                        }else if(!!getIdTokenResult.claims.coordinador){
                            console.log('es coordinador');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'coordinador'
                            })
                        }else if(!!getIdTokenResult.claims.asesor){
                            console.log('es asesor');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'asesor'
                            })
                        }else if(!!getIdTokenResult.claims.asesorsecdos){
                            console.log('es asesor dos');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'asesorsecdos'
                            })
                        }
                        else if(!!getIdTokenResult.claims.asesorsectres){
                            console.log('es asesor tres');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'asesorsectres'
                            })
                        }
                        else if(!!getIdTokenResult.claims.docente){
                            console.log('es docente');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'docente'
                            })
                        }
                        else if(!!getIdTokenResult.claims.docentesecdos){
                            console.log('es docente dos');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'docentesecdos'
                            })
                        }
                        else if(!!getIdTokenResult.claims.docentesectres){
                            console.log('es docente tres');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'docentesectres'
                            })
                        }else if(!!getIdTokenResult.claims.dictaminadoruno){
                            console.log('es dictaminadoruno');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'dictaminadoruno'
                            })
                        }else if(!!getIdTokenResult.claims.dictaminadordos){
                            console.log('es dictaminadordos');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'dictaminadordos'
                            })
                        }else if(!!getIdTokenResult.claims.dictaminadortres){
                            console.log('es dictaminadortres');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'dictaminadortres'
                            })
                        }else if(!!getIdTokenResult.claims.estudiantesecdos){
                            console.log('es estudiante dos');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'estudiantesecdos'
                            })
                        }
                        else if(!!getIdTokenResult.claims.estudiantesectres){
                            console.log('es estudiante tres');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'estudiantesectres'
                            })
                        }
                        else if(!!getIdTokenResult.claims.estudiante){
                            console.log('es estudiante');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'estudiante'
                            })
                        }else{
                            console.log('es invitado');
                            setUsuario({
                                email:user.email,
                                uid:user.uid,
                                activo:true,
                                rol:'invitado'
                            })
                        }
                    })
                }else{
                    console.log(user);
                    
                    setUsuario({
                        email:null,
                        uid:null,
                        activo:false,
                        rol:null
                    })
                }
            })
        }

       


        

        const iniciarSesion = async()=>{
            try {
                const provider= new firebase.auth.GoogleAuthProvider()
                const res= await auth.signInWithPopup(provider)
                const existe= await db.collection('usuarios').doc(res.user.email).get()

                if(!existe.exists){
                    await db.collection('usuarios').doc(res.user.email).set({
                        uid:res.user.uid,
                        email:res.user.email,
                        rol:'invitado'
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }

        const cerrarSession=()=>{
            auth.signOut()
        }


  return (
    <UsuarioContext.Provider value={{usuario,iniciarSesion,cerrarSession}}>
        {props.children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioProvider