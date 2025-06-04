import Component from "flarum/Component";
import Link from "flarum/components/Link";
import avatar from "flarum/helpers/avatar";
import username from "flarum/helpers/username";

export default class BytesLeaderboardListItem extends Component {
  view() {
    const {leaderboardListItem,rankID} = this.attrs;
    const bytesName = app.forum.attribute('antoinefr-bytes.bytesname') || '[bytes]';
    const bytesValue = leaderboardListItem.attribute("bytes");
    const bytesText = app.forum.attribute('bytesLeaderBoardHideBytesText') === "1"?bytesValue:bytesName.replace('[bytes]', bytesValue);
    let trophyClass = "BytesLeaderboardListItemTrophyNone";
    let rankClass = "BytesLeaderboardListItemRankTop";

    if(rankID===1){
      trophyClass = "BytesLeaderboardListItemTrophyGold";
    }else if(rankID===2){
      trophyClass = "BytesLeaderboardListItemTrophySilver";
    }else if(rankID===3){
      trophyClass = "BytesLeaderboardListItemTrophyBronze";
    }else{
      rankClass = "BytesLeaderboardListItemRankLower";
    }

    let avatarWithFrame,usernameWithColor;
    if('ziiven-decoration-store' in flarum.extensions){
      const { components } = require('@ziiven-decoration-store');
      avatarWithFrame = components.avatarWithFrame;
      usernameWithColor = components.usernameWithColor;
    }

    return (
      <div className="BytesLeaderboardListItemContainer">
        <div class="BytesLeaderboardListHeaderRank">
          <div class={rankClass}>{rankID}</div>
          <div class={trophyClass}>
            <i class="fas fa-trophy"></i>
          </div>
        </div>
        <div class="BytesLeaderboardListHeaderUser">
          <Link href={app.route.user(leaderboardListItem)} className="transferHistoryUser" style="color:var(--heading-color)">
            {avatarWithFrame?avatarWithFrame(leaderboardListItem):avatar(leaderboardListItem)}{usernameWithColor?usernameWithColor(leaderboardListItem):username(leaderboardListItem)}
          </Link>
        </div>
        <div class="BytesLeaderboardListHeaderBytes">
          {bytesText}
        </div>
      </div>
    );
  }
}
