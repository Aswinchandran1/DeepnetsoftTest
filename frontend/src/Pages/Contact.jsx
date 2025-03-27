import React from 'react'
import Logo from '../assets/Logo.png'


const Contact = () => {
    return (
        <div className='bg-black' style={{ minHeight: '30vh' }}>
            <div className='container'>
                <div className='row ms-md-5 '>
                    <div className='col-12 col-md-3 border border-white rounded-4 mb-4 d-flex flex-column justify-content-center align-items-center '>
                        <h5 className='text-primary mb-1'>Connect With Us</h5>
                        <p className='text-light mb-0'>info@deepnetsoft</p>
                        <p className='text-light mb-0'>123654789</p>
                    </div>

                    <div className='col-md-1 d-none d-md-block '></div> {/* Empty column for spacing */}

                    <div className='position-relative col-12 col-md-3 border border-white rounded-4 mb-4 d-flex flex-column justify-content-center align-items-center py-5'>
                        <div className='position-absolute ' style={{bottom:"78%"}}>
                            <img src={Logo} alt="Logo" width="86" height="76" />
                        </div>
                        <h3 className='text-primary'>Deep <span className='text-light'>Net</span> <span className='text-white-50'>Soft</span></h3>

                    </div>

                    <div className='col-md-1 d-none d-md-block'></div> {/* Empty column for spacing */}

                    <div className='col-12 col-md-3 border border-white rounded-4 mb-4 d-flex flex-column justify-content-center align-items-center py-4'>
                        <h5 className='text-primary'>Find Us</h5>
                        <p className='text-light'>First floor,Geo Infopark, <br />Infopark EXPY,Kakkand</p>

                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact