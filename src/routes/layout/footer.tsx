const Footer = () => {
  return (
    <footer className="w-full flex flex-col space-y-5 fixed bottom-0 p-4">
      <div className="p-2">
        <ul className="flex justify-center font-thin text-xs text-neutral-400 text-center">
          <li className="px-4">소개</li>
          <li className="px-4">도움말</li>
          <li className="px-4">개인정보처리방침</li>
          <li className="px-4">약관</li>
          <li className="px-4">위치</li>
        </ul>
      </div>
      <div className="w-full text-center text-xs text-neutral-500 font-sans tracking-widest	">
        © 2023 IMJAgram from KR
      </div>
    </footer>
  );
};

export default Footer;
