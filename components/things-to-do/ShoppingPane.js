import * as React from "react"

// Components
import Card from './Card';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

const ShoppingPane = () => {

    const { t } = useTranslation();

    return (
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 food-section">

              <Card
                ahref="https://g.page/museo-del-dulce-calle-real-mich-?share"
                button={t('get-directions')}
                img={<img src="/museo_dulces.png" class="card-img-top" alt="Museo de Dulces" />}
                title="Museo del Dulce De La Calle Real"
                text={t('shopping-pane-museo-dulces-text')} />

              <Card
                ahref="https://goo.gl/maps/4Etnaf6Yt98FGDEz8"
                button={t('get-directions')}
                img={<img src="/mercado_dulces.png" class="card-img-top" alt="Mercado de dulces" />}
                title="Mercado de Dulces y Artesanías"
                text={t('shopping-pane-mercado-dulces-text')} />

              <Card
                ahref="https://goo.gl/maps/QMVZBvphCEcFYhqV9"
                button={t('get-directions')}
                img={<img src="/san_francisco.png" class="card-img-top" alt="Templo de San Francisco" />}
                title="Templo de San Francisco de Asís"
                text={t('shopping-pane-san-francisco-text')} />

              <Card
                ahref="https://goo.gl/maps/zrbfojH6kFmxHc6k8"
                button={t('get-directions')}
                img={<img src="/mercado_independencia.png" class="card-img-top" alt="Mercado de independencia" />}
                title="Mercado Independencia"
                text={t('shopping-pane-mercado-independencia-text')} />
        </div>
    )
}

export default ShoppingPane

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