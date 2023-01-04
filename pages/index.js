import Head from "next/head";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image.js";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Coel Allen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 md:px-20 lg:px-40 dark:bg-gray-800 bg-gray-100">
        {/* NOTE Bio section */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="md:text-lg dark:text-gray-200 invisible md:visible">
              Built with Next.js/Tailwind
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8 dark:text-gray-800"
                  href="#"
                  onClick={() => setShowModal(true)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative p-3 flex-auto">
                      <iframe
                        src="/resume.pdf"
                        height={680}
                        width={500}
                        // @ts-ignore
                        frameborder="0"
                      ></iframe>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <div className="text-center px-10 pt-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Coel Allen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Full stack developer
            </h3>
            <div>
              <Image
                className="mx-auto rounded-full mt-10"
                src="/coel.jpg"
                alt="Stuff"
                width={200}
                height={100}
              />
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Currently freelance, looking for contract or full-time employment
              opportunities.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 mb-5 text-gray-600 dark:text-teal-800">
            <a href="https://www.linkedin.com/in/coelallen/">
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/CoelAllen">
              <AiFillGithub className="cursor-pointer" />
            </a>
          </div>
        </section>
        {/* NOTE Services section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 font-medium">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              As a full-stack developer I am ready to help with any aspect of
              your project. My formal training was conducted at{" "}
              <a
                href="https://boisecodeworks.com/"
                className="text-teal-500 dark:text-teal-200"
              >
                CodeWorks Academy
              </a>{" "}
              where we used several languages to build single and multi-page
              apps including database work and all api calls. We also learned
              the skills required to understand and utilize new languages and
              frameworks fast. I look forward to putting these skills to use for
              you.
            </p>
          </div>
          <div className="md:columns-2 lg:columns-2 my-10">
            {/* NOTE Design card */}
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-gray-700 bg-gray-200">
              <div className="flex justify-center">
                <Image
                  src="/design.png"
                  alt="design"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Beautiful Designs
              </h3>
              {/* NOTE more text describing design */}
              <p className="py-2 dark:text-gray-200">
                At the heart of any good build is design. In my diverse
                background I have used many different tools to create beautiful,
                functional designs. From creating logos and merchandise to full
                Figma mock-ups, form has remained an important part of my
                journey.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">
                Illustrator
              </p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figma</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lucid</p>
            </div>
            {/* NOTE Coding card */}
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-gray-700 bg-gray-200 mt-10">
              <div className="flex justify-center">
                <Image src="/code.png" alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Languages and Frameworks
              </h3>
              {/* NOTE more text describing design */}
              <p className="py-2 dark:text-gray-200">
                Coding is a commitment to continual education. Languages and
                frameworks update constantly and I strive to continually learn.
                Starting with Vue.js and moving to React.js, I am excited to
                learn more and confident in gaining and maintaining proficiency
                in whatever you may need.
              </p>
              <h4 className="py-4 text-teal-600">Skills include</h4>
              <div className=" columns-3">
                <p className="text-gray-800 dark:text-gray-200 py-1">
                  Javascript
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-200">CSS</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">Vue.js</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">
                  Bootstrap
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-200">
                  Tailwind
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-200">
                  React.js
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-200">C#</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">MySQL</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">Node.js</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">.NET</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">MongoDB</p>
                <p className="text-gray-800 py-1 dark:text-gray-200">
                  Mongoose
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* NOTE Portfolio section */}
        <section>
          <h3 className="text-3xl py-2 text-teal-600 font-medium">Portfolio</h3>
          {/* NOTE Tower */}
          <div>
            <div>
              <h4 className="text-xl py-1 dark:text-gray-200 font-medium">
                Tower
              </h4>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Tower is an ticket marketplace where users can buy tickets,
                create their own events and see who is attending. Events have
                set ticket amounts and can be canceled, canceling any issued
                tickets. Events can be sorted by type and canceled or sold out
                events convey their status visually.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/Tower-home.png"
                  alt="Tower Home"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/Tower-event.png"
                  alt="Tower Event"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
          {/* NOTE Lego Trader */}
          <div>
            <h4 className="text-xl py-1 dark:text-gray-200 font-medium">
              Lego Trader
            </h4>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lego Trader is designed around the trading and collection of Lego
              sets. From the collection page, sets are selected as an owned or
              wishlist item. Owned sets can be made tradeable and compared
              against others wishlists. Then trades can be offered or accepted.
              <br />
              Using Node.js web-sockets, all trades and chat happen in real
              time. An extensive notifications system keeps users informed on
              the status of any trade and alerts when wishlist items become
              available.
            </p>
            <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap py-10">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/lego-full-market.png"
                  alt="Marketplace Page"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/lego-marketplace.png"
                  alt="Trade Modal"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/lego-notifications.png"
                  alt="Notifications Example"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="/lego-forum2.png"
                  alt="Forum Page"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
