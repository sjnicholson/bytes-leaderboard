import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    const BytesLeaderboardIcon = app.forum.attribute("BytesLeaderboardIcon");

    items.add(
      'BytesLeaderboard',
      <Button
        className="Button Button--flat"
        style="width:36px"
        onclick={() => {
          window.location.href = app.route('BytesLeaderboard');
        }}
        icon={BytesLeaderboardIcon}
      >
        {app.translator.trans('sjnicholson-money-leaderboard.forum.leaderboard-name')}
      </Button>,
      15
    );
  });
}
