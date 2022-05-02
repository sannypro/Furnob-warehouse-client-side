import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageInvenrory = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        axios.get('https://salty-ridge-21738.herokuapp.com/inventories')
            .then(response => setInventories(response.data))
    }, [inventories])

    const handleDelete = async id => {
        await axios.delete(`https://salty-ridge-21738.herokuapp.com/inventory/${id}`)
        toast('Item deleted')

    }

    const navigate = useNavigate()
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [saved, setSaved] = useState(false)
    const [id, setId] = useState('')
    if (saved) {
        handleDelete(id)
        setSaved(false)

    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='row  justify-content-center'>


            <div className='container '>
                <div className='text-center mt-3'>
                    <button onClick={() => navigate("/add-inventory-item")} className='btn btn-success'>Add New item</button>
                </div>
                <table className="table table-striped container">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories?.map(product => <tr key={product._id}>
                                <td><button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product._id}>{product._id.slice(0, 5)}...</button></td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>


                                <td> <Button variant="danger" onClick={() => {

                                    openModal()
                                    setId(product._id)

                                }}>
                                    Delete
                                </Button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Alert</h2>
                <div>Are You sure You want to delete</div>
                <div className='d-flex justify-content-around'>
                    <button className='mt-4 btn btn-success' onClick={closeModal}>close</button>
                    <button className='mt-4 btn btn-danger' onClick={() => {
                        closeModal()
                        setSaved(true)
                    }}>Delete</button>
                </div>



            </Modal>

        </div>
    );
};

export default ManageInvenrory;