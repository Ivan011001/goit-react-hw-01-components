import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List, ListItem } from './FriendsList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
