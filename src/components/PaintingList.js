import PainShop from './PaintingShop';

export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <PainShop
            urlImg={item.url}
            title={item.title}
            picUrl={item.descr.url}
            Delivery={item.descr.tag}
            price={item.price}
            inStock={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}
