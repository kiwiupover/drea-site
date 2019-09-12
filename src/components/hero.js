import React from 'react';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image-es5';

const Hero = () => {
  const { heroImage, dreaImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero-background.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dreaImage: file(relativePath: {eq: "drea.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage Tag="section" fluid = {heroImage.sharp.fluid}
      className = "w-screen h-auto">
      < div className = "flex items-center mx-auto max-w-2/3 w-2/3" >
        < div className = "w-1/2" >
          <h1 className="text-5xl font-light text-white">Drea Amazing</h1>
          < h3 className = "text-2xl text-green-100" > The best baby whisperer under 20 < /h3>
        </div>
        <Img
          className = "w-1/2 m-16 rounded-full shadow-xl"
          fluid={dreaImage.sharp.fluid}
          alt="Gatsby Docs are awesome"
        />
      </div>
    </BackgroundImage>
  )
}

export default Hero;
