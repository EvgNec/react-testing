import PropTypes from 'prop-types';
import defaultImg from './no_img.jpg'; 

export default function PaintingShop(props) {
  const { urlImg = defaultImg, title, picUrl, Delivery = 'noName', price, inStock } = props;
 return  (<div>
  <img src={urlImg} alt={title} width="480"/>
   <h2>{props.title}</h2>
  <p>
     Delivery: <a href={picUrl}>{Delivery}</a>
  </p>
  <p>Price: {price} UAH</p>
     <p>Stock: {inStock}</p>
  <button type="button">Add</button>
</div>
 )
};

PaintingShop.propTypes = {
urlImg: PropTypes.string
};
