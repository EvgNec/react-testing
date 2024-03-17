/*import Painting from "./Painting";
import paintin from './pic.json';*/
import imgShop from '../components/shop/img.json';
import PainShop from "./PaintingShop";
export const App = () => {
  return (
    <div>
      <PainShop
        urlImg={imgShop[0].url}
        title={imgShop[0].title}
        picUrl={imgShop[0].descr.url}
        Delivery={imgShop[0].descr.tag}
        price={imgShop[0].price}
        inStock={imgShop[0].quantity}
      />
            <PainShop
        urlImg={imgShop[1].url}
        title={imgShop[1].title}
        picUrl={imgShop[1].descr.url}
        Delivery={imgShop[1].descr.tag}
        price={imgShop[1].price}
        inStock={imgShop[1].quantity}
      />
            <PainShop
        urlImg={imgShop[2].url}
        title={imgShop[2].title}
        picUrl={imgShop[2].descr.url}
        Delivery={imgShop[2].descr.tag}
        price={imgShop[2].price}
        inStock={imgShop[2].quantity}
      />
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
