import { useState } from "react";

import BtnSlider from "./BtnSlider";

function StoriesComponent() {
  const stories = [
    {
      id: 1,
      title: "Chanteur et acteur afro-americain",
      description: `Il commence sa carrière à Brodway et se fait remarquer pour avoir
      joué dans de nombreuses comédies musicales  à succès (Miss
      Saigon, Grease, Hair...). Il a révélé qu'il vivait avec le VIH
      depuis 2007. Au lieu de se reposer sur ses lauriers, Porter a
      profité de son interview pour faire savoir au monde : « Je suis
      bien plus que ce diagnostic. Et si tu ne veux pas travailler avec
      moi à cause de mon statut, tu n'es pas digne de moi.`,
      src: "img/user-1.jpg",
      name: "Billy Porter",
      sub_description: "chanteur et acteur",
    },
    {
      id: 2,
      title: "Acteur, scénariste et producteur de cinéma américain",
      description: `Charlie Sheen est connu autant pour ses pitreries hors écran que
      pour ses côtelettes de comédie à l'écran. parmi ses travails les
      plus connu la série télévisé two and a Half Men . en novembre
      2015, ile comédien a révélé qu'il vivait avec le VIH . Sheen a été
      forcé de sortir pendant que le National Enquirer préparait une
      histoire qui aurait révélé son statut sérologique, prouvant que la
      stigmatisation du VIH affecte toujours négativement les personnes
      vivant avec le VIH aujourd'hui. Quand il est sorti, Sheen a
      partagé qu'il prenait des médicaments antirétroviraux et qu'il
      était indétectable. `,
      src: "img/user-2.jpg",
      name: "Charlie Sheen",
      sub_description: "comédien",
    },
    {
      id: 3,
      title: "Joueur de basket-ball américain",
      description: `Il serait difficile de parler de célébrités vivant avec le VIH sans évoquer Magic Johnson. Lorsque Johnson, l'un des plus grands joueurs de basket-ball, a révélé qu'il vivait avec le VIH en 1991, ce fut un moment décisif dans la sensibilisation au VIH.Depuis son diagnostic, il continue de prospérer, ce qui a amené certaines personnes à croire qu'il est guéri. Mais dans ses apparitions, il continue d'éduquer les gens et de leur rappeler qu'il n'est pas guéri, il prend simplement des médicaments efficaces."Je l'ai et je l'ai depuis 22 ans. C'est juste endormi dans mon corps
      `,
      src: "img/user-3.jpg",
      name: "Magique Johnson",
      sub_description: "Athlète",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(stories.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <section class="section" id="section--3">
      <div class="section__title section__title--testimonials">
        <h2 class="section__description">STORIES</h2>
        <h3 class="section__header">
          Célébrités et personnes célèbres vivant avec le VIH
        </h3>
      </div>
      <div class="slider">
        {stories.map((obj, index) => {
          console.log(obj, stories);
          return (
            <div
              key={obj.id}
              className={[
                "slide slide--1",
                slideIndex === index ? "slide active-anim" : "slide",
              ]}
            >
              <div class="testimonial">
                <h5 class="testimonial__header">{obj.title}</h5>
                <blockquote class="testimonial__text">
                  {obj.description}
                </blockquote>
                <address class="testimonial__author">
                  <img
                    src={obj.src}
                    alt=""
                    class="testimonial__photo"
                    style={{ height: "70px", width: "70px" }}
                  />
                  <h6 class="testimonial__name">{obj.name}</h6>
                  <p class="testimonial__location">{obj.sub_description} </p>
                </address>
              </div>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
      {/* <div class="slider">
        <div class="slide slide--1">
          <div class="testimonial">
            <h5 class="testimonial__header">
              Chanteur et acteur afro-americain
            </h5>
            <blockquote class="testimonial__text">
              Il commence sa carrière à Brodway et se fait remarquer pour avoir
              joué dans de nombreuses comédies musicales  à succès (Miss
              Saigon, Grease, Hair...). Il a révélé qu'il vivait avec le VIH
              depuis 2007. Au lieu de se reposer sur ses lauriers, Porter a
              profité de son interview pour faire savoir au monde : « Je suis
              bien plus que ce diagnostic. Et si tu ne veux pas travailler avec
              moi à cause de mon statut, tu n'es pas digne de moi.
            </blockquote>
            <address class="testimonial__author">
              <img
                src="img/user-1.jpg"
                alt=""
                class="testimonial__photo"
                style={{ height: "70px", width: "70px" }}
              />
              <h6 class="testimonial__name">Billy Porter</h6>
              <p class="testimonial__location">chanteur et acteur </p>
            </address>
          </div>
        </div>

        <div class="slide slide--2">
          <div class="testimonial">
            <h5 class="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <blockquote class="testimonial__text">
              Charlie Sheen est connu autant pour ses pitreries hors écran que
              pour ses côtelettes de comédie à l'écran. parmi ses travails les
              plus connu la série télévisé two and a Half Men . en novembre
              2015, ile comédien a révélé qu'il vivait avec le VIH . Sheen a été
              forcé de sortir pendant que le National Enquirer préparait une
              histoire qui aurait révélé son statut sérologique, prouvant que la
              stigmatisation du VIH affecte toujours négativement les personnes
              vivant avec le VIH aujourd'hui. Quand il est sorti, Sheen a
              partagé qu'il prenait des médicaments antirétroviraux et qu'il
              était indétectable. .
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-2.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Miyah Miles</h6>
              <p class="testimonial__location">London, UK</p>
            </address>
          </div>
        </div>

        <div class="slide slide--3">
          <div class="testimonial">
            <h5 class="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote class="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-3.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Francisco Gomes</h6>
              <p class="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>
        <button class="slider__btn slider__btn--left hidden">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      </div> */}
    </section>
  );
}

export default StoriesComponent;
