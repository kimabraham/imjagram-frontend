const MainImg = () => {
  const randomNumber = Math.ceil(Math.random() * 10);

  return (
    <div className="md:block hidden">
      <img
        src={`/images/main/main${randomNumber}.jpg`}
        alt="mainImage"
        className="w-[300px] brightness-125"
      />
    </div>
  );
};

export default MainImg;
