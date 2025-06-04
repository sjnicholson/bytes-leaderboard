import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    const bytesLeaderBoardIcon = app.forum.attribute("bytesLeaderBoardIcon");

    items.add(
      'BytesLeaderboard',
      <Button
        className="Button Button--flat"
        style="width:36px"
        onclick={() => {
          window.location.href = app.route('bytesLeaderboard');
        }}
        icon={bytesLeaderBoardIcon}
      >
        {app.translator.trans('ziven-bytes-leaderboard.forum.leaderboard-name')}
      </Button>,
      15
    );
  });
}
