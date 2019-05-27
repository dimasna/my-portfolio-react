import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import logo from "../images/logo.svg";
import logoScroll from "../images/logoScroll.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navBurger: false,
      hasScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleClick = () =>
    this.setState({
      navBurger: !this.state.navBurger
    });

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      });
    } else {
      this.setState({
        hasScrolled: false
      });
    }
  };

  render() {
    return (
      <nav
        className={
          this.state.navBurger
            ? `level navbar is-fixed-top ${this.state.hasScrolled ? `navbarTrans navbarScroll`:``}`
            : `level navbar is-fixed-top is-mobile ${this.state.hasScrolled ? `navbarTrans navbarScroll`:``}`
        }
        style={{
          maxWidth: `1440px`,
          margin: `auto`,
          padding: `1rem 2rem`
        }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={this.state.hasScrolled? logoScroll : logo} alt="logo" />
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={
            this.state.navBurger 
            ? `${this.state.hasScrolled ? `navbar-menu is-active navbarMenuNonBoxShadow`: `navbar-menu is-active`}`  : "navbar-menu"
          }
        >
          <a
            class="navbar-item navtext"
            style={{
                color: `${this.state.hasScrolled ? `#ffffff` : `#000000`}`
            }}
          >
            Achievements
          </a>
          <a
            class="navbar-item navtext"
            style={{
				color: `${this.state.hasScrolled ? `#ffffff` : `#000000`}`
            }}
          >
            My Works
          </a>
          <div className="navbar-end">
            <div className="navbar-item">
              <div
                className="columns is-mobile is-centered is-marginless"
                style={{padding: `0.2rem 0rem` }}
              >
                <p
                  className="buttonNav"
                  style={{
                    fontFamily: `Rubik`,
                    fontWeight: `500`,
                    letterSpacing: `-0.05em`,
                    color: `#5D7DE9`
                  }}
                >
                  Hire Me!
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          role="button"
          className={
            this.state.navBurger
              ? "navbar-burger burger is-active"
              : "navbar-burger burger"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={this.handleClick}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </nav>
    );
  }
}

// const Navbar = () => (
// 	<div className="hero-head is-hidden-mobile">
// 		<nav className="navbar">
// 			<div className="container">
// 				<div className="navbar-brand">
// 					<a
// 						className="navbar-item"
// 						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
// 					>
// 						<img src={gatsbyLogo} alt="Logo-1" />
// 						<img src={bulmaLogo} alt="Logo-2" />
// 					</a>
// 				</div>
// 				<div id="navbarMenuHeroA" className="navbar-menu">
// 					<div className="navbar-end">
// 						<span className="navbar-item">
// 							<a
// 								className="button is-danger is-inverted"
// 								href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
// 							>
// 								<span className="icon">
// 									<FaGithub size="fa-2x" />
// 								</span>
// 								<span>Download</span>
// 							</a>
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	</div>
// );

export default Navbar;
