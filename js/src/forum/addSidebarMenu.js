import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function addSidebarMenu() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    const bytesLeaderBoardIcon = app.forum.attribute("bytesLeaderBoardIcon");

    items.add(
      'BytesLeaderboard',
      <LinkButton icon={bytesLeaderBoardIcon} href={app.route('bytesLeaderboard')}>
        {app.translator.trans('ziven-bytes-leaderboard.forum.leaderboard-name')}
      </LinkButton>,
      15
    );

    return items;
  });
}
