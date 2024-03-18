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
/*
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >      
  <Painting
    url={paintin[0].url}
    title={paintin[0].title}
    authorName={paintin[0].author.tag}
    picUrl={paintin[0].author.url}
    price={paintin[0].price}
      />
      
        <Painting
    url={paintin[1].url}
    title={paintin[1].title}
    authorName={paintin[1].author.tag}
    picUrl={paintin[1].author.url}
    price={paintin[1].price}
      />
              <Painting
    url={paintin[2].url}
    title={paintin[2].title}
    authorName={paintin[2].author.tag}
    picUrl={paintin[2].author.url}
    price={paintin[2].price}
  />
    </div>
  );
};*/
