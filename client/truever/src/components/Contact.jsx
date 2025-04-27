import {Link} from 'react-router-dom'
function Contact() {
    return (
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
        <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </Link>
      </section>
    );
  }
  
  export default Contact;
  