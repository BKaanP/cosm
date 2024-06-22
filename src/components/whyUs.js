import * as React from "react";

function ImageWrapper({ src, alt, additionalClasses }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`shrink-0 max-w-full aspect-square ${additionalClasses}`}
    />
  );
}

function WhyUs() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <main className="self-center py-18 px-5 mt-16 w-full max-w-[1866px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <ImageWrapper
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58cfc51fc4a9e229bfcfe9194f4a90aba00169bbb65e35a25b445fe350ac2cdc?apiKey=f6218d6cfb544189918ec2451f1a7919&"
              alt="First Image"
              additionalClasses="w-[368px] max-md:mt-10"
            />
          </aside>
          <article className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center mt-10 text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="mt-20 text-7xl font-normal leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl font-Merriweather text-footer">
                Warum uns wählen?
              </h1>
              <p className="self-stretch mt-6 text-2xl leading-10 text-center text-neutral-600 max-md:max-w-full font-Inter font-normal">
                Bei Beauty Point Nesrin streben wir danach, Ihnen ein
                außergewöhnliches Schönheitserlebnis zu bieten. Unsere
                entspannende Atmosphäre in Verbindung mit unserem unermüdlichen
                Engagement für höchste Qualität und Kundenzufriedenheit hebt uns
                von anderen ab. Lassen Sie sich von unserem erfahrenen Team
                verwöhnen und erleben Sie, wie wir Ihre Schönheit auf ein neues
                Level heben. Besuchen Sie uns und spüren Sie den Unterschied!
              </p>
              <button
                className="justify-center px-14 py-5 mt-12 text-xl font-Inter font-medium leading-7 bg-button rounded-xl max-md:px-5 max-md:mt-10 transition-colors duration-300 hover:bg-button_hover"
                tabIndex="0"
              >
                Jetzt Buchen
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c3d5ebdf3f644d33afcbbfad3fd8fbbf1970f41cfb6d37ded3ad870731924d3?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                alt="Second Image"
                className="max-w-full aspect-[0.94] w-[469px] py-3"
              />
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <ImageWrapper
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9775327267c5c8203f60a01b92a3bf0ec9e649578e500efcf43e28645aa670f?apiKey=f6218d6cfb544189918ec2451f1a7919&"
              alt="Third Image"
              additionalClasses="mt-[567px] w-[368px] max-md:mt-10"
            />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default WhyUs;
