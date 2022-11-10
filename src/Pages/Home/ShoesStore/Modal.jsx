import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {content,display} = this.props;
        return (
            <div className={display}>
                <h3 className='p-2 text-center'>{content.name}</h3>
                <div className='row'>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='img'>
                            <img className='w-100' src={content.image} alt="..." />
                        </div>
                    </div>
                    <div className='col col-lg-8 col-md-6 col-sm-12 col-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Price:</th>
                                    <td className='ps-4'>{content.price} $</td>
                                </tr>
                                <tr>
                                    <th className='position-relative'><p className='position-absolute top-0 start-0 p-2'>Description:</p></th>
                                    <td className='ps-4'>{content.description}</td>
                                </tr>
                                <tr>
                                    <th>Quantity: </th>
                                    <td className='ps-4'>{content.quantity}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
