import React from 'react'
import'../styles/intro.css'
import Cat from '../components/cat'

const Intro = () =>{
    return(
        <>
        <main className='img-bkgnd'>
        <div className='text-container'>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='text-center text-position-Intro-class'>
                    <label className='text-Intro-class ms-sm-4 me-sm-4 mt-sm-2'>     
                    </label>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-sm-4'>
                <button className='btn btn succes filter-blur-out'>Buy</button>
            </div>
        </div>
        <div className='cat-class-container d-flex align-items-end justify-content-center'>
        </div>
        </main>
            </>
    )
}
 
export default Intro