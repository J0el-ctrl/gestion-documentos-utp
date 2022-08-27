import React from 'react'
import {Link} from 'react-router-dom'
import {UsuarioContext} from '../../Context/UsuarioProvider'
const ViewEstudiante = () => {
  const {usuario}=React.useContext(UsuarioContext)
  return (
    <div>
    <div className="container py-4">  
      {
        usuario.rol==='estudiante' || usuario.rol==='admin' ? ( <div className="row mt-5">
        <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                  <p className="card-text">Gestion de envio de Documento SEC PIT 1</p>
                  <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
              </div>
              </div>
          </div>
       <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                  <p className="card-text">Bandeja de informes</p>
                  <Link className="btn btn-primary mt-3" to="/bandejadedocumentos">Ver bandeja de documentos</Link>
              </div>
              </div>
        </div>
  </div>): (null)
      }
      {
        usuario.rol==='estudiantesecdos' || usuario.rol==='admin' ? ( <div className="row mt-5">
        <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                  <p className="card-text">Gestion de envio de Documento SEC PIT 2</p>
                  <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
              </div>
              </div>
          </div>
       <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                  <p className="card-text">Bandeja de informes</p>
                  <Link className="btn btn-primary mt-3" to="/bandejadedocumentos">Ver bandeja de documentos</Link>
              </div>
              </div>
        </div>
  </div>): (null)
      }
      {
        usuario.rol==='estudiantesectres' || usuario.rol==='admin' ? ( <div className="row mt-5">
        <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                  <p className="card-text">Gestion de envio de Documento SEC PIT 3</p>
                  <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
              </div>
              </div>
          </div>
       <div className="col-sm-6">
              <div className="card">
              <div className="card-body text-center">
                  <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                  <p className="card-text">Bandeja de informes</p>
                  <Link className="btn btn-primary mt-3" to="/bandejadedocumentos">Ver bandeja de documentos</Link>
              </div>
              </div>
        </div>
  </div>): (null)
      }
       

    </div>
      
    </div>
  )
}

export default ViewEstudiante