import Section from './Section';
import imgShop from '../components/shop/img.json';
import PainingList from './PaintingList';
import imgFriend from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Section title="Header" />
      <Section title="Body">
        <FriendList items={imgFriend} />
        <PainingList items={imgShop} />
      </Section>
    </div>
  );
};
