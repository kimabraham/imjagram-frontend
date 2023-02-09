import axios from "axios";
import AuthBtn from "components/Common/Auth/AuthBtn";
import AuthInput from "components/Common/Auth/AuthInput";
import { useState } from "react";

const JoinInputBox = () => {
  type VALUE = {
    id: string;
    password: string;
    name: string;
    username: string;
  };

  const [values, setValues] = useState<VALUE>({
    id: "",
    password: "",
    name: "",
    username: "",
  });

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const {
      currentTarget: { name, value },
    } = e;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:4000/auth`, values);
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        label="휴대폰 번호 또는 이메일 주소"
        type="text"
        name="id"
        onChange={handleChange}
      />
      <AuthInput label="성명" type="text" name="name" onChange={handleChange} />
      <AuthInput
        label="사용자 이름"
        type="text"
        name="username"
        onChange={handleChange}
      />
      <AuthInput
        label="비밀번호"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <div className="py-4">
        <p className="text-center text-xs leading-snug text-neutral-400">
          저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Imjagram에
          업로드했을 수도 있습니다.
          <span className="px-1 text-sky-500 hover:text-sky-600 hover:underline cursor-pointer">
            더 알아보기
          </span>
        </p>
      </div>
      <AuthBtn title="가입" />
    </form>
  );
};

export default JoinInputBox;
