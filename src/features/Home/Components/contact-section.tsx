"use client";

import { useState } from "react";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import { sendContactForm } from "../../../lib/api";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const {toast} = useToast();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const newErrors = {
      name: name ? "" : "Name is required",
      email: email ? "" : "Email is required",
      subject: subject ? "" : "Subject is required",
      message: message ? "" : "Message is required",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    try {
      const res = await sendContactForm({ name, email, subject, message });
      toast({
        variant: "success",
        title: "Success",
        description: res.message,
      })
      if (res.success) {
        form.reset();
        setErrors({ name: "", email: "", subject: "", message: "" }); 
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message.",
      })
    }
  };

  return (
    <div>
      <SectionTitle
        intro="Connect with me"
        title="Get in touch"
        description="I'd love to hear from you! If you have any questions, comments or feedback, please use the form below."
      />

      <div className="max-w-5xl mx-auto text-center space-y-6 pb-4">
        <form className="space-y-11" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-left">
              <Input
                data-aos="fade-right"
                data-aos-delay="100"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="text-left">
              <Input
                data-aos="fade-left"
                data-aos-delay="200"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="text-left">
            <Input
              data-aos="fade-right"
              data-aos-delay="100"
              type="text"
              name="subject"
              placeholder="Enter Subjects Here!"
              className="border"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="text-left">
            <Textarea
              data-aos="fade-up"
              data-aos-delay="300"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 bg-white border rounded-lg outline-none h-56 resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <Button
            data-aos="fade-down"
            data-aos-delay="400"
            type="submit"
            className=""
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
