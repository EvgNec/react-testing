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

const data =
{
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

const painting = (
<div>
  <img src="" alt="" width="480"/>
  <h2></h2>
  <p>
    Author: <a href=""></a>
  </p>
  <p>Price: credit</p>
  <p>Stock: instock or null</p>
  <button type="button">Add</button>
</div>
);
