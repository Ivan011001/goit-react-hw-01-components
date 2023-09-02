import PropTypes from 'prop-types';
import {
  Card,
  Description,
  ProfileImg,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers.toLocaleString()}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views.toLocaleString()}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes.toLocaleString()}</StatQuantity>
        </StatsItem>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
