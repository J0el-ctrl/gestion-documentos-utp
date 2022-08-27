import React from 'react'
import {Link} from 'react-router-dom'
const ViewCoordinador = () => {
  return (
    <div><div className="container py-4">  
    <h2 className="text-center">Panel de Coordinador</h2>
    <div className="row mt-5">
           <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                     <p className="card-text bg-success text-white">Gestion de informes SECPIT01 </p>
                     <Link className="btn btn-success mt-3" to="/bandejadeinformesdictaminadores">Bandeja de informes de dictaminadores </Link>
                 </div>
                 </div>
             </div>
          <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                     <p className="card-text bg-success text-white">Bandeja de documentos SECPIT01</p>
                     <Link className="btn btn-success mt-3" to="/bandejadedocumentoscordinador">Ver bandeja de documentos  </Link>
                 </div>
                 </div>
           </div>
           <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                     <p className="card-text bg-warning text-dark">Gestion de informes SECPIT02 </p>
                     <Link className="btn btn-warning mt-3" to="/bandejadeinformesdictaminadoressecpitdos">Bandeja de informes de dictaminadores </Link>
                 </div>
                 </div>
             </div>
          <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                     <p className="card-text bg-warning text-dark">Bandeja de documentos SECPIT02</p>
                     <Link className="btn btn-warning mt-3" to="/bandejadedocumentoscordinadorsecpitdos">Ver bandeja de documentos  </Link>
                 </div>
                 </div>
           </div>
           <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                     <p className="card-text bg-info text-white">Gestion de informes SECPIT03 </p>
                     <Link className="btn btn-info mt-3" to="/bandejadeinformesdictaminadoressecpittres">Bandeja de informes de dictaminadores </Link>
                 </div>
                 </div>
             </div>
          <div className="col-sm-6 mt-3">
                 <div className="card">
                 <div className="card-body text-center">
                     <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                     <p className="card-text bg-info text-white">Bandeja de documentos SECPIT03</p>
                     <Link className="btn btn-info mt-3" to="/bandejadedocumentoscordinadorsecpittres">Ver bandeja de documentos  </Link>
                 </div>
                 </div>
           </div>
     </div>
    
    </div></div>
  )
}

export default ViewCoordinador