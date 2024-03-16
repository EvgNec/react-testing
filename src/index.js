/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
import ReactDOM from 'react-dom';
import pic from './components/pic.json';
/*
const data =
{
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2018/10/22/17/11/cat-3765805_960_720.jpg",
  title: "Pic1",
  price: 500,
  author: {
    tag: "iractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/"
  },
  quantity: 10,
};*/
const data = pic[1];

const painting = (
<div>
  <img src={data.url} alt={data.title} width="480"/>
  <h2>{data.title}</h2>
  <p>
      Author: <a href={data.author.url}>{data.author.tag}</a>
  </p>
  <p>Price: {data.price} EUR</p>
  <p>Stock: instock or null</p>
  <button type="button">Add</button>
</div>
);

ReactDOM.render(painting, document.querySelector('#root'));