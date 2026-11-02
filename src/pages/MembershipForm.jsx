import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import halftone from "../assets/halfton.png";

// Web3Forms access keys are meant to be public, but you can lock it to your domain in the Web3Forms dashboard.
const WEB3FORMS_KEY = "61482964-0b73-401d-92d0-a104ccf9f74b";

const EDUCATION = [
  { value: "School", label: "School", ne: "स्कूल" },
  { value: "College", label: "College", ne: "कलेज" },
  { value: "University", label: "University", ne: "विश्वविद्यालय" },
  { value: "Other", label: "Other", ne: "अन्य" },
];

const ORG_TYPES = [
  { value: "Civil Society", label: "Civil Society", ne: "नागरिक समाज" },
  { value: "Government", label: "Government", ne: "सरकारी निकाय" },
  { value: "Private Organization", label: "Private Organization", ne: "निजी संस्था" },
  { value: "International Organization", label: "International Organization", ne: "अन्तर्राष्ट्रिय निकाय" },
  { value: "University", label: "University", ne: "विश्वविद्यालय" },
];

const initialValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  contribution: "",
  education: "",
  educationOther: "",
  province: "",
  district: "",
  municipality: "",
  ward: "",
  house: "",
  area: "",
  expertise: "",
  orgName: "",
  orgType: "",
  orgAddress: "",
  orgProvince: "",
};

// English label (used as the key in the email you receive)
const EMAIL_LABELS = {
  name: "Name",
  surname: "Surname",
  phone: "Phone number",
  email: "Email address",
  contribution: "Contribution amount (Rs.)",
  education: "Education",
  province: "Province",
  district: "District",
  municipality: "Municipality",
  ward: "Ward number",
  house: "House number",
  area: "Area of engagement",
  expertise: "Field of expertise",
  orgName: "Name of organization",
  orgType: "Type of organization",
  orgAddress: "Address of organization",
  orgProvince: "Organization province",
};

const validate = (v) => {
  const e = {};
  const req = (key) => {
    if (!v[key].trim()) e[key] = "This field is required · यो फिल्ड आवश्यक छ";
  };

  ["name", "surname", "province", "district", "municipality", "ward", "area", "expertise"].forEach(req);

  if (!v.phone.trim()) req("phone");
  else if (!/^\+?[\d\s-]{7,15}$/.test(v.phone.trim()))
    e.phone = "Enter a valid phone number · मान्य फोन नम्बर लेख्नुहोस्";

  if (!v.email.trim()) req("email");
  else if (!/^\S+@\S+\.\S+$/.test(v.email.trim()))
    e.email = "Enter a valid email · मान्य इमेल लेख्नुहोस्";

  if (v.contribution.trim() && Number(v.contribution) < 200)
    e.contribution = "Minimum Rs. 200 · न्यूनतम रू. २००";

  if (!v.education) e.education = "Please choose one · कृपया एउटा छान्नुहोस्";
  else if (v.education === "Other" && !v.educationOther.trim())
    e.educationOther = "Please specify · कृपया उल्लेख गर्नुहोस्";

  if (!v.orgType) e.orgType = "Please choose one · कृपया एउटा छान्नुहोस्";

  return e;
};

/* ---------- small building blocks ---------- */

const inputClass = (hasError) =>
  `w-full rounded-md border bg-white/70 px-3 py-2.5 text-base outline-none transition-colors focus:border-(--royal-purple) focus:ring-2 focus:ring-(--royal-purple)/20 ${
    hasError ? "border-red-600" : "border-(--royal-purple)/30"
  }`;

const Label = ({ htmlFor, en, ne, required, as: Tag = "label" }) => (
  <Tag htmlFor={Tag === "label" ? htmlFor : undefined} className="block text-sm font-semibold text-neutral-900">
    {en} <span className="font-medium text-neutral-700">({ne})</span>
    {required && <span className="ml-0.5 text-red-600" aria-hidden="true">*</span>}
  </Tag>
);

const ErrorText = ({ id, message }) =>
  message ? (
    <p id={id} className="mt-1 text-sm text-red-700">
      {message}
    </p>
  ) : null;

