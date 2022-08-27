import React from 'react'
import {Link} from 'react-router-dom'
const ViewDocente = () => {
  return (
    <div>
     <div className="container py-4">  

<div className="row mt-5">
       <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                 <p className="card-text">Gestion de Infomes</p>
                 <Link className="btn btn-primary mt-3" to="/bandejadeinformesdecordinador">Bandeja de Informes </Link>
             </div>
             </div>
         </div>
      <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                 <p className="card-text">Bandeja de Documentos</p>
                 <Link className="btn btn-primary mt-3" to="/bandejadedocumentosdocente">Ver bandeja de documentos</Link>
             </div>
             </div>
       </div>
 </div>

</div>
    </div>
  )
}

export default ViewDocente