import React from 'react'
import logoutp from '../img/logo-utp.png'


import {UsuarioContext} from '../Context/UsuarioProvider'
import{
    NavLink,
    Link
} from "react-router-dom"
 import './Navbar.css'

const Navbar = () => {


    const {usuario,iniciarSesion,cerrarSession}=React.useContext(UsuarioContext)

  return (
    <div className='navbar navbar-dark bg-danger'>
        
        <div className='container'>


          <div >            
                
                <Link className="" to="/"><img src={logoutp} alt="Mi utp" 
                 width="280"
                 height="60"
                 className='rounded'
                /></Link>
                                              
                    {/* {
                        usuario.rol==='docente' && <NavLink className="nav-link-css" to="/docente">docente</NavLink>
                    }    */}
                     {
                        usuario.rol==='admin' &&  <NavLink className="nav-link-css"  to="/administrador">Administrador</NavLink>
                    }
                   

                    {/* {
                        usuario.rol==='gestor' || usuario.rol==='admin' ?(<NavLink className="nav-link-css" to="/gestor">gestor</NavLink>):(null) 
                    }   */}

                    {
                        usuario.rol==='coordinador' || usuario.rol==='admin' ?(<NavLink className="nav-link-css" to="/coordinador">Coordinador</NavLink>):(null) 
                    }   
                    {/* {
                        usuario.rol==='asesor' || usuario.rol==='admin' || usuario.rol==='asesorsecdos' || usuario.rol==='asesorsectres' ?(<NavLink className="nav-link-css" to="/asesor">asesor</NavLink>):(null) 
                    }    */}
                    {
                        usuario.rol==='docente' || usuario.rol==='admin' || usuario.rol==='docentesecdos' || usuario.rol==='docentesectres' ?(<NavLink className="nav-link-css" to="/docente">Docente</NavLink>):(null) 
                    }   
                    
                    {
                        usuario.rol==='dictaminadoruno' || usuario.rol==='admin' ?(<NavLink className="nav-link-css" to="/dictaminadoruno">Dictaminador A</NavLink>):(null) 
                    }   
                    {
                        usuario.rol==='dictaminadordos' || usuario.rol==='admin' ?(<NavLink className="nav-link-css" to="/dictaminadordos">Dictaminador B</NavLink>):(null) 
                    }  
                    {
                        usuario.rol==='dictaminadortres' || usuario.rol==='admin' ?(<NavLink className="nav-link-css" to="/dictaminadortres">Dictaminador C</NavLink>):(null) 
                    }   
                     {
                        usuario.rol==='dictaminadoruno' || usuario.rol==='admin' || usuario.rol==='dictaminadordos'|| usuario.rol==='dictaminadortres' ?(<NavLink className="nav-link-css" to="/recursos">Recursos</NavLink>):(null) 
                    } 
                    


                    {
                        usuario.rol==='estudiante' || usuario.rol==='admin' || usuario.rol==='estudiantesecdos' || usuario.rol==='estudiantesectres' ?(<NavLink className="nav-link-css" to="/estudiante">Estudiante </NavLink>):(null) 
                    }   
                     
                    
                               
               
                
                   
                
               

        </div>
        <div>
                {/* para validar su login en el sistema */}
                <span className='text-light'>
                {
                usuario.email?usuario.email:'BIENVENIDO'
                }</span>
        </div>


        <div>
        {
                    usuario.email?(
                        
                            <button className="btn btn-danger" onClick={cerrarSession}>Logout</button>
                         
                    ):(

                            
                             <button className="btn btn-danger" onClick={iniciarSesion}>
                                 Login
                                  </button>

                        // null
                        
                    )
                }
        </div>
        </div>

    </div>
  )
}

export default Navbar