import imgShop from '../components/shop/img.json';
import PainingList from "./PaintingList";
import imgFriend from './FriendList/friends.json';
import FriendList from "./FriendList/FriendList";

export default function Section({title}) {
  return (
      <div>
          <h2>{title}</h2>
          <FriendList items={imgFriend}/>
    <PainingList items={imgShop}/>
   </div>
  );
};