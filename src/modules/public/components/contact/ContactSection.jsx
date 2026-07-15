import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactMap,
  ContactFAQ,
} from ".";

const ContactSection = () => {
  return (
    <main className="bg-slate-950 relative z-0"> 
      <ContactHero />

      {/* Info + Form Section */}
      <section className="relative z-10 py-20"> {/* z-10 add kiya */}
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactMap />
      <ContactFAQ />
    </main>
  );
};

export default ContactSection;