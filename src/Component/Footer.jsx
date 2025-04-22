import React from "react";
import "../Styled/Footer.css";
import bottom from "/bottom.png";
import Logo from "/Logos.png";
import { FaFacebook,  FaXTwitter,  FaLinkedinIn  } from "react-icons/fa6";
import frame2 from '/Frame2.png';
import frame3 from '/Frame3.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaApple, FaGooglePlay, FaQrcode, FaUserFriends } from 'react-icons/fa';
import { FiCopy } from "react-icons/fi";
import user  from '/User.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-60 bg-[url(/footer.png)] bg-cover  pb-4">
      <div className="grid md:grid-cols-2 gap-16 relative md:mx-12 mx-4 ">
        <div className="bg-[url(/Frame2.png)] w-full h-[500px] bg-cover p-3 md:p-6 -mt-15 md:-mt-40" >
          <div className="">
            <h1 className="text-white font-semibold text-xl ">Download On Apple and Google PlayStore</h1>
        <div className=" ">
            <button className="bg-white p-2 md:p-3 w-[250px] md:w-[300px] mt-8 rounded-2xl text-blue"> <FaGooglePlay className="inline-flex items-center "/> Download on Google Play </button>
            <FaQrcode size={40 } color={'white'} className="inline-flex mx-2"/>
            </div>
        <div className=" ">
            <button className="bg-white p-2 md:p-3 w-[250px] md:w-[300px] mt-8 rounded-2xl text-blue"> <FaApple size={20} className="inline-flex items-center "/> Download on Apple Store </button>
            <FaQrcode size={40 } color={'white'} className="inline-flex mx-2"/>
            </div>

            <div className=" text-white mt-4">
              <h1 className="mt-3">Join the Other Users Today</h1>
              <img src="/User.png" alt="" className="mt-4" />

              <h1 className="text-2xl text-white font-semibold mt-4 ">Earn More when you refer a Friend</h1> 
              <img src="/text.png" alt="text-image" className="mt-4" />
            </div>
          </div>
        </div>
        <div className="bg-[url(/Frame3.png)] bg-cover w-full h-[500px] hidden md:flex md:-mt-40 rounded-t-2xl">
       
        </div>
 
       
      </div>
      <div className=" ">
        <div className="bg-slate-100   w-full mx-auto md:w-[90%] md:rounded-md p-3 md:p-6 mt-10">
          <div className="">
            <div className="">
              <img src={Logo} alt="Logo" />
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit inventore voluptate corrupti, autem nemo non provident obcaecati ratione molestiae culpa soluta atque quos sapiente distinctio sint tempore magnam nihil et hic itaque omnis officia earum veniam. Cumque culpa fugiat labore, molestiae reprehenderit officiis iste ex iure? Soluta, dolorem adipisci?
              </p>
            </div>
              
              <div className="md:w-[90%] mx-auto">
                
              
            <div className="grid grid-cols-3 mt-8   ">
              <div className="col-span-1 text-left">
                <span className="font-semibold">Product</span>
                <ul className="text-sm text-gray-800">
                  <li>Features</li>
                  <li>Solutions</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className="col-span-1 text-center">
              <span className="font-semibold">Company</span>
                <ul className="text-sm text-gray-800">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Media kit</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-span-1 text-right">
              <span className="font-semibold">Legal</span>
                <ul className="text-sm text-gray-800">
                  <li>Terms</li>
                  <Link to='/privacy-policy' ><li>Privacy</li></Link>
                  
                </ul>
              </div>
            </div>
            </div>
           
          </div>

          <div className="footer-body md:flex items-center justify-between mt-3 md:mt-6">
            <p>© All rights reserved. 2024, Paybills Limited</p>

            <div className="footer-icon mt-2 flex gap-6 text-black">
              <div className="iconss text-black">
                <FaFacebook color="black" size={20} />
              </div>
              <div className="iconss">
                <FaWhatsapp color="black" size={20} />
              </div>
              <div className="iconss">
                <FaXTwitter color="black" size={20} />
              </div>
              <div className="iconss">
                <FaLinkedinIn color="black" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={bottom} alt="Bottom Graphic" className="bottom" /> */}
    </div>
  );
};

export default Footer;

