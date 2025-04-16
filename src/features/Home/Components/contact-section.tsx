"use client";

import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <SectionTitle
        intro="Connect with me"
        title="Get in touch"
        description="I'd love to hear from you! If you have any questions, comments or feedback, please use the form below."
      />

      <div className="max-w-5xl mx-auto text-center space-y-6">
        <form className="space-y-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              data-aos="fade-right"
              data-aos-delay="100"
              type="text"
              placeholder="Enter your name"
              className="border "
              // className="w-full p-3 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
            <Input
              data-aos="fade-left"
              data-aos-delay="200"
              type="email"
              placeholder="Enter your email"
              className="border "
              // className="w-full p-3 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <Textarea
            data-aos="fade-up"
            data-aos-delay="300"
            placeholder="Enter your message"
            className="w-full p-3 bg-white border rounded-lg outline-none h-56 resize-none "
          />

          <Button
            data-aos="fade-down"
            data-aos-delay="400"
            type="submit"
            className=" "
          >
            Submit now
            <span className="ml-2">
              <ChevronRight />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactSection;
