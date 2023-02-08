import { useState } from "react";
import "styles/Home/index.css";

type PROPS = {
  label: string;
  type: "text" | "password";
  name: string;
  onChange: Function;
};

const AuthInput = ({ label, type, name, onChange }: PROPS) => {
  const [isPassword, setIsPassword] = useState(type === "password");

  return (
    <div className="relative z-0 my-1 bg-neutral-100">
      <input
        type={type === "password" ? (isPassword ? "password" : "text") : type}
        className="block pt-[1.2rem] pb-[0.2rem] px-2 w-full text-xs bg-transparent  peer border-[1px] border-neutral-300 text-neutral-800 tracking-wider placeholder-shown:py-[0.7rem] rounded-md focus:border-neutral-400"
        placeholder={" "}
        name={name}
        onChange={(e) => onChange(e)}
      />
      <label
        className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-5 scale-75 top-1/2 -z-10 origin-[0] px-2
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2"
      >
        {label}
      </label>
      {type === "password" && (
        <span
          className="peer-placeholder-shown:hidden absolute top-1/2 -translate-y-1/2 right-0 px-2 text-neutral-700 text-sm font-light cursor-pointer hover:text-neutral-400"
          onClick={() => setIsPassword(!isPassword)}
        >
          {isPassword ? "비밀번호 표시" : "숨기기"}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
