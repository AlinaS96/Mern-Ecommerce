import './newProduct.css'
function NewProduct() {
  return (
    <div className='newProduct'>
      <h1>New Product</h1>
      <div className="newProductImage">
        <span>Image</span>
        <div className="fileChosen">
          <input type="file" />
        </div>
      </div>
      <div className="newProductName">
        <span>Name</span>
        <input type="text" placeholder='Apple Airpods' />
      </div>
      <div className="newProductStock">
        <span>Stock</span>
        <input type="text" placeholder='123' />
      </div>
      <div className="newProductActive">
        <span>Active</span>
        <select name="" id="">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button >Create</button>
    </div>
  )
}

export default NewProduct
