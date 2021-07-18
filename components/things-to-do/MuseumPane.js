import * as React from "react"

// Components
import Card from './Card';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

const MuseumPane = () => {

    const { t } = useTranslation();

    return (
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 food-section">

            

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