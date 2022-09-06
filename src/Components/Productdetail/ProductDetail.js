import React from 'react';
// import fakeData from '../../fakeData/products.JSON';
import { useParams } from 'react-router-dom';

// import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    // const product = fakeData.find(pd => pd.key === productKey)    
    
        
    return (
        <div>
            <h1>{productKey} product detail coming soon</h1>
            {/* <Product product={product}></Product> */}
            

            
        </div>
    );
};

export default ProductDetail;