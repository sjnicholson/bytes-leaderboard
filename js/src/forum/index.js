import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import attachMenu from './attachMenu';
import BytesLeaderboardIndexPage from './components/BytesLeaderboardIndexPage';

app.initializers.add('sjnicholson-money-leaderboard', () => {
  app.routes['BytesLeaderboard'] = {
    path: '/BytesLeaderboard',
    component: BytesLeaderboardIndexPage,
  };

  attachMenu();
});