import React from 'react';
import { graphql } from 'gatsby';

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

// Components
import ReactTable from '../../components/ReactTable';

const FindYourSeat = () => {

    const { t } = useTranslation();

    return(
        <main>
            <div className="container">
                <div className="find-your-seat-section">
                    <div className="header">{t('find-your-seat-title')}</div>

                    <div className="body">{t('find-your-seat-body')}</div>

                    <div className="table-container">
                        <ReactTable />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FindYourSeat

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