import * as React from "react";

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <main className="self-center mt-44 w-full max-w-[1460px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col self-stretch pr-5 my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="text-7xl font-normal leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10 font-Merriweather text-footer">
                Über uns
              </h1>
              <p className="mt-6 text-2xl leading-10 text-neutral-600 max-md:max-w-full font-Inter ">
                <span className="text-neutral-600">
                  Unser Studio wurde mit der Leidenschaft für Schönheit und
                  Wellness gegründet. Unser Team aus erfahrenen Fachleuten setzt
                  alles daran, Ihnen höchste Servicequalität in einem luxuriösen
                  Ambiente zu bieten. Für uns bedeutet Schönheit mehr als nur
                  gutes Aussehen – es geht darum, sich selbstbewusst und
                  verwöhnt zu fühlen. Besuchen Sie uns und erleben Sie, wie Sie
                  danach strahlend schön aussehen und sich rundum wohlfühlen.
                </span>
              </p>
              <button className="justify-center self-start px-14 py-5 mt-12 text-xl font-medium leading-7 bg-button rounded-xl max-md:px-5 max-md:mt-10 transition-colors duration-300 hover:bg-button_hover">
                Jetzt Buchen
              </button>
            </header>
          </article>
          <aside className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2364215cd3eb1e804627babd6d40d5f7f02e06b3e44f34228bb5540c3ccd4ba?apiKey=f6218d6cfb544189918ec2451f1a7919&"
              alt="Luxury Beauty Studio"
              className="grow w-full aspect-[0.71] max-md:mt-10 max-md:max-w-full"
            />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default About;
