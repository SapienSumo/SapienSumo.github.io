import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About Me</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#testimonials">Interests</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Paul Aliu</h1>
            <h3>I'm a UK based <span>Junior Software Engineer</span>, Gamer and Tech enthusiast. Learn more <a className="smoothscroll" href="#about">About Me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://twitter.com/GigamoraG"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/paul-aliu/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/SapienSumo"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}
