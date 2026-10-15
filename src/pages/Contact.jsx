import image1 from "../assets/homememberimg.jpg";
import halftone from "../assets/halfton.png";
import { useState } from "react";
import { MapPinHouse, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const WEB3FORMS_ACCESS_KEY = "61482964-0b73-401d-92d0-a104ccf9f74b";

const inputClass =
  "w-full rounded-lg bg-[#f8f9fb] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white/60 transition";

const labelClass =
  "mb-2 block text-[11px] font-bold uppercase tracking-wide text-white";

// Map icon names (from translation data) → lucide components
const ICON_MAP = {
  address: MapPinHouse,
  phone: Phone,
  email: Mail,
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from website contact form");
    formData.append("from_name", "Website Contact Form");

    setStatus({ type: "loading", message: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: t.status.success,
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || t.status.errorGeneric,
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: t.status.networkError,
      });
    }
  };

  const loading = status.type === "loading";

  return (
    <div className="overflow-hidden relative pt-20">
      <div className="bg-(--background)">
        <div
          className="relative bg-(--forest-green) py-20
                     [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
        >
          {/* Halftone texture overlay */}
          <img
            src={halftone}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: 0.02 }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="md:text-5xl text-3xl text-center font-bold text-white">
                {t.heading}
              </h1>
              <div className="flex justify-center items-center">
                <p className="max-w-xl md:text-base text-sm text-white text-center">
                  {t.subheading}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex md:justify-between flex-wrap mb-10">
            <div className="flex flex-col gap-2">
              <h3 className="md:text-3xl text-2xl text-(--forest-green) font-bold">
                {t.startHeading}
              </h3>
              <span
                style={{ fontFamily: "Inter" }}
                className="text-(--royal-purple) font-medium uppercase md:text-3xl text-2xl"
              >
                {t.startSubheading}
              </span>
            </div>
            <p className="max-w-sm md:text-base tet-sm">{t.startBody}</p>
          </div>

          <section className="mb-10">
            <div className="mx-auto grid max-w-7xl px-6 md:px-10 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)]">
              {/* Left image */}
              <div className="h-64 overflow-hidden rounded-xl sm:h-80 lg:h-auto lg:min-h-[560px]">
                <img
                  src={image1}
                  alt="Anupam Abhiyan flag"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right form */}
              <div className="rounded-xl bg-(--forest-green) px-5 py-8 sm:px-8 md:px-10 lg:px-12">
                <h2 className="mb-8 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {t.formHeading}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot spam protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        {t.labels.name}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder={t.placeholders.name}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        {t.labels.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t.placeholders.email}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className={labelClass}>
                      {t.labels.topic}
                    </label>
                    <input
                      id="topic"
                      type="text"
                      name="topic"
                      required
                      placeholder={t.placeholders.topic}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      {t.labels.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[220px] text-xs leading-snug text-white/60">
                      {t.privacyNote}
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-(--royal-purple) px-8 py-4 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[228px]"
                    >
                      {loading ? t.buttons.sending : t.buttons.send}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M22 2 11 13" />
                        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
                      </svg>
                    </button>
                  </div>

                  {status.type === "success" && (
                    <p
                      role="status"
                      className="rounded-md bg-white/15 px-4 py-3 text-sm text-white"
                    >
                      {status.message}
                    </p>
                  )}
                  {status.type === "error" && (
                    <p
                      role="alert"
                      className="rounded-md bg-red-100 px-4 py-3 text-sm text-red-800"
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {t.contactDetails.map((d) => {
                const Icon = ICON_MAP[d.icon] || MapPinHouse;

                return (
                  <div key={d.title} className="rounded-2xl bg-white px-4 py-5">
                    <div className="flex flex-col gap-3">
                      <span className="w-fit rounded-md bg-gray-200 p-2">
                        <Icon
                          className="h-5 w-5 text-(--forest-green)"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="w-full border-t-2 border-dotted border-gray-400" />
                      <h5 className="text-2xl font-bold">{d.title}</h5>
                      <span className="text-gray-700">{d.des}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;