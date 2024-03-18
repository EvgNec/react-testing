import imgShop from '../components/shop/img.json';
import PainingList from "./PaintingList";
export const App = () => {
  return (
    <div>
    <PainingList items={imgShop}/>
    </div>
  )
};