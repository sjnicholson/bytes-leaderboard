<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'bytesLeaderboard.allowViewLeaderbaord' => Group::MEMBER_ID, // TODO: typo in permission name
]);
