import { useNavigate } from "react-router-dom";

const LinkSpan = ({ content, link }: { content: string; link: string }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center pt-5">
      <span
        onClick={() => navigate(link)}
        className="text-xs font-semibold text-sky-800 hover:text-sky-600 cursor-pointer"
      >
        {content}
      </span>
    </div>
  );
};

export default LinkSpan;