const TextField = ({ id, en, ne, required, type = "text", value, error, onChange, className = "", ...rest }) => (
  <div className={className}>
    <Label htmlFor={id} en={en} ne={ne} required={required} />
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      aria-required={required || undefined}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${inputClass(!!error)} mt-1.5`}
      {...rest}
    />
    <ErrorText id={`${id}-error`} message={error} />
  </div>
);

const RadioGroup = ({ name, en, ne, required, options, value, error, onChange, children }) => (
  <fieldset
    aria-required={required || undefined}
    aria-describedby={error ? `${name}-error` : undefined}
    className="sm:col-span-2"
  >
    <legend>
      <Label as="span" en={en} ne={ne} required={required} />
    </legend>
    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.value}
          className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${
            value === o.value
              ? "border-(--royal-purple) bg-(--royal-purple)/10"
              : "border-(--royal-purple)/30 bg-white/70 hover:bg-white"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={onChange}
            className="h-4 w-4 accent-(--royal-purple)"
          />
          <span>
            {o.label} <span className="text-neutral-700">({o.ne})</span>
          </span>
        </label>
      ))}
    </div>
    {children}
    <ErrorText id={`${name}-error`} message={error} />
  </fieldset>
);

const Section = ({ title, ne, children }) => (
  <div className="flex flex-col gap-5">
    <h3 className="border-b border-(--royal-purple)/20 pb-2 text-lg font-bold uppercase text-(--royal-purple)">
      {title} <span className="normal-case">({ne})</span>
    </h3>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
  </div>
);

/* ---------- main component ---------- */

const MembershipForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // jump to the first field with an error
      const first = Object.keys(found)[0];
      document.getElementsByName(first)[0]?.focus();
      return;
    }

    setStatus("submitting");

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "New IGFF membership form submission",
      from_name: "IGFF Website",
      botcheck: "", // honeypot, leave empty
    };
    Object.entries(EMAIL_LABELS).forEach(([key, label]) => {
      payload[label] =
        key === "education" && values.education === "Other"
          ? `Other: ${values.educationOther.trim()}`
          : values[key].trim?.() ?? values[key];
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setValues(initialValues);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const f = (id) => ({ id, value: values[id], error: errors[id], onChange: handleChange });

  if (status === "success") {
    return (
      <section className="bg-(--background) py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-lg bg-white/60 px-6 py-12 text-center">
            <CheckCircle2 size={56} className="text-(--forest-green)" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-(--royal-purple)">
              Thank you! (धन्यवाद!)
            </h2>
            <p className="text-neutral-800">
              Your membership form has been submitted successfully.
              <br />
              तपाईंको सदस्यता फारम सफलतापूर्वक पेश भएको छ।
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden relative pt-12 md:pt-20">
      <div className="bg-(--background) pb-12 md:pb-20">
      {/* Heading banner with V-shaped bottom */}
      <header
        className="relative bg-(--royal-purple) text-center py-20 
                   [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
      >
         <img
                       src={halftone}
                       alt=""
                       aria-hidden="true"
                       className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                       style={{ opacity: 0.02 }}
                     />
        <div className="mx-auto flex max-w-4xl flex-col gap-3">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Inter-Generational Feminist Forum Membership Form
          </h2>
          <p className="text-lg font-semibold md:text-xl text-(--amber-gold)">
            अन्तरपुस्ता महिलाबादी समूह सदस्यता फारम
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {/* Commitments */}
          <div className="grid gap-4 rounded-lg border border-(--royal-purple)/20 bg-white/60 p-5 text-sm leading-relaxed text-neutral-900 sm:grid-cols-2 sm:p-6">
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
              <li>I commit to the Feminist Position Paper.</li>
              <li>I commit to give my time &amp; expertise to the cause.</li>
              <li>
                I commit to implement the Feminist Position Paper &amp; Charter of Demands related to
                Covid-19.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
              <li>म महिलावादी अवधारणा पत्र प्रति प्रतिबद्ध छु ।</li>
              <li>म आफ्नो समय-विज्ञता प्रदान गर्न कतिबद्ध छु ।</li>
              <li>
                म महिलावादी अवधारणापत्र, कोभिडका सन्दर्भमा तयार गरिएको साझा माग पत्र कार्यान्वयनमा प्रतिबद्ध छु ।
              </li>
            </ul>
          </div>

          <p className="text-sm text-neutral-700">
            <span className="text-red-600">*</span> Indicates required question (आवश्यक प्रश्न)
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
            {/* Honeypot for spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <Section title="Personal details" ne="व्यक्तिगत विवरण">
              <TextField {...f("name")} en="Name" ne="नाम" required autoComplete="given-name" />
              <TextField {...f("surname")} en="Surname" ne="थर" required autoComplete="family-name" />
              <TextField
                {...f("phone")}
                en="Phone number"
                ne="सम्पर्क नम्बर"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
              />
              <TextField
                {...f("email")}
                en="Email Address"
                ne="इमेल ठेगाना"
                required
                type="email"
                autoComplete="email"
              />
              <TextField
                {...f("contribution")}
                className="sm:col-span-2"
                en="Contribution Amount / Minimum Rs. 200"
                ne="सहयोग रकम / न्यूनतम रू. २००"
                type="number"
                inputMode="numeric"
                min="200"
              />
              <RadioGroup
                name="education"
                en="Education"
                ne="शिक्षा"
                required
                options={EDUCATION}
                value={values.education}
                error={errors.education}
                onChange={handleChange}
              >
                {values.education === "Other" && (
                  <div className="mt-3">
                    <input
                      name="educationOther"
                      value={values.educationOther}
                      onChange={handleChange}
                      placeholder="Please specify · कृपया उल्लेख गर्नुहोस्"
                      aria-label="Other education"
                      aria-invalid={!!errors.educationOther}
                      className={inputClass(!!errors.educationOther)}
                    />
                    <ErrorText id="educationOther-error" message={errors.educationOther} />
                  </div>
                )}
              </RadioGroup>
            </Section>

            <Section title="Address" ne="ठेगाना">
              <TextField {...f("province")} en="Province" ne="प्रदेश" required />
              <TextField {...f("district")} en="District" ne="जिल्ला" required />
              <TextField {...f("municipality")} en="Municipality" ne="पालिका" required />
              <TextField {...f("ward")} en="Ward Number" ne="वडा नम्बर" required inputMode="numeric" />
              <TextField {...f("house")} className="sm:col-span-2" en="House Number" ne="घर नम्बर" />
            </Section>

            <Section title="Work & organization" ne="कार्य र संस्था">
              <TextField {...f("area")} en="Area of Engagement" ne="कार्यक्षेत्र" required />
              <TextField {...f("expertise")} en="Field of Expertise" ne="विशेषज्ञता" required />
              <TextField
                {...f("orgName")}
                className="sm:col-span-2"
                en="Name of Organization / if applicable"
                ne="संस्थाको नाम / भएमा"
              />
              <RadioGroup
                name="orgType"
                en="Type of Organization"
                ne="संस्थाको प्रकार"
                required
                options={ORG_TYPES}
                value={values.orgType}
                error={errors.orgType}
                onChange={handleChange}
              />
              <TextField {...f("orgAddress")} en="Address of Organization" ne="संस्थाको ठेगाना" />
              <TextField {...f("orgProvince")} en="Province" ne="प्रदेश" />
            </Section>

            {/* Status + actions */}
            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800"
              >
                <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>
                  Something went wrong while submitting. Please check your connection and try again.
                  <br />
                  फारम पेश गर्न सकिएन। कृपया इन्टरनेट जाँच गरेर फेरि प्रयास गर्नुहोस्।
                </p>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  setValues(initialValues);
                  setErrors({});
                  setStatus("idle");
                }}
                disabled={status === "submitting"}
                className="rounded-md border border-(--royal-purple)/40 px-6 py-3 text-sm font-semibold text-(--royal-purple) hover:bg-(--royal-purple) disabled:opacity-50 hover:text-white cursor-pointer"
              >
                Clear form · फारम खाली गर्नुहोस्
              </button>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 text-sm font-semibold text-white transition-colors bg-(--royal-purple) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--royal-purple) disabled:opacity-70 hover:bg-transparent hover:text-(--royal-purple) hover:border hover:border-(--royal-purple) cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    Submitting… · पेश गर्दै…
                  </>
                ) : (
                  "Submit · पेश गर्नुहोस्"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MembershipForm;