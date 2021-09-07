import React from 'react';
import image0 from '../../assets/images/cg-large/0.jpg';
import image1 from '../../assets/images/cg-large/1.jpg';
import image2 from '../../assets/images/cg-large/2.jpg';
import image3 from '../../assets/images/cg-large/3.jpg';
import image4 from '../../assets/images/cg-large/4.jpg';
import image5 from '../../assets/images/cg-large/5.jpg';
import image7 from '../../assets/images/cg-large/7.jpg';
import image8 from '../../assets/images/cg-large/8.jpg';
import image9 from '../../assets/images/cg-large/9.jpg';
import image10 from '../../assets/images/cg-large/10.jpg';
import image11 from '../../assets/images/cg-large/11.jpg';


function Gallery() {
    return (
        <section className='container-fluid mt-5'>

        <h5 className='container-fluid mb-3'>Gallery</h5>
        <p className="container-fluid basic">Models and images created using Cinema4D, Photoshop, and AfterEffects</p>

        <div className='container-fluid row'>


            <div className='col-lg-4 col-md-12 mb-4'>
                <img src={image0} className='img-fluid mb-4'></img>
                <img src={image1} className='img-fluid mb-4'></img>
            </div>


            <div className='col-lg-4 col-md-6 mb-4'>
                <img src={image2} className='img-fluid mb-4'></img>
                <img src={image3} className='img-fluid mb-4'></img>
            </div>


            <div className='col-lg-4 col-md-6 mb-4'>
                <img src={image4} className='img-fluid mb-4'></img>
                <img src={image5} className='img-fluid mb-4'></img>
            </div>

            <div className='col-lg-4 col-md-6 mb-4'>
                <img src={image8} className='img-fluid mb-4'></img>
                <img src={image9} className='img-fluid mb-4'></img>
            </div>

            <div className='col-lg-4 col-md-6 mb-4'>
                <img src={image10} className='img-fluid mb-4'></img>
                <img src={image11} className='img-fluid mb-4'></img>
            </div>


        </div> 


        </section>



    );


}

export default Gallery;