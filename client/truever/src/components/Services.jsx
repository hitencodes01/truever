function Services() {
    return (
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Service One</h3>
            <p>Brief about what you offer in Service One.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Service Two</h3>
            <p>Brief about what you offer in Service Two.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Service Three</h3>
            <p>Brief about what you offer in Service Three.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  