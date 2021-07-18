import React from 'react';
import { Link, graphql } from 'gatsby';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const GoBackButton = () => {

    const { t } = useTranslation();

    const backArrow = <span className="go-back-icon"><FontAwesomeIcon icon={faAngleLeft} /></span>

    return(
      <div className="section">
        <Link className="go-back-button" to="/">{backArrow}{t('go-back-button')}</Link>
      </div>
    )
}

export default GoBackButton

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