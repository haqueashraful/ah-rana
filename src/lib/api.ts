// lib/api.ts

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactForm = async (data: ContactFormData) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to send message.");
  }
  return res.json();
};
