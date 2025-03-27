import React, { useEffect, useState } from 'react'
import BtnBg from '../assets/BtnBg.jpg'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getAllMenu, getMenuItems } from '../Services/allAPI';


const Menu = () => {
    const [show, setShow] = useState(false);
    const [menuItemDetails, setMenuItemDetails] = useState({
        itemName: "",
        price: "",
        description: ""
    })
    const [allMenu, setAllMenu] = useState([])
    const [MenuItems, setMenuItems] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuItemDetails({ ...menuItemDetails, [name]: value });
    };

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await getAllMenu();
                setAllMenu(res.data); // Set all fetched menu items
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };

        fetchMenuItems();
    }, [])

    const getMenuIem = async (menuId) => {
        try {
            const res = await getMenuItems(menuId)
            setMenuItems(res.data)
        } catch (error) {
            console.log(error);

        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style = {
        backgroundImage: `url(${BtnBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '15vh',

    };

    // console.log(menuItemDetails);
    console.log(MenuItems);


    return (
        <>
            <div className='bg-black' style={{ minHeight: "80vh" }}>
                <div className="container d-flex gap-2  justify-content-center align-items-center" style={style}>
                    {
                        allMenu?.length > 0 ?
                            allMenu?.map(menu => (
                                <button key={menu?._id} onClick={() => { getMenuIem(menu?._id) }} className='px-4 py-2 btn bg-black text-white border-primary fs-5'>{menu?.menuName}</button>
                            ))
                            :
                            <div>No Menu found</div>
                    }


                </div>

                <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "55vh" }} >
                    <div className='border p-5 my-5' style={{ width: "1000px" }}>
                        <h1 className='text-center text-white mb-5'>{MenuItems?.length > 0 ? MenuItems[0]?.menuId?.menuName : "Menu Name"}</h1>
                        <div className='row'>
                            {
                                MenuItems?.length > 0 ?
                                    MenuItems?.map(menu => (
                                        <div key={menu?._id} className='col-md-6 col-12 mb-2'>
                                            <h3 className='text-white pb-2'>{menu?.itemName} ................. {menu?.price}$</h3>
                                            <p className='text-light'>{menu?.description}</p>
                                        </div>
                                    ))
                                    :
                                    <div className='text-white'>No Menu found</div>
                            }

                        </div>
                        <div className='mt-3'>
                            {MenuItems?.length > 0 && (
                                <button onClick={handleShow} className='btn text-white bg-primary fs-5 p-2'>Add Item +</button>
                            )}

                            {/* {
                                MenuItems?.length > 0 ? MenuItems[0]?.menuId?._id ?
                                    <button onClick={handleShow} className='btn text-white bg-primary fs-5 p-2'>Add Item +</button>
                                    :
                                    <></>
                            } */}

                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Item name" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Item name" name="itemName"
                            value={menuItemDetails.itemName}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                        <Form.Control type="text" placeholder="Enter price" name="price"
                            value={menuItemDetails.price}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }}
                            name="description"
                            value={menuItemDetails.description}
                            onChange={handleChange} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Menu