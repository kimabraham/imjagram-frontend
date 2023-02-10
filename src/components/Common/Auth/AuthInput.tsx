import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "styles/Home/index.css";

type PROPS = {
  label: string;
  type: "text" | "password";
  name: string;
  err: Function;
  onChange: Function;
  onBlur: Function;
};

const AuthInput = ({ label, type, name, err, onBlur, onChange }: PROPS) => {
  console.log(err);

  const [isPassword, setIsPassword] = useState(type === "password");

  return (
    <div className="relative z-0 my-1 bg-neutral-100">
      <input
        type={type === "password" ? (isPassword ? "password" : "text") : type}
        className="block pt-[1.2rem] pb-[0.2rem] px-2 w-full text-xs bg-transparent  peer border-[1px] border-neutral-300 text-neutral-800 tracking-wider placeholder-shown:py-[0.7rem] rounded-md focus:border-neutral-400"
        placeholder={" "}
        name={name}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
        autoComplete="new-password"
      />
      <label
        className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-5 scale-75 top-1/2 -z-10 origin-[0] px-2
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2"
      >
        {label}
      </label>

      {name === "password" ? (
        <div className="absolute top-1/2 -translate-y-1/2 right-2 flex justify-center space-x-1 peer-placeholder-shown:hidden">
          {err ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-xl text-red-500 peer-focus:hidden"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-xl text-neutral-500 peer-focus:hidden"
            />
          )}
          <span
            className="text-neutral-700 text-sm font-light cursor-pointer hover:text-neutral-400"
            onClick={() => setIsPassword(!isPassword)}
          >
            {isPassword ? "비밀번호 표시" : "숨기기"}
          </span>
        </div>
      ) : (
        <>
          {err ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-1/2 right-2 text-xl -translate-y-1/2 text-red-500 peer-focus:hidden peer-placeholder-shown:hidden"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="absolute top-1/2 right-2 text-xl -translate-y-1/2 text-neutral-500 peer-focus:hidden peer-placeholder-shown:hidden"
            />
          )}
        </>
      )}
    </div>
  );
};

export default AuthInput;
