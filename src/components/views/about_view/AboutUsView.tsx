import React, { useState } from "react";
import "./AboutUs.css";




const images = [
    "/Foto2.jpg",
    "/Foto1.jpeg",
    "/Foto3.JPG",
    "/Foto4.jpeg",
    "/Foto5.jpg",
    "/Foto6.jpg",
    "/Foto7.jpg",
    "/Foto8.jpeg",
];

const sections = [
  {
    title: "Quiénes somos",
    text: "Somos DanzaUC, un grupo comprometido con difundir el arte de la danza en la comunidad.",
    bg: images[0],
  },
  {
    title: "Metas y misión",
    text: "Nuestra misión es promover la danza como una forma de expresión artística y cultural.",
    bg: images[5],
  },
  {
    title: "Nuestro equipo",
    text: <>
      <p>Contamos con un equipo diverso y talentoso que trabaja arduamente para llevar la danza a todos.</p>
    </>,
    bg: images[1],
  },
  {
    title: "Nuestros entrenadores",
    text: <>
      <p>Contamos con un equipo de entrenadores altamente capacitados y apasionados por la danza.</p>
    </>,
    bg: images[2],
  },
  {
    title: "Nuestra trayectoria",
    text: <>
      <p>Desde nuestros inicios, hemos trabajado para promover la danza en la comunidad.</p>
    </>,
    bg: images[3],
  },
  {
    title: "Contáctanos",
    text: (
      <div className="contact-section">
        <p>
          Si tienes dudas puedes hablarnos a nuestros datos de contacto. <br /> 
          Síguenos en todas nuestras redes sociales!
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <img src="/MailIcon.png" alt="Mail" className="img-logo" />
            <a href="mailto:danzaucoficial@gmail.com">danzaucoficial@gmail.com</a>
          </div>

          <div className="contact-item">
            <img src="/IgIcon.png" alt="Instagram" className="img-logo" />
            <a href="https://www.instagram.com/uc_danza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              @uc_danza
            </a>
          </div>

          <div className="contact-item">
            <img src="/YoutubeIcon.png" alt="Youtube" className="img-logo" />
            <a href="https://www.youtube.com/@danzauc">@danzauc</a>
          </div>

          <div className="contact-item">
            <img src="/TiktokIcon.png" alt="Tiktok" className="img-logo" />
            <a href="https://www.tiktok.com/@uc_danza?_t=ZM-908rav1sX3w&_r=1">@uc_danza</a>
          </div>
        </div>
      </div>
    ),
    bg: images[4],
  }

];







const AboutUsView: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSection = () => {
    setCurrent((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrent((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setCurrent(index);
  };

  return (
    <section>

      <div
        className="aboutus-container"
        style={{ backgroundImage: `url(${sections[current].bg})` }}
      >

        <div className="aboutus-overlay">
          <h1>{sections[current].title}</h1>
          <p>{sections[current].text}</p>

          
        </div>


        <button className="arrow left" onClick={prevSection}>
          {"<"}
        </button>
        <button className="arrow right" onClick={nextSection}>
          {">"}
        </button>

        <div className="dots">
          {sections.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => goToSection(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="photos-section">

      </div>


    </section>
  );
};

export default AboutUsView;
