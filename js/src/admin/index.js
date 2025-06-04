import {extend, override} from 'flarum/extend';

app.initializers.add('ziven-bytes-leaderboard', () => {
  app.extensionData
    .for('ziiven-bytes-leaderboard')
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.bytesLeaderBoardIcon',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-icon'),
      help: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-icon-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.bytesLeaderBoardEntryPosition',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-entry-position'),
      type: 'select',
      options: {
        0: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-entry-sideNav'),
        1: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-entry-topRightMenu')
      },
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.bytesLeaderBoardHideBytesText',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-hide-bytes-text'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.bytesLeaderBoardAdditionalInfo',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-additional-info'),
      help: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-additional-info-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.leaderboardMaxLoadCount',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-max-load-count'),
      placeholder:50,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.leaderboardInitLoadCount',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-init-load-count'),
      placeholder:20,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'ziven-bytes-leaderboard.leaderboardLoadMoreCount',
      label: app.translator.trans('ziven-bytes-leaderboard.admin.settings.leaderboard-load-more-count'),
      placeholder:10,
      min:1,
      type: 'number',
    })
    .registerPermission({
        icon: 'fas fa-sort-amount-up',
        label: app.translator.trans('ziven-bytes-leaderboard.admin.permission.allow_view_leaderboard'),
        permission: 'bytesLeaderboard.allowViewLeaderbaord',
      },
      'moderate',
      90
    );
});
