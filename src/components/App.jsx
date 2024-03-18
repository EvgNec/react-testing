// import imgShop from '../components/shop/img.json';
// import PainingList from "./PaintingList";
import imgFriend from './FriendList/friends.json';
import FriendList from "./FriendList/FriendList";

export const App = () => {
  return (
    <div>
{<FriendList items={imgFriend}/>}

    {/* <PainingList items={imgShop}/> */}
    </div>
  )
};