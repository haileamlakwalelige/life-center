import React from 'react'
import ContactIntro from "../components/contact/ContactIntro";
import ContactMap from "../components/contact/ContactMap";
import ContactGetInTouch from "../components/contact/ContactGetInTouch";

const Contact = () => {
  return (
    <div className="overflow-x-hidden mt-16">
      <ContactIntro />
      <ContactMap />
      <ContactGetInTouch />
    </div>
  );
};

export default Contact