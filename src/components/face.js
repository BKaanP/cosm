import * as React from "react";

const treatments = [
  {
    title: "Microneedling (Empfehlung)",
    description:
      "Nachhaltiges Gewebeaufbau mit Microneedling für eine glatte und feste Haut: Minimiert Falten und Narben durch gezielte Stimulation der Kollagenproduktion.",
  },
  {
    title: "Mesotherapie (Empfehlung)",
    description:
      "Verjüngen Sie Ihre Haut mit Mesotherapie: Eine effektive Methode zur Einschleusung von Vitaminen und Nährstoffen für ein strahlendes, jugendliches Aussehen.",
  },
  {
    title: "Individuell",
    description:
      "Erleben Sie eine individuell auf Ihre Haut abgestimmte Behandlung, inklusive Hautanalyse, Reinigung, Peeling, Dampf, Ausreinigung, Ampulle, Maske und Abschlusspflege.",
  },
  {
    title: "Aquafacial",
    description:
      "Ein sanftes Aquafacial klärt die Poren, spendet intensive Feuchtigkeit und hinterlässt Ihre Haut frisch und revitalisiert.",
  },
  {
    title: "Bioface-Lifting",
    description:
      "Natürliche Hautstraffung ohne Skalpell: Das Bioface-Lifting strafft und glättet die Haut auf schonende Weise und lässt Sie jugendlicher aussehen.",
  },
  {
    title: "Microdermabrasion",
    description:
      "Hauterneuerung durch Microdermabrasion: Entfernt abgestorbene Hautzellen und fördert die Regeneration für ein frisches, strahlendes Hautbild.",
  },
  {
    title: "Botox",
    description:
      "Glatte, faltenfreie Haut mit Botox: Diese bewährte Methode reduziert Mimikfalten und sorgt für ein jugendliches, frisches Aussehen ohne operativen Eingriff.",
  },
  {
    title: "Two Elements",
    description:
      "Erleben Sie die innovative TwoElements-Behandlung: Eine Gel- und Fließmaske, die Ihre Haut festigt, entstaut und bis in die tiefen Hautschichten aktiviert. Für eine straffere und revitalisierte Haut.",
  },
];

function TreatmentCard({ title, description, imgSrc, isOpen, onClick }) {
  return (
    <section
      className={`flex flex-col justify-center px-6 py-5 mt-5 rounded-2xl max-md:pl-5 max-md:max-w-full ${
        isOpen ? "bg-button" : "bg-white"
      } transition-all duration-500`}
    >
      <header
        className="flex gap-3.5 justify-between max-md:flex-wrap max-md:max-w-full cursor-pointer"
        onClick={onClick}
      >
        <h2 className="my-auto text-2xl font-semibold leading-8 text-zinc-950 font-Inter">
          {title}
        </h2>
        <div
          className={`flex justify-center items-center px-3.5 py-3.5 w-12 h-12 rounded-[114.286px] ${
            isOpen ? "bg-button_circ" : "bg-zinc-600 bg-opacity-20"
          } transition-colors duration-500`}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-500 ${
              isOpen ? "rotate-180 text-button" : "text-zinc-600"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </header>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {description && (
          <p className="mt-3.5 text-xl leading-8 text-neutral-800 max-md:max-w-full">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

function Face() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const handleCardClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex justify-center items-center px-16 py-40 mt-28 w-full bg-orange-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col my-5 w-full max-w-[1460px] max-md:max-w-full">
        <h1 className="self-center text-7xl font-normal  leading-[72px] max-md:max-w-full max-md:text-4xl font-Merriweather text-footer">
          Gesichtsbehandlungen
        </h1>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <figure className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4baf19f56402f48f48d0370bec4a8693e92b8c41e653d3da8b86347e3d732cb7?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                alt=""
                className="grow-0 w-full aspect-[0.61] max-md:mt-10 max-md:max-w-full"
              />
            </figure>
            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow max-md:mt-10 max-md:max-w-full font-Inter">
                {treatments.map((treatment, index) => (
                  <TreatmentCard
                    key={index}
                    title={treatment.title}
                    description={treatment.description}
                    imgSrc={treatment.imgSrc}
                    isOpen={openIndex === index}
                    onClick={() => handleCardClick(index)}
                  />
                ))}
              </article>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Face;
