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
    title: "¿Quiénes somos?",
    text: <>
      <p>Somos Danza UC, el equipo de danza competitiva de la Pontificia Universidad Católica de Chile. Nos especializamos en los estilos de jazz y contemporáneo, y nuestro propósito es representar con excelencia, disciplina y creatividad tanto a nuestra universidad, como a nuestro país en escenarios nacionales e internacionales.</p>
    </>,
    bg: images[0],
  },
  {
    title: "Nuestro equipo",
    text: <>
      <p>Lo que nos distingue es la interdisciplina: estudiantes de distintas carreras y realidades, que combinamos nuestra vida académica con la pasión por la danza. Creemos en el poder del trabajo en equipo, la perseverancia y la fuerza de lo colectivo para alcanzar grandes metas.</p>
    </>,
    bg: images[1],
  },
  {
    title: "Metas y misión",
    text: <>
      <p>Nuestra misión es dar visibilidad a la danza competitiva en Chile, mostrando a través de nuestras redes lo que significa ser atleta universitario y, a la vez, potenciar el deporte femenino.</p>
    </>,
    bg: images[5],
  },
  {
    title: "Metas y misión",
    text: <>
      <p>Hoy nos encontramos trabajando con toda la energía para nuestro próximo gran desafío: la ICU University World Cup Cheerleading Championship 2026, donde por primera vez la UC y Chile estarán presentes en esta competencia de nivel mundial.</p>
      <p>Con tu apoyo, podremos seguir abriendo camino, demostrando que en Chile también se puede competir al más alto nivel y que la danza es un deporte que merece un lugar en la historia.</p>
    </>,
    bg: images[5],
  },
  {
    title: "Nuestros entrenadores",
    text: <>
      <p>Contamos con la guía de entrenadores de reconocida trayectoria en diversas técnicas de danza, quienes nos inspiran a crecer día a día como artistas y como atletas. Nuestro Head Coach es Cristian Juris, nuestro Asistant Coach Eduardo Briones y nuestro Preparador Físico Erick Pavez.</p>
    </>,
    bg: images[2],
  },
  {
    title: "Nuestra trayectoria",
    text: <>
      <p>Somos bicampeonas nacionales y hemos acumulado múltiples primeros lugares desde la creación del equipo. En 2023 participamos en The Dance Worlds, alcanzando el 11° lugar mundial, un hito histórico que nos impulsa a seguir soñando en grande.</p>
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
            <a href="mailto:danzaucoficial@gmail.com" target="_blank">danzaucoficial@gmail.com</a>
          </div>

          <div className="contact-item">
            <img src="/IgIcon.png" alt="Instagram" className="img-logo" />
            <a href="https://www.instagram.com/uc_danza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              @uc_danza
            </a>
          </div>

          <div className="contact-item">
            <img src="/YoutubeIcon.png" alt="Youtube" className="img-logo" />
            <a href="https://www.youtube.com/@danzauc" target="_blank">@danzauc</a>
          </div>

          <div className="contact-item">
            <img src="/TiktokIcon.png" alt="Tiktok" className="img-logo" />
            <a href="https://www.tiktok.com/@uc_danza?_t=ZM-908rav1sX3w&_r=1" target="_blank">@uc_danza</a>
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
          <div className="aboutus-text">
            {sections[current].text}
          </div>

          
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
