import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorMedicine() {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setSelectedQuantity(event.target.value);
    };

    return (
        <>
            <div className="container-fluid mt-3">   
                <div className="d-flex flex-wrap">
                    <div className="col-lg-4">
                    <h2>Medicine Inventory</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">PRODUCT ID</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container ">
                            <h2 className='abc mb-4'>Requisition Form</h2>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="productSelect" className="form-label me-3"> Product:</label>
                                <select
                                    className="form-select"
                                    id="productSelect"
                                    value={selectedProduct}
                                    onChange={handleProductChange}
                                >
                                    <option value="">Select a product</option>
                                    <option value="Aspirin">Aspirin</option>
                                    <option value="Morphine">Morphine</option>
                                    <option value="Tetracaine">Tetracaine</option>
                                    <option value="Amoxicillin">Amoxicillin</option>
                                    <option value="Penicillin V">Penicillin V</option>
                                    <option value="Nystatin">Nystatin</option>
                                    <option value="Acyclovir">Acyclovir</option>
                                    <option value="Desflurane">Desflurane</option>
                                    <option value="Diazepam">Diazepam</option>
                                    <option value="Cefazolin">Cefazolin</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="quantitySelect" className="form-label me-3"> Quantity:</label>
                                <select
                                    className="form-select"
                                    id="quantitySelect"
                                    value={selectedQuantity}
                                    onChange={handleQuantityChange}
                                >
                                    <option value="">Select Quantity</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button className='btn btn-primary'>submit</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ms-">
                    <h2>Requisition Table</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">PRODUCT ID</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">STATUS</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}