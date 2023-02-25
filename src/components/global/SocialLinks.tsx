import "./SocialLinks.scss";
import TelegramIcon from "../../assets/images/icons/telegram.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";
import MediumIcon from "../../assets/images/icons/medium.svg";
import DiscordIcon from "../../assets/images/icons/discord.svg";

function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a href="http://t.me/degenbotETH" target="_blank">
          <img src={TelegramIcon} alt="Telegram Icon" />
        </a>
      </li>
      <li>
        <a href="http://twitter.com/degenbotETH" target="_blank">
          <img src={TwitterIcon} alt="Twitter Icon" />
        </a>
      </li>
      <li>
        <a href="http://degenboteth.medium.com/" target="_blank">
          <img src={MediumIcon} alt="Medium Icon" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={DiscordIcon} alt="Discord Icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
