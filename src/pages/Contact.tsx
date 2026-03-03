import React, { FC } from "react";

const 5 = [];


const Contact: React.FC = () => {
  return (
    
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-12 px-4" style={{ backgroundColor: 'var(--c-bg)' }}>
        <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--c-fg)' }}>Contact Us</h1>
        <p className="text-lg mb-8 text-center max-w-2xl" style={{ color: 'var(--c-muted-fg)' }}>
          Have questions, feedback, or just want to say hello? Reach out to us using the form below, or send us an email.
        </p>
        <form className="w-full max-w-lg p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--c-surface)' }}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-fg)' }}>Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-md border" style={{ borderColor: 'var(--c-border)', backgroundColor: 'var(--c-input-bg)', color: 'var(--c-fg)' }}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-fg)' }}>Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md border" style={{ borderColor: 'var(--c-border)', backgroundColor: 'var(--c-input-bg)', color: 'var(--c-fg)' }}
              placeholder="your@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-fg)' }}>Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 rounded-md border resize-y" style={{ borderColor: 'var(--c-border)', backgroundColor: 'var(--c-input-bg)', color: 'var(--c-fg)' }}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-md font-semibold transition-colors duration-200"
            style={{ backgroundColor: 'var(--c-primary)', color: 'var(--c-primary-fg)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    
  );
};
export default Contact;