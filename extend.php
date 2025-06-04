<?php

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use sjnicholson\BytesLeaderboard\Controllers\BytesLeaderboardController;
use sjnicholson\BytesLeaderboard\Controllers\ListBytesLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/BytesLeaderboard', 'BytesLeaderboard.index', BytesLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('allowViewLeaderbaord', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("BytesLeaderboard.allowViewLeaderbaord");
        }),

    (new Extend\Routes('api'))
        ->get('/BytesLeaderboard', 'BytesLeaderboard.get', ListBytesLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('BytesLeaderboardIcon', 'sjnicholson-money-leaderboard.BytesLeaderboardIcon')
        ->serializeToForum('BytesLeaderboardEntryPosition', 'sjnicholson-money-leaderboard.BytesLeaderboardEntryPosition')
        ->serializeToForum('BytesLeaderboardAdditionalInfo', 'sjnicholson-money-leaderboard.BytesLeaderboardAdditionalInfo')
        ->serializeToForum('BytesLeaderboardHideMoneyText', 'sjnicholson-money-leaderboard.BytesLeaderboardHideMoneyText')
        ->serializeToForum('leaderboardMaxLoadCount', 'sjnicholson-money-leaderboard.leaderboardMaxLoadCount', 'intval')
        ->serializeToForum('leaderboardInitLoadCount', 'sjnicholson-money-leaderboard.leaderboardInitLoadCount', 'intval')
        ->serializeToForum('leaderboardLoadMoreCount', 'sjnicholson-money-leaderboard.leaderboardLoadMoreCount', 'intval'),
];

return $extend;
