interface SectionTitleProps {
  intro: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ intro, title, description }: SectionTitleProps) => {

  return (
    <div className=" w-full text-center pb-10">
      <p
        data-aos="fade-down"
        data-aos-anchor-placement="center-center"
        className="text-xl lg:text-2xl text-[#242424] dark:text-white "
      >
        {intro}
      </p>

      <h1
        data-aos="fade-up-right"
        data-aos-anchor-placement="center-center"
        className="text-4xl lg:text-6xl font-bold text-[#242424] dark:text-white pt-3 pb-6 "
      >
        {title}
      </h1>
      {description && (
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="text-sm lg:text-lg text-[#565656] dark:text-[#c9c5c5] max-w-[700px] mx-auto text-center pb-6 "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
