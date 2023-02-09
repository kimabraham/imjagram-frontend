import QuestionDiv from "components/Common/Auth/QuestionCard";
import LoginCard from "components/Accounts/Login/LoginForm/LoginCard";
import MainImg from "components/Home/MainImg";
import "styles/Home/index.css";

const Home = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-100px)]">
      <div className="flex space-x-1 mx-auto self-center">
        <MainImg />
        <div className="w-[350px] flex flex-col space-y-1">
          <LoginCard />
          <QuestionDiv
            question="계정이 없으신가요?"
            anwser="가입하기"
            link="/account/join"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
