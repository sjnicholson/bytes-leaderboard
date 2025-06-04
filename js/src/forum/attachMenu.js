import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import addSidebarMenu from './addSidebarMenu';
import addTopRightMenu from './addTopRightMenu';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';

export default function () {
  extend(SessionDropdown.prototype, 'items', function (items) {
    const allowViewLeaderboard = app.forum.attribute('allowViewLeaderbaord');

    if(allowViewLeaderboard){
      let BytesLeaderboardEntryPosition = app.forum.attribute("BytesLeaderboardEntryPosition");

      if(BytesLeaderboardEntryPosition==0){
        addSidebarMenu();
      }else if(BytesLeaderboardEntryPosition==1){
        addTopRightMenu();
      }
    }
  });
}