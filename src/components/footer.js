import React, { useState } from "react";
import logo from "../assets/Frame 3.svg"; // Adjust the path according to your folder structure
import Modal from "./Modal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center w-full bg-background">
      <p className="text-center text-9xl bg-background font-Merriweather py-4 text-footer">
        Beauty Point Nesrin
      </p>
      <div className="flex flex-col items-center px-16 pt-14 pb-0 w-full bg-footer max-md:px-5 max-md:max-w-full font-Inter">
        <div className="flex flex-col w-full max-w-[1460px] max-md:max-w-full">
          <header className="justify-between max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="text-5xl font-semibold text-white leading-[59.8px] max-md:text-4xl ">
                    <img src={logo} alt="Logo" className="h-24" />
                  </div>
                </div>
              </section>
              <section className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="grow justify-between max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-row max-md:gap-0">
                    <div className="flex flex-row ml-5 w-full max-md:ml-0">
                      <div className="flex flex-col text-xl leading-8 text-white max-md:mt-10">
                        <div className="text-2xl font-semibold leading-8 text-white">
                          Kontakt
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                          <div className="flex items-center gap-2.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e2498f7f00bed7e776e258bcb398bcdebb5e39a2fbb44ab0acdac473a112d1?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                              alt="Phone Icon"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div>+49 15778822809</div>
                          </div>
                          <div className="flex items-center gap-2.5 whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/869a5c20c5b40e0f99da8f9c1479adc3d2d9b665b44196dceb19565799dc0bb2?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                              alt="Email Icon"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div>nesrin.akteke@outlook.de</div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c75ea7fbc58579e46618aff1ddbc3790c854e1a4651e31d334bbd34e6efd63dc?apiKey=f6218d6cfb544189918ec2451f1a7919&"
                              alt="Location Icon"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div>Friedrich-Wilhelm-Platz 16 12161 Berlin</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center mt-10 w-full">
                        <iframe
                          width="300"
                          height="200"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Julie%20Cosm%C3%A9tique%2016%20Berlin+(Julie%20Cosm%C3%A9tique)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </header>
        </div>

        <footer className="flex flex-col items-center gap-5 mt-10 w-full text-base leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-between w-full max-md:flex-wrap">
            <div>@alle Rechte vorbehalten für Beauty Point Nesrin</div>
            <div className="flex gap-5 justify-between max-md:flex-wrap">
              <div className="cursor-pointer" onClick={handleOpenModal}>
                Datenschutzrichtlinie
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-2xl font-semibold mb-4">Datenschutzerklärung</h2>
        <p>
          Auf unserer Webseite werden keine personenbezogenen Daten gesammelt.
          Unsere Seite enthält lediglich Links zu externen Webseiten,
          insbesondere zu unserer Treatwell-Seite. Bitte beachten Sie, dass
          durch das Klicken auf diese Links personenbezogene Daten an die
          verlinkten Seiten übermittelt werden können. Für die
          Datenschutzpraktiken dieser Seiten sind die jeweiligen Betreiber
          verantwortlich. Weitere Informationen finden Sie in den
          Datenschutzerklärungen der jeweiligen Webseiten.
        </p>
      </Modal>
    </div>
  );
}
