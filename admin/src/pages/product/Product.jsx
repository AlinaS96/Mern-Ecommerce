import './product.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { LineChart } from '@mui/x-charts/LineChart';

const Product = () => {
  return (
    <div className='Product'>
      <h1>Product</h1>
      <div className="productWrapper">
        <div className="productWrapperTop">
          <div className="salesPerf">
            <span>Sales performance(Last 3 months)</span>
            <LineChart
              xAxis={[{ data: [1, 2, 3] }]}
              series={[
                {
                  data: [2, 5.5, 2],
                },
              ]}
              width={550}
              height={210}
            />
          </div>
          <div className="productRightInfo">
           
              <div className="productTitle">
                <img src="data:image/jpeg;base64,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" alt="" />
                <span>Apple Airpods</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">232</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">2321</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">In stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            
          </div>
        </div>
        <div className="productWrapperBottom">
          <div className="productWrapperBottomLeft">
            <div className="productBottomName">
              <span>Product Name</span>
              <input type="text" placeholder='Apple Airpods' />
            </div>
            <div className="productBottomInStock">
              <span>In Stock</span>
              <select name="" id="">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="productBottomActive">
              <span>Active</span>
              <select name="" id="">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
          </div>
          <div className="productWrapperBottomRight">
            <div className="productBottomImageUpload">
              <img src="data:image/jpeg;base64,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" alt="" />
              <CloudUploadIcon sx={{color:'blue', fontSize:'30px'}}/>
            </div>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
