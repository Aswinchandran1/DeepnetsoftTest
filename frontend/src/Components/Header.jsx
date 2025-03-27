import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-black">
                <div class="container">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                  
                            <div className='d-flex gap-1 align-items-center'>
                                <a className="navbar-brand" href="#">
                                    <img src={Logo} alt="Logo" width="86" height="76" />

                                </a>
                                <h3 className='text-primary'>Deep <span className='text-light'>Net</span>  <br /> <span className='text-white-50'>Soft</span></h3>
                            </div>

                     
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white fs-5 me-2" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white fs-5 me-2" aria-current="page" href="#">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white fs-5 me-2" aria-current="page" href="#">Make Reservation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white fs-5 me-2" aria-current="page" href="#"> Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header