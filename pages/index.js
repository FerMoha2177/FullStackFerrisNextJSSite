import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillHtml5,
} from "react-icons/ai";

import {
  DiPhotoshop,
  SiAdobeillustrator,
  TbBrandFigma,
  FaReact,
  DiPython,
  SiPostgresql,
  DiCss3,
} from "react-icons";
import styles from "../styles/Home.module.css";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import me from "../public/me.png";
import React, { useState, useEffect, useRef } from "react";

import BIRDS from "vanta/dist/vanta.birds.min";
import WAVES from "vanta/dist/vanta.waves.min";
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          gyroControls: false,
          mouseControls: true,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 2,
          scaleMobile: 2,
          color: 0x05b6d4,
          points: 15.0,
          maxDistance: 22.0,
          spacing: 14.0,
          zoom: 0.25,
          THREE,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FullStack Ferris</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 md:px-20 lg:px-40" ref={vantaRef}>
        <section className="min-h-screen ">
          {/* Nav bar */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl py-2 leading-8 text-gray-600 md:text-xl">
              FULLSTACKFERRIS
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Front Page */}
          <section>
            <div className=" text-center p-10 py-10">
              {/* Bio/About */}

              <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                hi, I&apos;m <br className="block md:hidden" />
                <span className="relative">
                  {/* <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"> */}
                  <span className="h-20 pt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    Ferris Mohammed
                  </span>
                  <span className="text-3xl md:text-5xl">👋</span>

                  <span className="{`cursor absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"></span>
                </span>
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                {" "}
                FullStack Engineer{" "}
              </h3>
              <p className="text-md py-2 leading-8 text-gray-600 md:text-xl max-w-xl mx-auto">
                {" "}
                Software Engineer providing services for developing FullStack
                Mobile and Web applications for your business needs!{" "}
              </p>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin />
              <AiFillGithub />
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="" fill object-cover />
            </div>
          </section>
        </section>
        {/* Second Page */}
        <section>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600 md:text-xl ">
              I am a South Florida Native with a Bachelor&apos;s of Science in
              Computer Science from{" "}
              <span className=" text-yellow-400">
                Florida Internatial University
              </span>
              . I have worked with{" "}
              <span className="text-teal-900">
                {" "}
                Pharmaceutical Research Institutes and Universities
              </span>{" "}
              as a FullStack Mobile and Web Engineer, I have also worked with{" "}
              <span className="text-teal-900">
                {" "}
                SiriusXM Satellite Radio
              </span>{" "}
              as Software Test Engineer.
            </p>
          </div>

          {/* Cards */}
          <div className="lg:flex gap-10">
            {/* Design Card */}
            <div className=" text-center shadow-lg  p-10 rounded-xl my-10 border-indigo-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-purple-500 to-pink-500 duration-500 hover:shadow-2xl">
              {" "}
              <Image
                className="mx-auto hover:animate-bounce"
                src={design}
                width={100}
                height={100}
                alt=""
              />
              <h3 className="text-lg text-black font font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="text-black">
                Creating elegant designs suitede for your design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>

            {/* Code Card */}

            <div className=" text-center shadow-lg  p-10 rounded-xl my-10 border-indigo-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-purple-500 to-pink-500 duration-500 hover:shadow-2xl">
              <div className="">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <h3 className="text-lg text-black font font-medium pt-8 pb-2">
                Efficient Code
              </h3>
              <p className="text-black">
                Creating elegant designs suitede for your design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>

            {/* Consulting Card */}

            <div className=" text-center shadow-lg  p-10 rounded-xl my-10 border-indigo-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-purple-500 to-pink-500 duration-500 hover:shadow-2xl">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
                alt=""
              />
              <h3 className="text-lg text-black font font-medium pt-8 pb-2">
                Consulting
              </h3>
              <p className="text-black">
                Creating elegant designs suitede for your design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-600 py-1">Photoshop</p>
              <p className="text-gray-600 py-1">Illustrator</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>

            <p className="text-md py-2 leading-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div>
              {" "}
              <Image src={web1} />{" "}
            </div>
            <div>
              {" "}
              <Image src={web2} />{" "}
            </div>
            <div>
              {" "}
              <Image src={web3} />{" "}
            </div>
            <div>
              {" "}
              <Image src={web4} />{" "}
            </div>
            <div>
              {" "}
              <Image src={web5} />{" "}
            </div>
            <div>
              {" "}
              <Image src={web6} />{" "}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
