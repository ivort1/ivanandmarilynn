import React from 'react';
import { graphql } from 'gatsby';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

const GlobalFilter = ({filter, setFilter}) => {

    const { t } = useTranslation();

    return(
        <div className="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder={t('find-your-seat-search-for-name')} value={filter || ''} onChange={e => setFilter(e.target.value)} />
            <label for="floatingInput">{t('find-your-seat-search-for-name')}</label>
        </div>
    )
}

export default GlobalFilter

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