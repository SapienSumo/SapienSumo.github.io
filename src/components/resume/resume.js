import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            Front End: HTML, CSS, SCSS and Bulma
            <br />
            <br />
            Back End: Python
            <br />
            <br />
            Languages:  JavaScript, Node.js, React, ES6, MongoDB, Express, JSON, jQuery
            <br />
            <br />
            Compilers: npm, Yarn
            <br />
            <br />
            Methodologies: CRUD methods, Test-Driven Development(Mocha, Chai), Trello
            <br />
            <br />
            Tools: inSomnia, Git and GitHub
            <br />
            <br />
            Design: mobile-first design principles, responsive web design.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>JavaScript</em></li>
                <li><span className="bar-expand html5" /><em>React</em></li>
                <li><span className="bar-expand jquery" /><em>CSS</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}
