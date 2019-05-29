import React from "react";
import { FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";

import rect1 from "../images/rect1.svg";
import rect2 from "../images/rect2.svg";
import rect3 from "../images/rect3.svg";
import foto from "../images/foto.svg";
import Navbar from "./navbar";
import { StaticQuery } from "gatsby";

const Hero = () => (
  <StaticQuery 
    query={graphql`
			query SocialLink {
				site {
					siteMetadata {
						dribbble
						github
            linkedin
					}
				}
			}
		`}
		render={data =>(
      <>
  <Navbar name="nav" />
  <section
    className="hero"
    style={{ maxWidth: `1520px`, margin: `auto` }}
  >
    <div className="columns is-flex-tablet">
      <div className="column">
        
            <div className="columns" style={{ paddingTop: `10rem`, paddingLeft: `1rem` }}>
              <div className="column" style={{paddingLeft: `2.5em`, paddingRight: `2.5em`}} >
                
                  <p
                    style={{
                      color: `#000000`,
                      width: `auto`,
                      marginTop: `4rem`,
                      fontWeight: `500`,
                      fontSize: `43px`,
                      lineHeight: `63px`,
                      letterSpacing: `-0.05em`
                    }}
                  >
                    Hi, I am <br />
                    <span style={{ color: `#5D7DE9` }}>
                      Dimas Nashiruddin Al Faruq
                    </span>
                  </p>
                  <p
                    style={{
                      color: `#222222`,
                      paddingTop: `2rem`,
                      width: `auto`,
                      fontWeight: `300`,
                      fontSize: `20px`
                    }}
                  >
                    A Tech Enthusiast who love{" "}
                    <span style={{ color: `#000000`, fontWeight:`500` }}>design-code </span>
                    on mobile and web.
                  </p>
                
              </div>
              <div className="column is-hidden-mobile" style={{ marginRight: `-16rem` }}>
                <img src={rect1} alt="rect1" />
                <img
                  src={rect2}
                  alt="rect2"
                  style={{ marginTop: `-4rem`, marginLeft: `5rem` }}
                />
              </div>
            </div>
          
      </div>
      <div className="column foto" style={{ zIndex: `10` }}>
        <img
          src={foto}
          alt="foto"
          style={{ width: `307px`, marginTop: `8rem` }}
        />
      </div>
      <div className="column is-5 gradientBg" style={{ marginLeft: `-25rem` }}>
        <img
          src={rect3}
          alt="rect3"
          style={{ marginTop: `-12rem`, marginLeft: `-2rem` }}
        />
        <img src={rect3} alt="rect3" style={{ marginLeft: `-7rem` }} />

        <div
          className="columns"
          style={{
            flexDirection: `column`,
            alignSelf: `flex-end`,
            marginLeft: `auto`,
            paddingRight: `5rem`,
            marginBottom: `16.5rem`,
            zIndex: `100`
          }}
        >
          <a className="section column" style={{ padding: `2rem 1.5rem` }} href={data.site.siteMetadata.dribbble}>
            <span className="icon socialButton" style={{ position: `fixed` }}>
            <FaDribbble className="iconn"/>
            </span>
          </a>
          <a className="section column" style={{ padding: `2rem 1.5rem` }} href={data.site.siteMetadata.github}>
            <span className="icon socialButton" style={{ position: `fixed` }}>
              <FaGithub className="iconn"/>
            </span>
          </a>
          <a className="section column" style={{ padding: `2rem 1.5rem` }} href={data.site.siteMetadata.linkedin}>
            <span className="icon socialButton" style={{ position: `fixed` }}>
              <FaLinkedin className="iconn"/>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</>
)}
/>
)



export default Hero;
