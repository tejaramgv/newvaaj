
// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import './products.css';

// const Products = () => {
//   const products = [
//     {
//       image: 'https://images.pexels.com/photos/13233162/pexels-photo-13233162.jpeg?auto=compress&cs=tinysrgb&w=600',
//       text: 'Agriculture Post Harvesting',
//     },
//     {
//       image: 'https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg?auto=compress&cs=tinysrgb&w=600',
//       text: 'Consumer Service',
//     },
//     {
//       image: 'https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=600',
//       text: 'AI ML BASED THREAT DETECTION SYSTEM',
//     },
   
//   ];

//   return (
//     <Container maxWidth="md">
//       <div className="carousel-section">
       
//         <div className="carousel-container">
//           <Carousel
//             animation="slide"
//             autoPlay={true}
//             indicators={true}
//             timeout={500}
//             navButtonsAlwaysVisible={true}
//             navButtonsProps={{
//               style: {
//                 background: 'transparent',
//                 color: 'black',
//                 borderRadius: 0,
//               },
//             }}
//             className="carousel"
//           >
//             {products.map((product, index) => (
//               <div key={index} className="carousel-item">
//                 <img src={product.image} alt={product.text} className="c-img" />
//                 <div className="overlay">
//                   <Typography variant="h7">{product.text}</Typography>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Products;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './products.css'

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
        <img src="https://images.pexels.com/photos/13233162/pexels-photo-13233162.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
        <p style={{color:"white"}} className="legend">Agriculture Post Harvesting</p>
      </div>
      <div className="Images">
        <img src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
        <p className="legend" style={{color:"white"}}>Consumer Service</p>
      </div>
      <div className="Images">
        <img src="https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=600" alt="Image" />
        <p className="legend" style={{color:"white"}}>AI ML BASED THREAT DETECTION SYSTEM</p>
      </div>
     
    </Carousel>
    </>
  );
}

export default Products;
