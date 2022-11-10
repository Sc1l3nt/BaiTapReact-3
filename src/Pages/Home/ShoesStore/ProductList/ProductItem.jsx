import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {item, setStateModal} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={item.image} />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price} $</p>
                    <button className='btn btn-dark' onClick={()=>{
                        {setStateModal(item)}
                    }}>Add to cart<i className="ps-2 fa fa-cart-arrow-down" /></button>
                </div>
            </div>
        )
    }
}