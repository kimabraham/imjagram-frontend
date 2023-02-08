import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import PlatformJoinBtn from "./PlatformJoinBtn";

const PlatformJoinBtnBox = () => {
  const platformBtnInfos = [
    {
      platform: "kakao",
      title: "KaKaoTalk으로 로그인",
      icon: faFacebookSquare,
    },
    {
      platform: "facebook",
      title: "Facebook으로 로그인",
      icon: faFacebookSquare,
    },
    {
      platform: "google",
      title: "Google로 로그인",
      icon: faGoogle,
    },
  ];
  return (
    <div className="py-2 space-y-2">
      {platformBtnInfos.map((d, i) => (
        <PlatformJoinBtn
          key={i}
          platform={d.platform}
          title={d.title}
          icon={d.icon}
        />
      ))}
    </div>
  );
};

export default PlatformJoinBtnBox;
