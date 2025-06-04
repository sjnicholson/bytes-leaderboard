import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function addSidebarMenu() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    const BytesLeaderboardIcon = app.forum.attribute("BytesLeaderboardIcon");

    items.add(
      'BytesLeaderboard',
      <LinkButton icon={BytesLeaderboardIcon} href={app.route('BytesLeaderboard')}>
        {app.translator.trans('sjnicholson-money-leaderboard.forum.leaderboard-name')}
      </LinkButton>,
      15
    );

    return items;
  });
}
