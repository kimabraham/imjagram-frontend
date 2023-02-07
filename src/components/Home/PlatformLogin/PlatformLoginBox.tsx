import PlatformLoginBtn from "./PlatformLoginBtn";

const PlatformLoginBox = () => {
  const platformLoginInfo = [
    {
      src: "/images/kakaoBtn/kakaotalk_sharing_btn_medium.png",
      alt: "kakaotalk_login_btn_img",
      title: "KakaoTalk으로 로그인",
    },
    {
      src: "/images/kakaoBtn/facebook_original_logo_icon_146526.png",
      alt: "facebook_login_btn_img",
      title: "Facebook으로 로그인",
    },
    {
      src: "/images/kakaoBtn/google_icon-icons.com_62736.png",
      alt: "google_login_btn_img",
      title: "Google으로 로그인",
    },
  ];

  return (
    <div className="flex flex-col space-y-3">
      {platformLoginInfo.map((d, i) => (
        <PlatformLoginBtn key={i} src={d.src} alt={d.alt} title={d.title} />
      ))}
    </div>
  );
};

export default PlatformLoginBox;
