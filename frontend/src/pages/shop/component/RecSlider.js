import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RecCard from './RecCard';


function RecSlider(){
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return(
 
  
<Carousel responsive={responsive}>
<div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>


  );
}
export default RecSlider