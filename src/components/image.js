import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query {
          wevote_two: file(relativePath: { eq: "wevote_one.PNG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          staticbox: file(relativePath: { eq: "staticbox.PNG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          jelly: file(relativePath: { eq: "jelly-development.PNG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          system: file(relativePath: { eq: "system.PNG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const WeVoteImageTwo = <img src="../images/wevote_two.png" />;

const StaticboxImage = <img src="../images/staticbox.png" />;

const JellyImage = <img src="../images/jelly-development.png" />;

const SystemImage = <img src="../images/system.png" />;

export { WeVoteImageTwo, StaticboxImage, JellyImage, SystemImage };
