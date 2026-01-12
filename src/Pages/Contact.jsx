import React, { useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import MyContainer from "../Components/MyContainer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your message! I will contact you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-5 mb-10 bg-base-100">
      <MyContainer className="px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ruhulamin@email.com"
                    className="text-gray-600 hover:text-primary transition"
                  >
                    ruhulamin8203239@email.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+880123456789"
                    className="text-gray-600 hover:text-primary transition"
                  >
                    +880 1875 6633 24
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <a
                  href="https://wa.me/8801889403387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg h-fit hover:bg-primary/20 transition"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="text-primary" />
                </a>

                <a
                  href="https://wa.me/8801889403387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col"
                >
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-gray-600">Chat on WhatsApp</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-base-200 p-8 rounded-2xl border border-base-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Contact;
