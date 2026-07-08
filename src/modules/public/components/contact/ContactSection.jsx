import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactMap,
  ContactFAQ,
} from ".";

const ContactSection = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      <ContactHero />

      <section className="py-20">
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