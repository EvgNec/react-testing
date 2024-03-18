import defImg from './images.png';
import PropTypes from 'prop-types';

export default function Friend({ avatar = defImg, name, isOnline }) {
    return (<div>
        <img scr={avatar} alt={name} width="480" />
        <h2>{name}</h2>
        <p> {isOnline ? 'Online' : 'OFFline'}</p>
  </div>)  

};

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool,
};