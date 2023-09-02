import { OnlineChip, Username } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <OnlineChip $isOnline={isOnline}>{isOnline}</OnlineChip>
      <img src={avatar} alt="User avatar" width="48" />
      <Username>{name}</Username>
    </>
  );
}
