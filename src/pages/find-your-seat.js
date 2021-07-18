import React from 'react';
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';

// CSS
import "../../scss/main.scss";

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

// Components
import ReactTable from '../../components/ReactTable';
import GoBackButton from '../../components/GoBackButton';

const FindYourSeat = () => {

    const { t } = useTranslation();

    return(
        <main>
            <Helmet>
                {/* Bootstrap */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Helmet>

            <div className="container">
                <div className="subpage-section">
                    <GoBackButton />
                    
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