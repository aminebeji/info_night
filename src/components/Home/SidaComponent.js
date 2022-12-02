function SidaComponent() {
  return (
    <section class="section" id="section--1">
      <div class="section__title">
        <h2 class="section__description">SIDA/VIH</h2>
        <h3 class="section__header">C’est quoi être « malade du SIDA » ?</h3>
      </div>

      <div class="features">
        <img
          src="img/sida.png"
          data-src="img/sida.png"
          alt="Computer"
          class="features__img"
        />
        <div class="features__feature">
          <h5 class="features__header">Le VIH, c’est quoi ?</h5>
          <p>
            Le VIH est le virus de l’immunodéficience humaine. C’est une IST,
            c’est-à-dire une infection qui peut se transmettre lors de relations
            sexuelles comme par exemple, l’herpès génital, la chlamydia et la
            syphilis.
          </p>
        </div>

        <div class="features__feature">
          <h5 class="features__header">Le SIDA, c’est quoi ?</h5>
          <p>
            Une personne infectée par le VIH est dite « malade du SIDA » lorsque
            son système immunitaire commence à s’affaiblir de plus en plus et
            qu’il ne réussit plus à protéger cette personne contre les maladies
            et autres infections. C’est à ce moment-là, qu’apparaissent les
            maladies opportunistes. Les maladies opportunistes sont des maladies
            qui profitent que l’organisme soit sans défense pour l’attaquer. On
            retrouve souvent parmi ces maladies : des cancers, la pneumonie, la
            tuberculose … Aujourd’hui, si elles prennent bien leur traitement,
            les personnes infectées par le VIH restent séropositives et ne
            tombent jamais malade du sida. Les médicaments permettent de stopper
            l’évolution du VIH et son impact sur le corps. Ce qui offre une
            meilleure qualité de vie aux personnes séropositives. Par contre,
            les médicaments ne permettent pas de se débarrasser du virus
            totalement. Du coup, la personne reste séropositive.
          </p>
        </div>
        <img
          src="img/sid.png"
          data-src="img/sid.png"
          alt="Plant"
          class="features__img"
        />

        <img
          src="img/doute.png"
          style={{ width: "500px" }}
          data-src="img/doute.png"
          alt="Credit card"
          class="features__img"
        />
        <div class="features__feature">
          <h5 class="features__header">En situation de doute ?</h5>
          <p>
            Certaines personnes peuvent ne présenter aucun symptôme après avoir
            contracté le VIH de façon à ce que l'infection ne soit pas
            diagnostiquée jusqu'à ce que les symptômes du sida se manifestent.
            Cela peut prendre jusqu'à 10 ans. Toutefois, 50 % ou plus des
            personnes vivant avec le VIH peuvent manifester de légers symptômes
            semblables à ceux de la grippe, 2 à 4 semaines après avoir été
            infectées.
          </p>
        </div>
        <div class="features__feature">
          <h5 class="features__header">Vie sexuelle avec le SIDA</h5>
          <p>
            {/* Aujourd’hui, la sexualité est omniprésente : dans les livres, les
            films, à la télévision, dans les vidéos en ligne, les clips vidéo,
            les sites web. Elle impacte la façon dont nous nous habillons ou
            parlons avec les autres, notre façon de penser et d’imaginer les
            choses. La sexualité fait partie de nous. Il est probablement
            difficile de trouver un autre domaine de la vie humaine aussi chargé
            de controverses, de stéréotypes, de préjugés, de normes et de
            tabous. Dans les diverses tentatives de définition de ce terme, deux
            aspects sont généralement pris en compte : l’aspect biologique
            (approche essentialiste) et l’aspect socioculturel (approche
            constructiviste). Bien que la sexualité ait une composante
            biologique indéniable, généralement liée à l’impératif de la
            reproduction, d’autres composantes, telles que les besoins et désirs
            personnels, les émotions, les pratiques et les identités, ont une
            importance égale et parfois supérieure. */}
            Oui, car les personnes infectées par le VIH (virus de
            l’immunodéficience humaine) qui prennent de manière assidue leur
            traitement deviennent indétectables. En d’autres termes, le virus ne
            peut plus contaminer autrui. Il n’est pourtant pas simple d’avoir
            des rapports sexuels le cœur léger tout en se sachant séropositif ou
            séropositive.
          </p>
        </div>
        <img
          src="img/couple.png"
          data-src="img/couple.png"
          alt="Plant"
          class="features__img"
        />
      </div>
    </section>
  );
}

export default SidaComponent;
