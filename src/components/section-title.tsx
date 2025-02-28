interface SectionTitleProps {
  intro: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ intro, title, description }: SectionTitleProps) => {
  return (
    <div className=" w-full text-center pb-10">
      <p className="text-xl lg:text-2xl text-[#242424] dark:text-white">{intro}</p>

      <h1 className="text-4xl lg:text-6xl font-bold text-[#242424] dark:text-white pt-3 pb-6">{title}</h1>
      {description && (
        <p className="text-sm lg:text-lg text-[#565656] dark:text-[#c9c5c5]  max-w-[700px] mx-auto text-center pb-6">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
