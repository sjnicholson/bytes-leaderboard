import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import attachMenu from './attachMenu';
import BytesLeaderboardIndexPage from './components/BytesLeaderboardIndexPage';

app.initializers.add('ziven-bytes-leaderboard', () => {
  app.routes['bytesLeaderboard'] = {
    path: '/bytesLeaderboard',
    component: BytesLeaderboardIndexPage,
  };

  attachMenu();
});