import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
       <div className="row">
         <div className="twelve columns collapsed">
           <h1>MY PROJECTS</h1>
           {/* portfolio-wrapper */}
           <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
             <div className="columns portfolio-item">
               <div className="item-wrap">
                 <a href="#modal-01" title>
                   <img alt src="https://i.imgur.com/xkZZQWM.png" />
                   <div className="overlay">
                     <div className="portfolio-item-meta">
                       <h5>Ghosts & Ghouls</h5>
                       <p>Project: 01</p>
                     </div>
                   </div>
                   <div className="link-icon"><i className="icon-plus" /></div>
                 </a>
               </div>
             </div> {/* item end */}
             <div className="columns portfolio-item">
               <div className="item-wrap">
                 <a href="#modal-02" title>
                   <img alt src="https://imgur.com/r7WXITQ.png" />
                   <div className="overlay">
                     <div className="portfolio-item-meta">
                       <h5>V.E.P</h5>
                       <p>Project: 02</p>
                     </div>
                   </div>
                   <div className="link-icon"><i className="icon-plus" /></div>
                 </a>
               </div>
             </div> {/* item end */}
             <div className="columns portfolio-item">
               <div className="item-wrap">
                 <a href="#modal-03" title>
                   <img alt src="https://i.imgur.com/hfsvMRC.png" />
                   <div className="overlay">
                     <div className="portfolio-item-meta">
                       <h5>Crush</h5>
                       <p>Project: 03</p>
                     </div>
                   </div>
                   <div className="link-icon"><i className="icon-plus" /></div>
                 </a>
               </div>
             </div> {/* item end */}
             <div className="columns portfolio-item">
               <div className="item-wrap">
                 <a href="#modal-04" title>
                   <img alt src="https://i.imgur.com/YyPBHk4.jpg" />
                   <div className="overlay">
                     <div className="portfolio-item-meta">
                       <h5>Apochrypha</h5>
                       <p>Project: 04</p>
                     </div>
                   </div>
                   <div className="link-icon"><i className="icon-plus" /></div>
                 </a>
               </div>
             </div> {/* item end */}
            </div>
          </div>
         <div id="modal-01" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="https://i.imgur.com/J6Freez.png" alt />
           <div className="description-box">
             <h4>Project-One (JavaScript Snake Game)</h4>
             <p>
             My first ever project at GA was my own take on the traditional mobile game snake, the goal during this project was to ensure the player had the ability to eat, grow and die upon contact with either him/herself or with map’s perimeter.
             <br />
             (Solo-Project Duration: 1 week / Built with: JavaScript, HTML, SCSS)
             </p>
             <span className="categories"><i className="fa fa-tag" />Software Engineering Immersive, Gaming</span>
           </div>
           <div className="link-box">
             <a href="https://sapiensumo.github.io/SEI-Project-1/">Play!</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-01 End */}
         <div id="modal-02" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
           <div className="description-box">
             <h4>Project-Two (V.E.P)</h4>
             <p>
             Project two was a little more challenging than other projects, as there was a much shorter time limit and much work that needed to be done to reach MVP (minimum viable product). The aim here was to create a music search engine, that would allow you to find any song, album or genre of music, using external APIs to find specific songs.
             <br />
             (Group-Project Duration: 2 days / Built with: JavaScript, React, SCSS)
             </p>
             <span className="categories"><i className="fa fa-tag" />Software Engineering Immersive, Music Search Engine</span>
           </div>
           <div className="link-box">
             <a href="https://sapiensumo.github.io/SEI-Project-02/#/">V.E.P</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-02 End */}
         <div id="modal-03" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="https://i.imgur.com/49I5gke.png" alt />
           <div className="description-box">
             <h4>Project-Three (Crush)</h4>

             <p>
             In this project, the aim was to create a dating service that you could use to find viable matches by gender preference, age and location. Once the user found a match, they would then be able to leave a comment on the profile of the user they matched with. I focused mainly on the front-end and styling aspect of things, including the homepage, navbar, user profiles, loading screens and about us page.
            <br />
            (Group-Project Duration: 1 week / Built with: JavaScript, React, SCSS)
             <br />
             github.com/Sensei3k/SEI-PROJECT-03(README)
             </p>

             <span className="categories"><i className="fa fa-tag" />Software Engineering Immersive, Dating App</span>
           </div>
           <div className="link-box">
             <a href="http://crush-sei.herokuapp.com/#/">CRUSH</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-03 End */}
         <div id="modal-04" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="https://i.imgur.com/sO3lCWv.jpg" alt />
           <div className="description-box">
             <h4>Apochrypha</h4>
             <p>Project-Four (Apochrypha)

             My fourth project was my take on online libraries, my goal was to create an app that you could use to find any book you were looking for and then bookmark them on your own personal profile and reference them later. I had a week to work on this project, using Python to build the backend and React on the front.
             <br />
             (Solo-Project Duration: 1 week / Built with: JavaScript, Python, React, SCSS and Node.js)
             <br />
             github.com/SapienSumo/SEI-Project-4/blob/master/README.md (README)

             </p>
             <span className="categories"><i className="fa fa-tag" />Software Engineering Immersive, Online Library</span>
           </div>
           <div className="link-box">
             <a href="https://apochrypha.herokuapp.com/#/">Apochrypha</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-04 End */}
         <div id="modal-05" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
           <div className="description-box">
             <h4>Farmer Boy</h4>
             <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
             <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
           </div>
           <div className="link-box">
             <a href="http://www.behance.net">Details</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-05 End */}
         <div id="modal-06" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
           <div className="description-box">
             <h4>Girl</h4>
             <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
             <span className="categories"><i className="fa fa-tag" />Photography</span>
           </div>
           <div className="link-box">
             <a href="http://www.behance.net">Details</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-06 End */}
         <div id="modal-07" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
           <div className="description-box">
             <h4>Origami</h4>
             <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
             <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
           </div>
           <div className="link-box">
             <a href="http://www.behance.net">Details</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-07 End */}
         <div id="modal-08" className="popup-modal mfp-hide">
           <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
           <div className="description-box">
             <h4>Retrocam</h4>
             <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
             <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
           </div>
           <div className="link-box">
             <a href="http://www.behance.net">Details</a>
             <a className="popup-modal-dismiss">Close</a>
           </div>
         </div>{/* modal-01 End */}
       </div> {/* row End */}
     </section>
      </React.Fragment>
    );
  }
}
