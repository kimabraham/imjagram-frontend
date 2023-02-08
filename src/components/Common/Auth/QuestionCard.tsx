import { useNavigate } from "react-router-dom";

const QuestionCard = ({
  question,
  anwser,
  link,
}: {
  question: string;
  anwser: string;
  link: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="border-[1px] bg-white border-neutral-300 p-5 flex justify-center space-x-2">
      <span className="font-extralight text-sm">{question}</span>
      <span
        className="text-sm font-semibold text-sky-800 hover:text-sky-600 cursor-pointer hover:underline"
        onClick={() => navigate(link)}
      >
        {anwser}
      </span>
    </div>
  );
};

export default QuestionCard;
