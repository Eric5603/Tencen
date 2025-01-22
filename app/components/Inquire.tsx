import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 text-gray-600">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Get in Touch with Us
      </h1>
      
      {/* Typeform Embedded iframe */}
      <div className="flex justify-center">
        <iframe
          src="https://jk6h6o2tbws.typeform.com/to/vciscdy0"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: 'none' }}
          title="Contact Form"
        />
      </div>
      
      <p className="mt-6 text-center text-gray-500">
        If you have any questions, feel free to reach out through the form above.
      </p>
    </div>
  );
};

export default Contact;
