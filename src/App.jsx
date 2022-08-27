import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
  }  from "react-router-dom"
import {UsuarioContext} from './Context/UsuarioProvider'

import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'
import ViewDocente from './components/vistaNavbarUI/ViewDocente'
import ViewHome from './components/vistaNavbarUI/ViewHome'
import ViewGestor from './components/vistaNavbarUI/ViewGestor'
import ViewCoordinador from './components/vistaNavbarUI/ViewCoordinador'
import ViewAsesor from './components/vistaNavbarUI/ViewAsesor'
import ViewDictaminadorUno from './components/vistaNavbarUI/ViewDictaminadorUno'
import ViewDictaminadorDos from './components/vistaNavbarUI/ViewDictaminadorDos'
import ViewDictaminadorTres from './components/vistaNavbarUI/ViewDictaminadorTres'
import ViewEstudiante from './components/vistaNavbarUI/ViewEstudiante'
import ViewEnvioDocumentos from './components/subVistasGlobales/vistaEstudiante/ViewEnvioDocumentos'
import ViewBandejaDocumentos from './components/subVistasGlobales/vistaEstudiante/ViewBandejaDocumentos'
import ViewBandejaDocenteDocumento from './components/subVistasGlobales/vistaDocente/ViewBandejaDocenteDocumento'
import ViewBandejaDocumentosCoordinador from './components/subVistasGlobales/vistaCoordinador/ViewBandejaDocumentosCoordinador'
import ViewBandejaDocumentosDictaminadores from './components/subVistasGlobales/vistaDictaUno/ViewBandejaDocumentosDictaminadores'
import ViewBandejaDocumentosDictaminadoresTres from './components/subVistasGlobales/vistaDictaTres/ViewBandejaDocumentosDictaminadoresTres'
import ViewBandejaDocumentosDictaminadorDos from './components/subVistasGlobales/vistaDictaDos/ViewBandejaDocumentosDictaminadorDos'
import ViewBandejaInformesDictaminadores from './components/subVistasGlobales/vistaCoordinador/ViewBandejaInformesDictaminadores'
import ViewBandejaDocumentosCoordinadorSecPitDos from './components/subVistasGlobales/vistaCoordinador/ViewBandejaDocumentosCoordinadorSecPitDos'
import ViewBandejaDocumentosCoordinadorSecPitTres from './components/subVistasGlobales/vistaCoordinador/ViewBandejaDocumentosCoordinadorSecPitTres'
import ViewBandejaDocumentosDictaminadoresUnoSecPitDos from './components/subVistasGlobales/vistaDictaUno/ViewBandejaDocumentosDictaminadoresUnoSecPitDos'
import ViewBandejaDocumentosDictaminadoresDosSecPitDos from './components/subVistasGlobales/vistaDictaDos/ViewBandejaDocumentosDictaminadoresDosSecPitDos'
import ViewBandejaDocumentosDictaminadoresTresSecPitDos from './components/subVistasGlobales/vistaDictaTres/ViewBandejaDocumentosDictaminadoresTresSecPitDos'
import ViewBandejaDocumentosDictaminadoresUnoSecPitTres from './components/subVistasGlobales/vistaDictaUno/ViewBandejaDocumentosDictaminadoresUnoSecPitTres'
import ViewBandejaDocumentosDictaminadoresDosSecPitTres from './components/subVistasGlobales/vistaDictaDos/ViewBandejaDocumentosDictaminadoresDosSecPitTres'
import ViewBandejaDocumentosDictaminadoresTresSecPitTres from './components/subVistasGlobales/vistaDictaTres/ViewBandejaDocumentosDictaminadoresTresSecPitTres'
import ViewBandejaInformesDictaminadoresSecPitDos from './components/subVistasGlobales/vistaCoordinador/ViewBandejaInformesDictaminadoresSecPitDos'
import ViewBandejaInformesDictaminadoresSecPitTres from './components/subVistasGlobales/vistaCoordinador/ViewBandejaInformesDictaminadoresSecPitTres'
import ViewBandejaInfomeDeCordinador from './components/subVistasGlobales/vistaDocente/ViewBandejaInfomeDeCordinador'
import ViewRecursosInformes from './components/vistaNavbarUI/ViewRecursosInformes'


