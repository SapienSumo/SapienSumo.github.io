import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="https://i.imgur.com/4JOUpqM.jpg?1" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
            Hi, my name's Paul and I’ve always had a strong fascination with things of a scientific nature and more specifically, over the past few years Software Engineering and Artificial Intelligence. Pursuing a career in programming has always been something I’ve wanted to do. It is a field that is always changing and striving towards bigger and better ideas and because of that, it offers so much opportunity for creativity.

            I believe that my love for problem solving and willingness to improve is something that will allow me to overcome any obstacle/task set before me. My goal is to become a great Software Developer that can use new and evolving technologies that will bring positive and useful changes to the field of Computer Sciences at large.
            </p>

            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section>
      </React.Fragment>
    );
  }
}
