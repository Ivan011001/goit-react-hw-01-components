import user from '../../user.json';
import Profile from '../Profile';
import stats from '../../data.json';
import Statistics from '../Statistics';
import friends from '../../friends.json';
import FriendList from '../FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory';

import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={stats} title="Uploaded states" />
      <Statistics stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </AppContainer>
  );
};
