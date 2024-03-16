export default function Painting(props) {
  const { url, title, picUrl, authorName = 'noName', price } = props;
 return  (<div>
  <img src={url} alt={title} width="480"/>
   <h2>{props.title}</h2>
  <p>
     Author: <a href={picUrl}>{authorName}</a>
  </p>
  <p>Price: {price} EUR</p>
  <p>Stock: instock or null</p>
  <button type="button">Add</button>
</div>
 )
};