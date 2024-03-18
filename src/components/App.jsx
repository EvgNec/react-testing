/*import Painting from "./Painting";
import paintin from './pic.json';*/
import imgShop from '../components/shop/img.json';
import PainShop from "./PaintingShop";
export const App = () => {
  return (
    <div>
      {imgShop.map(img => (
      <PainShop
        urlImg={img.url}
        title={img.title}
        picUrl={img.descr.url}
        Delivery={img.descr.tag}
        price={img.price}
        inStock={img.quantity}
      />
      ))
      }
    </div>
  )
};