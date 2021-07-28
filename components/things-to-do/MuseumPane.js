import * as React from "react"

// Components
import Card from './Card';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

const MuseumPane = () => {

    const { t } = useTranslation();

    return (
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 food-section">
          <Card
            ahref="https://goo.gl/maps/H8Q4FRJK4LcW8VNw7"
            button={t('get-directions')}
            title="Museo Casa Natal de Morelos"
            text={t('museum-pane-casa-morelos-text')} />

          <Card
            ahref="https://goo.gl/maps/Qswdypw5oY8wWv3R8"
            button={t('get-directions')}
            title="Museo Regional Michoacano"
            text={t('museum-pane-museo-regional-michoacano-text')} />

          <Card
            ahref="https://www.facebook.com/bicicom.mich"
            button={t('more-information')}
            title="Bicicom Morelia"
            text={t('museum-pane-bicicom-morelia-text')} />
        </div>
    )
}

export default MuseumPane

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