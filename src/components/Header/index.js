import React from "react";
import Link from "next/link";
import MobileHeader from "./MobileHeader";

const Header = (props) => {
  let { loggedIn } = props;
  return loggedIn ? (
    <>
      <MobileHeader loggedIn={loggedIn} />
      <ul className="menu cf desktop">
        <li>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/lessons">
            <a href="/lessons">Lessons</a>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/lessons/css">
                <a href="/lessons/css">CSS3</a>
              </Link>
            </li>
            <li>
              <Link href="/lessons/javascript">
                <a href="/lessons/javascript">Javascript</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="/link">Contacts</a>
        </li>
        <li>
          <a href="/link">About Us</a>
        </li>
      </ul>
      <style jsx>{`
        .cf:before,
        .cf:after {
          content: " ";
          display: table;
        }
        .cf:after {
          clear: both;
        }
        .cf {
          *zoom: 1;
        }
        .menu {
          list-style: none;
          margin: 50px auto;
          width: 800px;
          width: -moz-fit-content;
          width: -webkit-fit-content;
          width: fit-content;
        }
        .menu > li {
          background: #34495e;
          float: left;
          position: relative;
          -webkit-transform: skewX(25deg);
        }
        .menu a {
          display: block;
          color: #fff;
          text-transform: uppercase;
          text-decoration: none;
          font-family: Arial, Helvetica;
          font-size: 14px;
        }
        .menu li:hover {
          background: #e74c3c;
        }
        .menu > li > a {
          -webkit-transform: skewX(-25deg);
          padding: 1em 2em;
        }
        /* Dropdown */
        .submenu {
          position: absolute;
          width: 200px;
          left: 50%;
          margin-left: -100px;
          -webkit-transform: skewX(-25deg);
          -webkit-transform-origin: left top;
        }
        .submenu li {
          background-color: #34495e;
          position: relative;
          overflow: hidden;
        }
        .submenu > li > a {
          padding: 1em 2em;
        }
        .submenu > li::after {
          content: "";
          position: absolute;
          top: -125%;
          height: 100%;
          width: 100%;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
        }
        /* Odd stuff */
        .submenu > li:nth-child(odd) {
          -webkit-transform: skewX(-25deg) translateX(0);
        }
        .submenu > li:nth-child(odd) > a {
          -webkit-transform: skewX(25deg);
        }
        .submenu > li:nth-child(odd)::after {
          right: -50%;
          -webkit-transform: skewX(-25deg) rotate(3deg);
        }
        /* Even stuff */
        .submenu > li:nth-child(even) {
          -webkit-transform: skewX(25deg) translateX(0);
        }
        .submenu > li:nth-child(even) > a {
          -webkit-transform: skewX(-25deg);
        }
        .submenu > li:nth-child(even)::after {
          left: -50%;
          -webkit-transform: skewX(25deg) rotate(3deg);
        }
        /* Show dropdown */
        .submenu,
        .submenu li {
          opacity: 0;
          visibility: hidden;
        }
        .submenu li {
          transition: 0.2s ease -webkit-transform;
        }
        .menu > li:hover .submenu,
        .menu > li:hover .submenu li {
          opacity: 1;
          visibility: visible;
        }
        .menu > li:hover .submenu li:nth-child(even) {
          -webkit-transform: skewX(25deg) translateX(15px);
        }
        .menu > li:hover .submenu li:nth-child(odd) {
          -webkit-transform: skewX(-25deg) translateX(-15px);
        }

        @media (max-width: 720px) {
          .desktop {
            display: none;
          }
        }
      `}</style>
    </>
  ) : (
    <div className="header flex">
      <div className="header-item">Logo ass</div>
    </div>
  );
};

export default Header;
