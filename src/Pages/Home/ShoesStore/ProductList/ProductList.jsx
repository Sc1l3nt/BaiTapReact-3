import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductCard = (productData, setStateModal)=>{
        return productData.map((product, index)=>{
            return <div key={index} className='col col-lg-4 col-md-6 col-sm-6 col-12'>
            <ProductItem item={product} setStateModal={setStateModal}/>
        </div>
        })
    }
    render() {
        const {productData, setStateModal} = this.props;
        return (
            <div>
                <h2 className='text-center pt-4'>Shoes shop</h2>
                <div className='container p-5'>
                    <div className='row gx-4 gy-5'>
                        {this.renderProductCard(productData, setStateModal)}
                    </div>
                </div>
            </div>
        )
    }
}
