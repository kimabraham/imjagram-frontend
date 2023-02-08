const PlatformLoginBtn = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="flex justify-center">
      <div className="w-[176px] flex justify-start space-x-2">
        <button>
          <img src={src} alt={alt} className="w-4" />
        </button>
        <span className="font-extralight text-sm tracking-wide cursor-pointer hover:underline text-neutral-700">
          {title}
        </span>
      </div>
    </div>
  );
};

export default PlatformLoginBtn;
