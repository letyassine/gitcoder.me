import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube, FiGithub, FiTwitch } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { TbBrandBluesky } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    icon: () => <MdOutlineEmail />,
    label: "Email",
    link: "yassinehaimouch@proton.me",
    color: "#F8E3FF",
  },
  {
    icon: () => <SlSocialLinkedin />,
    label: "Linkedin",
    link: "https://linkedin.com/in/letyassine",
    color: "#E3F8FF",
  },
  {
    icon: () => <FaXTwitter />,
    label: "Twitter",
    link: "https://x.com/thegitcoder",
    color: "#F0F0F0",
  },
  {
    icon: () => <FiGithub />,
    label: "Github",
    link: "https://github.com/letyassine",
    color: "#F0F0F0",
  },

  {
    icon: () => <FiInstagram />,
    label: "Instagram",
    link: "https://instagram.com/gitcoder",
    color: "#FFE3F8",
  },
  {
    icon: () => <RxDiscordLogo />,
    label: "Discord",
    link: "https://discord.com/invite/5TnK7wuzw6",
    color: "#E3E8FF",
  },
  {
    icon: () => <FiYoutube />,
    label: "YouTube",
    link: "https://youtube.com/@thegitcoder",
    color: "#FFE3E3",
  },
  {
    icon: () => <FiTwitch />,
    label: "Twitch",
    link: "https://www.twitch.tv/thegitcoder",
    color: "#F3E8FF",
  },
  {
    icon: () => <TbBrandBluesky />,
    label: "BlueSky",
    link: "https://bsky.app/profile/gitcoder.bsky.social",
    color: "#E3F3FF",
  },
];

export default CONTACT_LINKS;
