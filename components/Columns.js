import React from 'react';
import { graphql } from 'gatsby';

// i18Next
import { Trans } from 'gatsby-plugin-react-i18next';

export const Columns = [
    {
        Header: <Trans i18nKey="find-your-seat-table-number"></Trans>,
        accessor: 'table_number'
    },
    {
        Header: <Trans i18nKey="find-your-seat-first-name"></Trans>,
        accessor: 'first_name'
    },
    {
        Header: <Trans i18nKey="find-your-seat-last-name"></Trans>,
        accessor: 'last_name'
    }
]

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