const App = () => {


    const {usuario}=React.useContext(UsuarioContext)

  return (
    <Router>
      <div>
      <Navbar/>
      </div>
      <Switch>
        <Route exact path="/">
          <ViewHome/>
        </Route>

      <Route exact path="/administrador">
      {
        usuario.rol==='admin' && <VistaAdmin/>
      }     
      {
        usuario.rol==='admin'? (null):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>


      <Route exact path="/gestor">
      {
        usuario.rol==='gestor' || usuario.rol==='admin' ? (<ViewGestor/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      <Route exact path="/coordinador">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewCoordinador/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      <Route exact path="/asesor">
      {
        usuario.rol==='asesor' || usuario.rol==='admin' || usuario.rol==='asesorsecdos' || usuario.rol==='asesorsectres' ? (<ViewAsesor/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>

      <Route exact path="/docente">
      {
        usuario.rol==='docente' || usuario.rol==='admin'  || usuario.rol==='docentesecdos'  || usuario.rol==='docentesectres' ? (<ViewDocente/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      




      <Route exact path="/dictaminadoruno">
      {
        usuario.rol==='dictaminadoruno' || usuario.rol==='admin' ? (<ViewDictaminadorUno/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      <Route exact path="/dictaminadordos">
      {
        usuario.rol==='dictaminadordos' || usuario.rol==='admin' ? (<ViewDictaminadorDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      <Route exact path="/dictaminadortres">
      {
        usuario.rol==='dictaminadortres' || usuario.rol==='admin' ? (<ViewDictaminadorTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      <Route exact path="/estudiante">
      {
        usuario.rol==='estudiante' || usuario.rol==='admin' || usuario.rol==='estudiantesecdos' || usuario.rol==='estudiantesectres' ? (<ViewEstudiante/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
      {/* SUB VISTAS GLOBALES */}
      {/* VISTA DE ESTUDIANTE inicio */}
      <Route exact path="/enviardocumentos">
      {
        usuario.rol==='estudiante' || usuario.rol==='admin' || usuario.rol==='estudiantesecdos' || usuario.rol==='estudiantesectres' ? (<ViewEnvioDocumentos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>

      
      <Route exact path="/bandejadedocumentos">
      {
        usuario.rol==='estudiante' || usuario.rol==='admin' || usuario.rol==='estudiantesecdos'|| usuario.rol==='estudiantesectres' ? (<ViewBandejaDocumentos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 

      
{/* GESTION DOCENTE INICIAL */}
      <Route exact path="/bandejadedocumentosdocente">
      {
        usuario.rol==='docente' || usuario.rol==='admin' || usuario.rol==='docentesecdos' || usuario.rol==='docentesectres' ? (<ViewBandejaDocenteDocumento/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>

      
      <Route exact path="/bandejadeinformesdecordinador">
      {
        usuario.rol==='docente' || usuario.rol==='admin' || usuario.rol==='docentesecdos' || usuario.rol==='docentesectres' ? (<ViewBandejaInfomeDeCordinador/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route>
{/* GESTION DOCENTE FINAL */}



      {/* MANEJAR INDEPENDIENTE DE COMPONENTES INICIO  COORDINACION */}
       <Route exact path="/bandejadedocumentoscordinador">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaDocumentosCoordinador/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadedocumentoscordinadorsecpitdos">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaDocumentosCoordinadorSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadedocumentoscordinadorsecpittres">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaDocumentosCoordinadorSecPitTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
 {/* MANEJAR INDEPENDIENTE DE COMPONENTES FIN   COORDINACION */}

 {/* BANDEJA DE INFORMES DE LAS SECCIONES DICTAMINADORES DE UNO A 3 */}

       <Route exact path="/bandejadeinformesdictaminadores">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaInformesDictaminadores/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadeinformesdictaminadoressecpitdos">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaInformesDictaminadoresSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadeinformesdictaminadoressecpittres">
      {
        usuario.rol==='coordinador' || usuario.rol==='admin' ? (<ViewBandejaInformesDictaminadoresSecPitTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 


      {/* inicio de dictaminadores UNO */}

       <Route exact path="/bandejadedocumentosdictaminadores">
      {
        usuario.rol==='dictaminadoruno'  || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadores/> || <ViewBandejaDocumentosDictaminadoresUnoSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 

       <Route exact path="/bandejadedocumentosdictaminadoresunosecpit2">
      {
        usuario.rol==='dictaminadoruno'  || usuario.rol==='admin' ? ( <ViewBandejaDocumentosDictaminadoresUnoSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 

       <Route exact path="/bandejadedocumentosdictaminadoresunosecpit3">
      {
        usuario.rol==='dictaminadoruno'  || usuario.rol==='admin' ? ( <ViewBandejaDocumentosDictaminadoresUnoSecPitTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 

 {/* inicio de dictaminadores DOS */}
       <Route exact path="/bandejadedocumentosdictaminadoresdos">
      {
        usuario.rol==='dictaminadordos' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadorDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }

      </Route> 
       <Route exact path="/bandejadedocumentosdictaminadoresdossecpit2">
      {
        usuario.rol==='dictaminadordos' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadoresDosSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }

      </Route> 
       <Route exact path="/bandejadedocumentosdictaminadoresdossecpit3">
      {
        usuario.rol==='dictaminadordos' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadoresDosSecPitTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }

      </Route> 

       {/* inicio de dictaminadores TRES */}

       <Route exact path="/bandejadedocumentosdictaminadorestres">
      {
         usuario.rol==='dictaminadortres' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadoresTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadedocumentosdictaminadorestressecpit2">
      {
         usuario.rol==='dictaminadortres' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadoresTresSecPitDos/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 
       <Route exact path="/bandejadedocumentosdictaminadorestressecpit3">
      {
         usuario.rol==='dictaminadortres' || usuario.rol==='admin' ? (<ViewBandejaDocumentosDictaminadoresTresSecPitTres/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 

      {/* MAPEANDO LOS RECURSOS DESCARGABLES */}
       <Route exact path="/recursos">
      {
         usuario.rol==='dictaminadortres' || usuario.rol==='admin'  || usuario.rol==='dictaminadordos'  || usuario.rol==='dictaminadoruno' ? (<ViewRecursosInformes/>):('NO TIENE LOS PERMISOS NECESARIOS PORFAVOR CONTACTE AL ADMINISTRADOR ---  --- ')
      }
      </Route> 


      <Redirect to="/" />
      </Switch>

    </Router>
    
  )
}

export default App