import React from "react";
import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
function Footer() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY}
    flex-col`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hooBank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
            A new way to make the payments easy, relaiable and secure.
          </p>
        </div>
        <div
          className="flex-[1.5] w-full flex flex-row flex-wrap mt-4 justify-between md:mr-0 mr-10
        "
        >
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.id}
              className="flex
              flex-col ss:my-0 my-4 min-w-150px"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((Link, index) => (
                  <li
                    key={Link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px]
                    text-dimWhite hover:text-secondary cursor-pointer
                     ${
                       index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                     }`}
                  >
                    {Link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 &copy;HooBank
        </p>
      </div>
    </section>
  );
}

export default Footer;
