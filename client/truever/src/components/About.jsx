import {Link} from 'react-router-dom'
function About() {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-6">
          We are a passionate team dedicated to delivering high-quality services to our clients, empowering them to achieve more.
        </p>
        <div className="text-center">
          <Link to="/about" className="text-blue-600 hover:underline font-semibold">
            Learn More →
          </Link>
        </div>
      </section>
    );
  }
  
  export default About;
  