//         // import {Link} from 'react-router-dom'
//         // import { Carousel } from 'react-responsive-carousel';
//         // import 'react-responsive-carousel/lib/styles/carousel.min.css';
//         // import './index.css'

//         // const Partners=()=>
//         // <>
//         // <div className="homes">
//         // <img style={{ borderRadius: '5px', width: '350px' }} src="./partners.jpeg" alt="Partners" />

//         //         <div className="paras">
//         //         <h1>Build Your Business as a <span 
        
                
//         //         >Vaaj Lab</span> Partners</h1>
//         //         <h2>Increase your earnings,enhance your skills and expand your network as a part of our thriving global community of agency, app,consulting and technology partners</h2>
//         // <Link className="btns" to="/contact">Join Now</Link>
//         //         </div>

        



//         // </div>
//         // <div className="main">
//         // <Carousel showThumbs={false}>
//         //         <div className="clientimages">
//         //         <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ministry_of_Mines_India.svg" alt="Image 1" />
//         //         <p className="legend">Image 1</p>
//         //         </div>
//         //         <div>
//         //         <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Sri_Venkateswara_University_logo.png" alt="Image 2" />
//         //         <p className="legend">Image 2</p>
//         //         </div>
//         //         <div>
//         //         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ministry_of_Defence_India.svg" alt="Image 3" />
//         //         <p className="legend">Image 3</p>
//         //         </div>
//         //         {/* <div>
//         //         <img src="./image4.jpg" alt="Image 4" />
//         //         <p className="legend">Image 4</p>
//         //         </div>
//         //         <div>
//         //         <img src="./image5.jpg" alt="Image 5" />
//         //         <p className="legend">Image 5</p>
//         //         </div> */}
//         // </Carousel>
//         // </div>
        
//         // </>



//         // export default Partners




//         import React from 'react';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './index.css';

// const Partners = () => (
//   <>
//    <div className="main">
//       <div className="carousel-container">
//         <Carousel
//           showThumbs={true}
//           autoPlay
//           interval={2000}
//           infiniteLoop
//           showArrows={false}
//           showStatus={false}
//         >
//           <div
           
//             className="carousel mg"
//           ><br/><br/> 
//             <img className="c-img"
            
//               src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ministry_of_Mines_India.svg"
//               alt="Image 1"
//             />
          
//           </div>
//           <div
//            className="carousel mg big">
//             <br/><br/>
           
//             <img  className="c-img"
//               src="https://svuniversity.edu.in/storage/2021/11/SV-logo.png"
//               alt="Image 2"
//             />
//           </div>
//           <div 
           
//           className="carousel">
//             <br/><br/>
           
//             <img className="c-img"
        
//               src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ministry_of_Defence_India.svg"
//               alt="Image 3"
//             />
//           </div>
//           <div 
           
//            className="carousel">
//              <br/><br/>
            
//              <img className="c-img"
         
//                src="./right_needs.png"
//                alt="Image 3"
//              />
//            </div>
        

//         </Carousel>
       
//       </div>
//     </div>
//     </>
// );

// // export default Partners;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Grid } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import './index.css';

// const Partners = () => {
//   const images = [
//     {
//       src: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ministry_of_Mines_India.svg',
//       alt: 'Image 1',
//     },
//     {
//       src: 'https://svuniversity.edu.in/storage/2021/11/SV-logo.png',
//       alt: 'Image 2',
//     },
//     {
//       src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ministry_of_Defence_India.svg',
//       alt: 'Image 3',
//     },
//     {
//       src: './right_needs.png',
//       alt: 'Image 4',
//     },
//   ];

//   return (
//     <>
//       <Container maxWidth="md">
//         <div className="carousel-section">
        
//           <div className="carousel-container">
//             <Carousel
//               animation="slide"
//               autoPlay={true}
//               indicators={true}
//               timeout={500}
//               navButtonsAlwaysVisible={true}
//               navButtonsProps={{
//                 style: {
//                   background: 'transparent',
//                   color: 'black',
//                   borderRadius: 0,
//                 },
//               }}
//               className="carousel"
//             >
//               {images.map((image, index) => (
//                 <div key={index} className="carousel-item">
//                   <img src={image.src} alt={image.alt} className="c-img" />
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Partners;




import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'

function Products() {
  const onChange = (index) => {
    console.log(`Slide changed to index ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item with index ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumbnail with index ${index}`);
  };

  return (
    <>
 
    <Carousel className="carousel"
      showArrows={false}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div className="Images">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ministry_of_Mines_India.svg" alt="Image " />

      </div>
      <div className="Images">
        <img src="https://svuniversity.edu.in/storage/2021/11/SV-logo.png" alt="Image" />
        
      </div>
      <div className="Images">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ministry_of_Defence_India.svg" alt="Image" />
     
      </div>
     
    </Carousel>
    </>
  );
}

export default Products;
