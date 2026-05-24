// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm mb-3">Let us connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="lg:col-span-2 relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 group"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
              <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
            </div>
            <h3 className="text-xl font-semibold text-primary transition-all duration-200 group-hover:text-secondary group-hover:scale-110 origin-left">Contact Details</h3>
            <p className="text-gray-300 mt-3">Feel free to reach out for internships, freelance work, or collaboration.</p>
            <div className="space-y-3 mt-6 text-gray-300">
              <p><span className="text-primary">Email:</span> sahilbulbule16@gmail.com</p>
              <p><span className="text-primary">Phone:</span> +91 9359790306</p>
              <p><span className="text-primary">Location:</span> Nagpur, India</p>
              <p><span className="text-primary">Response Time:</span> Usually within 24 hours</p>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary transition-colors text-white`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary transition-colors text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-green-500 font-semibold"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;