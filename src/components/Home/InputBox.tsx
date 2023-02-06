import "styles/Home/index.css";

const InputBox = ({
  label,
  type,
}: {
  label: string;
  type: "text" | "password";
}) => {
  return (
    <div className="relative group">
      <input
        type={type}
        className="w-full absolute left-0 pt-6 px-4 pb-2 bg-neutral-100 text-sm rounded-lg border-neutral-200 border-[1px] focus:border-neutral-400"
      />
      <label>
        <span
          className="z-50 text-sm pt-1 px-2 text-neutral-400 group-focus-within:text-xs 
        group-focus-within:absolute 
        group-focus-within:flex"
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default InputBox;
