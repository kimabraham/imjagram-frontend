import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

const LoginErrHeader = () => {
  return (
    <div className="text-center py-2">
      <FontAwesomeIcon
        icon={faUserLock}
        className="text-neutral-700 text-7xl py-2"
      />
      <h1 className="p-2 text-lg font-semibold text-neutral-700">
        로그인에 문제가 있나요?
      </h1>
      <p className="text-xs text-neutral-500 py-2 leading-5">
        이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할
        수 있는 링크를 보내드립니다.
      </p>
    </div>
  );
};

export default LoginErrHeader;
