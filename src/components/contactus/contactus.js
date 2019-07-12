import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <h2>Contact Details</h2>
            <p className="address">
              <span>paul.iyiola.aliu@gmail.com<br />
                GitHub: github.com/SapienSumo
              </span><br />
              <span>Linkedin: linkedin.com/paul-aliu</span><br />
              <span>Twitter: twitter.com/GigamoraG</span>
            </p>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
