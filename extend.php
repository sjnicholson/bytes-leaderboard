<?php

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Ziven\BytesLeaderboard\Controllers\BytesLeaderboardController;
use Ziven\BytesLeaderboard\Controllers\ListBytesLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/bytesLeaderboard', 'bytesLeaderboard.index', BytesLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('allowViewLeaderbaord', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("bytesLeaderboard.allowViewLeaderbaord");
        }),

    (new Extend\Routes('api'))
        ->get('/bytesLeaderboard', 'bytesLeaderboard.get', ListBytesLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('bytesLeaderBoardIcon', 'ziven-bytes-leaderboard.bytesLeaderBoardIcon')
        ->serializeToForum('bytesLeaderBoardEntryPosition', 'ziven-bytes-leaderboard.bytesLeaderBoardEntryPosition')
        ->serializeToForum('bytesLeaderBoardAdditionalInfo', 'ziven-bytes-leaderboard.bytesLeaderBoardAdditionalInfo')
        ->serializeToForum('bytesLeaderBoardHideBytesText', 'ziven-bytes-leaderboard.bytesLeaderBoardHideBytesText')
        ->serializeToForum('leaderboardMaxLoadCount', 'ziven-bytes-leaderboard.leaderboardMaxLoadCount', 'intval')
        ->serializeToForum('leaderboardInitLoadCount', 'ziven-bytes-leaderboard.leaderboardInitLoadCount', 'intval')
        ->serializeToForum('leaderboardLoadMoreCount', 'ziven-bytes-leaderboard.leaderboardLoadMoreCount', 'intval'),
];

return $extend;
