import React from "react";
import img from '../assets/Images/footer/logo2.webp'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
// import { FaLinkedinIn, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 px-20 py-25">
        <div>
          <div class="mb-6">
            <img src={img} alt="" />
          </div>
          <div>
            <p class="text-[#979fa3]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div class="flex gap-4 items-center mt-10 ">
            <div class="bg-[#e26824] p-2 rounded">
              <FaFacebookSquare></FaFacebookSquare>
            </div>
            <div class="bg-[#e26824] text-white p-2 rounded">
              <FaX></FaX>
            </div>
            <div class="bg-[#e26824] p-2 rounded">
              <FaLinkedin></FaLinkedin>
            </div>
          </div>
        </div>

        <div>
          <h5 class="mb-10">Latest News</h5>
          <h5 class="mb-6">Ways To Improve Your Short Game</h5>
          <h5 class="mb-6">Golfer’s Wish List: How To Fix A Slice</h5>
          <h5>Tips for improving your serve</h5>
        </div>

        <div>
          <h2 class="mb-10">Contact Us</h2>
          <div class="mb-6">
            <h6>Address</h6>
            <p>Chittagong/23/45</p>
          </div>
          <div>
            <h6>Email</h6>
            <p>robiulhossen0081@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="text-center py-7 bg-[#0a171f] text-[#aab2bd]">
        <p>
          Axiomthemes © 2016 All Rights Reserved <a href="#">Terms of use</a>{" "}
          and <a href="#">Privacy policy</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
