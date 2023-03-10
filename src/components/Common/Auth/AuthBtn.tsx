const AuthBtn = ({ title }: { title: string }) => {
  return (
    <div className="my-1">
      <button
        type="submit"
        className="w-full p-1.5 bg-sky-500 text-sm text-white font-semibold rounded-lg hover:bg-sky-600 hover:font-bold"
      >
        {title}
      </button>
    </div>
  );
};

export default AuthBtn;
