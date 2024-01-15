import gql from 'graphql-tag';

export const getBooksListing = () => {

    const BOOKS_LISTING_QUERY = gql`
    query books {
        brooks {
          bookCode
          bookName
          createdAt
          id
          quantity
          bookImage {
            fileName
            url
            createdAt
            id
          }
        }
      }
                
  `;

return BOOKS_LISTING_QUERY

}