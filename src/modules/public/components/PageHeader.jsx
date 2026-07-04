const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;