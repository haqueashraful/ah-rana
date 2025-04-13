import AboutSection from "@/features/Home/Components/about-section";
import CertificateSection from "@/features/Home/Components/certificate-section";

function page() {
    return (
        <div className="container-rn space-y-28">
            <div className="">
               <AboutSection />
            </div>
            <div>
               <CertificateSection />
            </div>
        </div>
    );
}

export default page;