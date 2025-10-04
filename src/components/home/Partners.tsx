const Partners = () => {
  const partners = [
    "African Union",
    "World Bank",
    "UNDP",
    "African Development Bank",
    "Government of Kenya",
    "Government of Ghana",
    "Government of Nigeria",
    "Government of Rwanda",
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with governments and institutions across Africa to develop exceptional public sector leaders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 flex items-center justify-center text-center shadow hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-foreground">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
