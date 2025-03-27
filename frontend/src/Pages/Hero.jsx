import React, { useState } from 'react';
import Herobg from '../assets/HeroBg.jpg';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { createMenu } from '../Services/allAPI';


const Hero = () => {
    const [show, setShow] = useState(false);
    const [menuDetails, setMenuDetails] = useState({
        menuName: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuDetails({ ...menuDetails, [name]: value });
    };

    const handleSubmit=async()=>{
        if(menuDetails.menuName==""||menuDetails.description==""){
            alert("please fill the form competly")
        }else{
            try {
               const res= await createMenu(menuDetails) 
               if (res.status == 201){
                alert("Menu Added successfully")
               } 
            } catch (error) {
                
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style = {
        backgroundImage: `url(${Herobg})`,
        backgroundSize: 'cover',
        height: '60vh',
        position: 'relative',
        overflow: 'hidden', // Prevent overflow
    };
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
    };

    console.log(menuDetails);
    
    return (
        <>
            <div className="bg-dark" style={style}>
                <div style={overlayStyle}></div>
                <div
                    className="container d-flex flex-column justify-content-center align-items-center h-100"
                    style={{ zIndex: 2, position: 'relative' }}
                >
                    <h2 className="text-white fs-1 fw-bolder">Menu</h2>
                    <p className="text-white text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde inventore laboriosam esse. Consectetur, consequuntur beatae! Assumenda earum minus <br /> harum repellat, ratione obcaecati,
                    </p>
                    <button className="btn bg-info fw-bolder" onClick={handleShow}>ADD NEW MENU +</button>
                </div>
            </div>



            {/* MODAL */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Menu name" className="mb-3">
                        <Form.Control type="text" placeholder="Enter menu name" name="menuName"
                            value={menuDetails.menuName}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} name="description"
                            value={menuDetails.description}
                            onChange={handleChange} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Hero;
