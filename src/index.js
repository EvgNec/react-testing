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

const paintin = pic[0];

function Painting(props) {
 return  <div>
  <img src={props.url} alt={props.title} width="480"/>
   <h2>{props.title}</h2>
  <p>
     Author: <a href={props.picUrl}>{props.authorName}</a>
  </p>
  <p>Price:  EUR</p>
  <p>Stock: instock or null</p>
  <button type="button">Add</button>
</div>

};

ReactDOM.render(<Painting url={paintin.url} title={paintin.title}
authorName={paintin.author.tag} picUrl={paintin.author.url}
/>, document.querySelector('#root'));