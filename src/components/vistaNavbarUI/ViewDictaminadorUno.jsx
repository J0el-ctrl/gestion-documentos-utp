import React from 'react'
import {Link} from 'react-router-dom'
const ViewDictaminadorUno = () => {
  return (
    <div>
       <div className="container   py-4">  
       <h2 className='text-center'>Panel de control de dictaminador A</h2>
<div className="row justify-content-center mt-5">
       {/* <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                 <p className="card-text">Gestion de envio de Documento</p>
                 <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
             </div>
             </div>
         </div> */}
      <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                 <p className="card-text">Bandeja de documentos SEC PIT 1</p>
                 <Link className="btn btn-primary mt-3" to="/bandejadedocumentosdictaminadores">Ver bandeja de documentos</Link>
             </div>
             </div>
       </div>
 </div>
<div className="row justify-content-center mt-5">
       {/* <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                 <p className="card-text">Gestion de envio de Documento</p>
                 <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
             </div>
             </div>
         </div> */}
      <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                 <p className="card-text">Bandeja de documentos SEC PIT 2</p>
                 <Link className="btn btn-primary mt-3" to="/bandejadedocumentosdictaminadoresunosecpit2">Ver bandeja de documentos</Link>
             </div>
             </div>
       </div>
 </div>
<div className="row justify-content-center mt-5">
       {/* <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-file-earmark-arrow-up"></i></h2></h5>
                 <p className="card-text">Gestion de envio de Documento</p>
                 <Link className="btn btn-primary mt-3" to="/enviardocumentos">Enviar documentos </Link>
             </div>
             </div>
         </div> */} 
      <div className="col-sm-6">
             <div className="card">
             <div className="card-body text-center">
                 <h5 className="card-title"><h2><i className="bi bi-folder-check"></i></h2></h5>
                 <p className="card-text">Bandeja de documentos SEC PIT 3</p>
                 <Link className="btn btn-primary mt-3" to="/bandejadedocumentosdictaminadoresunosecpit3">Ver bandeja de documentos</Link>
             </div>
             </div>
       </div>
 </div>

</div>
    </div>
  )
}

export default ViewDictaminadorUno