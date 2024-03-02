import React from 'react'
import ContactIntro from "../components/contact/ContactIntro";
import ContactMap from "../components/contact/ContactMap";
import ContactGetInTouch from "../components/contact/ContactGetInTouch";

const Contact = () => {
  return (
    <div>
      <ContactIntro />
      <ContactMap />
      <ContactGetInTouch />
    </div>
  );
};

export default Contact