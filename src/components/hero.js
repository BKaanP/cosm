import * as React from "react";

function CallToAction({ text }) {
  return (
    <button
      className="justify-center px-14 py-4 font-medium whitespace-nowrap bg-button rounded-xl leading-[130%] max-md:px-5 transition-colors duration-300 hover:bg-button_hover"
      tabIndex="0"
    >
      {text}
    </button>
  );
}

function Hero() {
  return (
    <main className="relative bg-contain bg-center bg-no-repeat h-dvh bg-background overflow-hidden ">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat animate-slideUp "
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/1990435e669e18561c52eba3b473c2a6e86612c9fd2b88d679d0bf60bac2f954?apiKey=f6218d6cfb544189918ec2451f1a7919&")`,
          backgroundPosition: "calc(100% + 40px) center",
        }}
      ></div>
      <div className="relative flex flex-col text-xl text-black max-w-[1920px] mx-auto justify-center items-start h-screen px-8">
        <div className="flex w-full">
          <div className="flex flex-col justify-center p-8 max-md:w-full ">
            <header className="w-full text-6xl italic font-italic font-light leading-[60px] text-left max-md:max-w-full max-md:text-4xl font-Merriweather text-footer animate-slideInLeft delay-0">
              Willkommen in deiner
            </header>
            <section className="mt-5 pl-12 text-8xl font-normal leading-[66px] items-center max-md:flex-wrap max-md:text-4xl animate-slideInLeft delay-100">
              <h2 className="my-auto max-md:max-w-full max-md:text-4xl font-Merriweather text-footer font-extrabold">
                Oase der Schönheit
              </h2>
            </section>
            <section className="flex gap-5 mt-8 w-full max-w-screen-lg leading-8 text-neutral-600 text-left max-md:max-w-full font-Inter font-normal animate-slideInLeft delay-150">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08864908a81a850230e6aeb3b49122375b8d11099d8eca3d02ca15e687cef6f?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                alt="Kosmetik"
                className="shrink-0 max-w-full aspect-[2.78] w-[217px] h-[80px]"
              />
              <p>
                Tauchen Sie ein in eine Welt der Entspannung und des
                Wohlbefindens. Unser erfahrenes Team bietet Ihnen exklusive
                kosmetische Behandlungen, die Ihre natürliche Schönheit
                erstrahlen lassen und Ihr Wohlbefinden steigern.
              </p>
            </section>

            <section className="flex flex-row items-start mt-10 max-md:flex-wrap font-Inter animate-slideInLeft delay-200">
              <CallToAction text="Buchen" />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
