
import { useState } from 'react'
import './Formulario.css'

   function Formulario() { 
    const [comprar,setComprar] = useState(false)
    const [cancel,setCancel] = useState(false)
    const [visible,setVisible] = useState(true)
    const [visibleComprar,setVisibleComprar] = useState(true)
    const [cantidad,setCantidad] = useState('2')
    const [stockTotal,setStockTotal] = useState('259')

    const [stock,setStock] = useState(true)
     
    function envioDatos(e) {
      e.preventDefault()
      setComprar(true)
      setVisible(false)
      setVisibleComprar(false)
      setStockTotal(stockTotal - cantidad)
      setStock(false)
    }
    function envioCancel(e) {
      e.preventDefault()
      setVisible(false)
      setVisibleComprar(false)
      setStock(false)
      setCancel(true)
    }
    return(
      <div className="Formulario">
    <form>
    <div>
      <legend>Desripción del producto</legend>
   </div>  
   <div className="form-group">
      <label htmlFor="">Nombre</label>
      <p>Producto Micrófono</p>
   </div>
   <div>
      <label htmlFor="">Descripción</label>
      <p>Micrófono de pie con cable</p>
      
   </div> 
   <div>
     <label htmlFor="">Precio</label>
     <p>$23.999</p>
   </div>
   <div>
       <label >SKU</label>
       <p>SKU9156870</p>
     </div>
     <div>
       <label>Cantidad</label>
       <p>{cantidad}</p>
     </div>
     <div>
       <label>Stock</label>
       <p>{stockTotal}</p>
     </div>
     <div>
       <button type="button" disabled={visible === false ?"disabled":""} onClick={envioCancel}>Cancelar</button>
       <button type="submit" disabled={visibleComprar === false ?"disabled":""} onClick={envioDatos}>Comprar</button>
       </div>
       { stock && 
      <div>
       <h4>Stock disponible {stockTotal}</h4>
     </div> }  
      { comprar && 
      <div>
       <h4>Gracias por su compra!!</h4>
     </div> } 
     { cancel && 
      <div>
       <h4>Compra cancelada</h4>
     </div> }
    </form>
   </div>
)
}

export { Formulario }