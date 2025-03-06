import SectionTitle from "@/components/section-title";
import Image from "next/image";

import certificate_one from "@/assets/certificate-one.png";
import certificate_two from "@/assets/certificate-two.png";
import certificate_three from "@/assets/certificate-three.png";

const CertificateSection = () => {
  return (
    <div className="">
      <SectionTitle intro="Certificates" title="My Certificates" description="There are some prove of my learning, skills and experience."/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={500}
            height={500}
            src={certificate_one}
            alt="certificate-1"
          />
          <h3 className="text-lg font-semibold pt-4">
            Web Development Certificate
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            width={500}
            height={500}
            src={certificate_two}
            alt="certificate-1"
          />
          <h3 className="text-lg font-semibold pt-4">Internship Certificate</h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            width={500}
            height={500}
            src={certificate_three}
            alt="certificate-1"
          />
          <h3 className="text-lg font-semibold pt-4">
            Communication Skills Certificate
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
