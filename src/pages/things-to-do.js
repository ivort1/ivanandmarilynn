import React from 'react';
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';

// CSS
import "../../scss/main.scss";

// i18Next
import {useTranslation} from 'gatsby-plugin-react-i18next';

// Components
import GoBackButton from '../../components/GoBackButton';
import TabPill from '../../components/things-to-do/TabPill';
import TabPane from '../../components/things-to-do/TabPane';
import FoodPane from '../../components/things-to-do/FoodPane';
import ShoppingPane from '../../components/things-to-do/ShoppingPane';
import MuseumPane from '../../components/things-to-do/MuseumPane';

const ThingsToDo = () => {

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
                  <div className="header section">{t('travel-information-things-to-do-header')}</div>

                  
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <TabPill
                        class="nav-link active"
                        id="v-pills-food-tab"
                        databsTarget="#v-pills-food"
                        ariaControls="v-pills-food"
                        ariaSelected="true"
                        buttonText={t('things-to-do-places-to-eat-header')} />

                        <TabPill
                          class="nav-link"
                          id="v-pills-shopping-tab"
                          databsTarget="#v-pills-shopping"
                          ariaControls="v-pills-shopping"
                          ariaSelected="true"
                          buttonText={t('things-to-do-where-to-shop-header')} />

                        <TabPill
                          class="nav-link"
                          id="v-pills-museums-tab"
                          databsTarget="#v-pills-museums"
                          ariaControls="v-pills-museums"
                          ariaSelected="true"
                          buttonText={t('things-to-do-museums-header')} />
                    </ul>

                    <div class="tab-content" id="pills-tabContent" style={{width:'100%'}}>
                      <TabPane 
                        class="tab-pane fade show active"
                        id="v-pills-food"
                        ariaLabelledBy="v-pills-food-tab"
                        paneBody={<FoodPane />} />

                      <TabPane 
                        class="tab-pane fade"
                        id="v-pills-shopping"
                        ariaLabelledBy="v-pills-shopping-tab"
                        paneBody={<ShoppingPane />} />

                      <TabPane 
                        class="tab-pane fade"
                        id="v-pills-museums"
                        ariaLabelledBy="v-pills-museums-tab"
                        paneBody={<MuseumPane />} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ThingsToDo

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