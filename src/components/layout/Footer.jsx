// import React from 'react'
import footer from '../../assets/images/footer.png';
import logo from '../../assets/images/logo.png';
import go from '../../assets/images/go.png';
import tel from '../../assets/images/tel.png';
import lin from '../../assets/images/lin.png';
import twi from '../../assets/images/twi.png';

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover', // Adjust this based on your design preferences
    backgroundRepeat: 'no-repeat',
  };
  return (
    <footer style={footerStyle} className=" py-8 md:py-16 lg:py-24 ">
      <div className="flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 gap-5">
        <div className="md:w-1/2 lg:w-2/4">
          <img
            src={logo}
            alt="Habesha Digital Marketing"
            className="w-[491px] h-[308px]"
          />
        </div>
        <div className="md:w-1/2 lg:w-2/4">
          <form>
            <p className="font-semibold cri text-[30px] text-center text-white py-10">
              Subscribe to Our Newsletter!
            </p>
            <div className="py-2">
              <label className="text-[16px] cri text-white font-semibold pb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-2xl bg-[#226E9F] py-1 focus:outline-none border-none text-white px-3"
              />
            </div>
            <div className="py-2">
              <label className="text-[16px] cri text-white font-semibold pb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-2xl bg-[#226E9F] py-1 focus:outline-none border-none text-white px-3"
              />
            </div>
          </form>
        </div>
        <div className="md:w-1/2 lg:w-2/4">
          <p className="cri font-semibold text-[30px] lg:text-[40px] text-white text-center py-3">
            Our services
          </p>
          <p className="text-[18px] text-white cri text-center py-2 font-bold">
            Website Design and Development
          </p>
          <p className="text-[18px] text-white cri text-center pb-2 font-bold">
            Social Media Advertising
          </p>
          <p className="text-[18px] text-white cri text-center pb-2 font-bold">
            Digital Strategy Consulting
          </p>
          <p className="text-[18px] text-white cri text-center pb-2 font-bold">
            Content Marketing
          </p>

          <div className="flex justify-center items-center gap-3 md:gap-5 pt-10 lg:gap-10">
            <img src={go} alt="Google" className="h-[40px] w-[40px]" />
            <img src={tel} alt="Telegram" className="h-[40px] w-[40px]" />
            <img src={lin} alt="LinkedIn" className="h-[40px] w-[40px]" />
            <img src={twi} alt="Twitter" className="h-[40px] w-[40px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
