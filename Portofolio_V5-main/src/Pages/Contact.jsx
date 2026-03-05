import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "../supabase";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Mengirim Pesan...",
      html: "Harap tunggu selagi kami mengirim pesan Anda",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const { data, error } = await supabase
        .from("contacts")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Anda telah berhasil terkirim!",
        icon: "success",
        confirmButtonColor: "#22c55e",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error.message);

      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan. Silakan coba lagi nanti.",
        icon: "error",
        confirmButtonColor: "#22c55e",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="min-h-screen bg-white px-[5%] sm:px-[5%] lg:px-[10%] py-20"
        id="Contact"
      >
        {/* Header Section - Green Theme */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "#22c55e",
              backgroundImage: "linear-gradient(45deg, #22c55e 10%, #4ade80 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hubungi Saya
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl">
          {/* Contact Form Card - Light Background */}
          <div
            className="bg-green-50 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-green-200/50 border border-green-200"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
                  Hubungi
                </h2>
                <p className="text-gray-700">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#22c55e] opacity-50" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white rounded-xl border border-green-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 transition-all duration-300 hover:border-[#22c55e]/50 disabled:opacity-50"
                  required
                />
              </div>

              {/* Email Input */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white rounded-xl border border-green-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 transition-all duration-300 hover:border-[#22c55e]/50 disabled:opacity-50"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-white rounded-xl border border-green-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 transition-all duration-300 hover:border-[#22c55e]/50 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-200/50 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
              <span className="text-gray-500 text-sm">atau hubungi saya melalui</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="500">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;