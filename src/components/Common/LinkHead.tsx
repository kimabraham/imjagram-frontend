import { useNavigate } from "react-router-dom";

const LinkHead = ({ content, link }: { content: string; link: string }) => {
  const navigate = useNavigate();
  return (
    <span
      className="p-2 text-sm font-semibold text-neutral-700 cursor-pointer"
      onClick={() => navigate(link)}
    >
      {content}
    </span>
  );
};

export default LinkHead;
