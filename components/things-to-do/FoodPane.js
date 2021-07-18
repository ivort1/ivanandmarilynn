import * as React from "react"

// Components
import Card from './Card';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

const FoodPane = () => {

    const { t } = useTranslation();

    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 food-section">

            <Card
                ahref="https://goo.gl/maps/dyiZ3SoymMzgfvs46"
                button={t('get-directions')}
                img={<img src="/cafe_michelena.jpg" class="card-img-top" alt="Cafe Michelena" />}
                title="Cafe Michelena"
                emoji="☀️"
                text={t('food-pane-cafe-michelena-text')} />

            <Card
                ahref="https://goo.gl/maps/dyiZ3SoymMzgfvs46"
                button={t('get-directions')}
                img={
                  <span>
                    <img src="/la_soledad.webp" class="card-img-top img-horizontal" alt="Hotel de la Soledad" />
                    <img src="/la_soledad_vertical.jpg" class="card-img-top img-vertical" alt="Hotel de la Soledad" />
                  </span>
                }
                alt="Hotel de la Soledad"
                title="Hotel de la Soledad"
                emoji="☀️"
                text={t('food-pane-la-soledad-text')} />

            <Card
                ahref="https://goo.gl/maps/nLUzyCfVyCduYuix8"
                button={t('get-directions')}
                img={<img src="/don_pepe.webp" class="card-img-top" alt="Carnitas Don Pepe" />}
                title="Carnitas Don Pepe"
                emoji="☀️🌙"
                text={t('food-pane-don-pepe-text')} />

            <Card
                ahref="https://goo.gl/maps/5LsCEvtLdyde2N7X7"
                button={t('get-directions')}
                img={<img src="/taqueria_cuautla.webp" class="card-img-top" alt="Taquería Cuautla" />}
                title="Taquería Cuautla"
                emoji="🌙"
                text={t('food-pane-taqueria-cuautla-text')} />
        </div>
    )
}

export default FoodPane

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;