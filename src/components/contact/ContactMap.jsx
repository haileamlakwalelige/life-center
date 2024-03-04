import React from "react";

const ContactMap = () => {
  return (
    <div className="overflow-x-hidden py-10">
      <div className="w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6796466576698!2d38.76447227437834!3d9.001596189418647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b218e540e9%3A0xb2d38d14a7887c55!2sLife%20Centre!5e0!3m2!1sen!2set!4v1709345543698!5m2!1sen!2set"
          //   width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          className="w-screen"
          // referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
