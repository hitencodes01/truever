function Gallery() {
    return (
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
        </div>
      </section>
    );
  }
  
  export default Gallery;
  