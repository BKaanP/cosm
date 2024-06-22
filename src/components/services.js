import * as React from "react";

function ServiceCard({ imgSrc, title, description, imgAlt }) {
  return (
    <article>
      <div className="overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="w-full aspect-[1.02] max-md:max-w-full hover:scale-105  easy-in-out duration-500 "
        />
      </div>

      <h2 className="mt-10 max-md:max-w-full max-md:text-5xl text-4xl font-Merriweather text-footer">
        {title}
      </h2>
      <p className="mt-2.5 text-xl leading-8 text-neutral-600 max-md:max-w-full font-Inter">
        {description}
      </p>
    </article>
  );
}

function Services() {
  const services = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a7a07a914d5a117a052bf3b8d27d0da4545f9e7222de2add22eb7822ed9406a7?apiKey=f6218d6cfb544189918ec2451f1a7919&",
      title: "Gesichtsbehandlung",
      description:
        "Luxuriöse Gesichtsbehandlungen, die Ihre Haut zum Strahlen bringen und jugendlich frisch wirken lassen.",
      imgAlt: "Face treatment",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2006d078901a51e590e84c25aa4872892cd5cefd0c66d32ab20db8a3bfdad7f?apiKey=f6218d6cfb544189918ec2451f1a7919&",
      title: "Wachsen",
      description:
        "Verwenden Sie Heißwachs oder Wachsstreifen für glatte, langanhaltende Ergebnisse.",
      imgAlt: "Waxing",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/faa8f735b7415c8601129b17b8dd5b9075585aa55d2a7b1231970a946fdcfe8d?apiKey=f6218d6cfb544189918ec2451f1a7919&",
      title: "Laser",
      description:
        "Effektive Haarentfernung mit modernster Lasertechnologie für dauerhaft glatte Haut.",
      imgAlt: "Laser treatment",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e0dcafe30b012fa45892545c970fc1699c40d7a51cc1b661857f4b250051e963?apiKey=f6218d6cfb544189918ec2451f1a7919&",
      title: "Augenbrauen & Wimpern",
      description:
        "Perfekt geformte Brauen und üppige Wimpern zur Betonung Deiner natürlichen Schönheit.",
      imgAlt: "Eyebrows and lashes",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7005c0ae5e704b36835e051a4c2a9c1a0fefbcbd92e8396069608f98f14e4844?apiKey=f6218d6cfb544189918ec2451f1a7919&",
      title: "Manikure & Pedikure",
      description:
        "Professionelle Nagelpflege für schön glänzende Hände und Füße.",
      imgAlt: "Manicure and pedicure",
    },
  ];

  return (
    <section className="flex justify-center items-center px-16 py-40 mt-24 w-full bg-background max-md:px-5 max-md:mt-10 max-md:max-w-full min-h-screen">
      <div className="flex flex-col my-5 w-full max-w-[1460px] max-md:max-w-full">
        <header className="flex flex-col items-center self-center w-full max-w-[1326px] max-md:max-w-full">
          <h1 className="text-7xl font-normal text-black leading-[72px] max-md:max-w-full max-md:text-4xl font-Merriweather text-footer">
            Unsere Dienstleistungen
          </h1>
          <p className="mt-6 text-2xl leading-10 text-center text-neutral-600 w-[1001px] max-md:max-w-full font-Inter">
            Bei Beauty Point Nesrin bieten wir eine Vielzahl hochwertiger
            Kosmetikdienstleistungen an, die auf Ihre Schönheitsbedürfnisse
            zugeschnitten sind. Unsere Behandlungen werden von erfahrenen
            Fachkräften durchgeführt.
          </p>
        </header>

        <section className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full space-y-10">
              <ServiceCard
                imgSrc={services[0].imgSrc}
                title={services[0].title}
                description={services[0].description}
                imgAlt={services[0].imgAlt}
              />
              <ServiceCard
                imgSrc={services[1].imgSrc}
                title={services[1].title}
                description={services[1].description}
                imgAlt={services[1].imgAlt}
              />
            </article>

            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full space-y-10 ">
              <ServiceCard
                imgSrc={services[2].imgSrc}
                title={services[2].title}
                description={services[2].description}
                imgAlt={services[2].imgAlt}
              />
              <ServiceCard
                imgSrc={services[3].imgSrc}
                title={services[3].title}
                description={services[3].description}
                imgAlt={services[3].imgAlt}
              />
            </article>
          </div>
        </section>

        <section className="max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 pt-10">
            <article className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/68422c24459d0c1f4fbb4fa0cde8f471494e46d4471e404d4ff73ea9729a46ee?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                alt=""
                className="mt-11 w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
              />
            </article>
            <article className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full space-y-10">
              <ServiceCard
                imgSrc={services[4].imgSrc}
                title={services[4].title}
                description={services[4].description}
                imgAlt={services[4].imgAlt}
              />
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Services;
