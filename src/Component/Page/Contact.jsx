import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Header from './Header';

function Contact() {
  return (
    <>
      <Header />

    <section
      id="contact"
      className="bg-pink-200 text-purple-800 px-6 py-20 min-h-screen flex flex-col items-center"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-10">
          I'd love to hear about your project or collaboration idea. Reach out through the form below or connect with me directly.
        </p>
      </div>

      <form
        action="mailto:nwabethroseonuoha@gmail.com"
        method="GET"
        className="w-full max-w-xl space-y-6 bg-purple-50 p-8 rounded-lg shadow"
      >
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-4 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="body"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center space-x-6 text-purple-600">
        <a
          href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 hover:text-purple-900 transition"
        >
          <FaInstagram />
          <span>Betty-Empire</span>
        </a>
        <a
          href="mailto:nwabethroseonuoha@gmail.com"
          className="inline-flex items-center space-x-2 hover:text-purple-900 transition"
        >
          <FaEnvelope />
          <span>nwabethroseonuoha@gmail.com</span>
        </a>
      </div>
    </section>
    </>
  );
}

export default Contact;
