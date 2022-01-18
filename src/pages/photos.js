import React from 'react';
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';

// CSS
import "../../scss/main.scss";

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

// Components
import GoBackButton from '../../components/GoBackButton';

const Photos = () => {

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
                    
                    <div className="header section" style={{margin: "2rem 0 0 0"}}>{t('photos-title')}</div>
                    <div className="body section" style={{margin: "0 0 1rem 0"}}>{t('photos-body')}</div>
                    <a href="https://www.amazon.com/photos/shared/mbeoq4MLQPK0PDHr4Ye3yQ.S9ctZRTQaF-2ZIJ9wNZh4n" class="btn btn-outline-dark" rel='noopener noreferrer' target='_blank'>{t('button-1')}</a>

                    <div className="header section" style={{margin: "2rem 0 0 0"}}>{t('photos-upload-title')}</div>
                    <div className="body section" style={{margin: "0 0 1rem 0"}}>{t('photos-upload-body')}</div>
                    <a href="https://www.amazon.com/photos/groups/share/EVZ5GQuATuGVp1actYrolQ.MJYxzxOzZlSj0AYzVAtaL8" class="btn btn-outline-dark" rel='noopener noreferrer' target='_blank'>{t('button-2')}</a>
                
                    <div className="header section" style={{margin: "2rem 0 0 0"}}>{t('video-title')}</div>
                    <div className="body section" style={{margin: "0 0 1rem 0"}}>{t('video-body')}</div>
                    <a href="https://youtube.com/playlist?list=PL_pe2ps2ZmqW6Xpbygl5Xwaw0qlDYHSR-" class="btn btn-outline-dark" rel='noopener noreferrer' target='_blank'>{t('button-3')}</a>
            
                </div>
            </div>
        </main>
    )
}

export default Photos

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