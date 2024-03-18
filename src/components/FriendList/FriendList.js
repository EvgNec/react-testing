import Friend from './Friend';
import PropTypes from 'prop-types';

export default function FriendList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
}