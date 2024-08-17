// import React from 'react'
// import notes from "../assets/notes.jpg";
import { Link } from "react-router-dom";
import easytouse from "../assets/easytouse.png";
import cloudsync from "../assets/cloudSync.png";
import textediting from "../assets/textediting.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-10">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-hero-image text-black text-center pt-36 pb-18">
        <h1 className="text-5xl font-bold mb-4">
          Capture Ideas Anytime, Anywhere
        </h1>
        <p className="text-xl mb-8">
          Your ultimate tool for organized thoughts and seamless collaboration.
        </p>
        <button className="bg-[#f58d76] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/signup">Start Now</Link>
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-around">
            <div className="feature text-center p-4 max-w-xs">
              <img src={easytouse} alt="Easy to Use" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>
                Intuitive design that lets you start capturing ideas
                immediately.
              </p>
            </div>
            <div className="feature text-center p-4 max-w-xs">
              <img src={cloudsync} alt="Cloud Sync" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Sync</h3>
              <p>
                Your notes are accessible from any device, always up-to-date.
              </p>
            </div>
            <div className="feature text-center p-4 max-w-xs">
              <img
                src={textediting}
                alt="Rich Text Editing"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Rich Text Editing</h3>
              <p>
                Format your notes with advanced editing tools for clear
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Hear From Our Happy Users</h2>
        <div className="container mx-auto px-6">
          <div className="testimonial max-w-xl mx-auto mb-6">
            <p className="italic">
              This app has transformed how I manage my tasks and ideas! –{" "}
              <strong>Atul kashyap</strong>
            </p>
          </div>
          <div className="testimonial max-w-xl mx-auto mb-6">
            <p className="italic">
              I can’t imagine my life without this intuitive tool. –{" "}
              <strong>Anish kumar</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f5ae9e] text-black text-center py-32">
        <h2 className="text-3xl font-bold mb-4">
          Join Thousands of Satisfied Users
        </h2>
        <p className="mb-8">
          Sign up today and revolutionize your note-taking experience.
        </p>

        <button className=" bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded">
          <Link to="/signup">Sign Up Now</Link>
        </button>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-wrap justify-around">
          {/* About Us Section */}
          <div className="section max-w-md mb-8">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>

            <p>
              Our mission is to provide a powerful yet simple tool to help you
              organize your thoughts and collaborate seamlessly. We believe in
              making productivity accessible to everyone.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="section max-w-md mb-8">
            <h3 className="text-2xl font-bold mb-4">FAQ</h3>
            <p>
              Find answers to common questions about our app features and how to
              make the most out of your note-taking experience.
            </p>
          </div>

          {/* Blog Section */}
          <div className="section max-w-md mb-8">
            <h3 className="text-2xl font-bold mb-4">Blog</h3>
            <p>
              We are currently working on a blog to share our latest updates and
              insights with our users. Stay tuned for more exciting content!
            </p>
          </div>

          {/* Contact Section */}
          <div className="section max-w-md mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p>
              Need help or have questions? Reach out to our friendly customer
              support team{" "}
              <b>
                {" "}
                <i>+917992233578</i>{" "}
              </b>
              , and we’ll be happy to assist you.
            </p>
            <div className="social-media flex justify-center space-x-6 mt-4">
              <a
                href="https://x.com/AtulKas70198872"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://github.com/1234atulkashyap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-kr-kashyap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 NoteTakingApp. All rights reserved. Atul kumar kashyap</p>
      </footer>
    </div>
  );
};

export default Hero;
