import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
       <div className="text-container">
         <div className="row">
           <div className="two columns header-col">
             <h1><span>Client Testimonials</span></h1>
           </div>
           <div className="ten columns flex-container">
             <div className="flexslider">
               <ul className="slides">
                 <li>
                   <blockquote>
                     <p>I’m a pretty big fan of most Sci-Fi shooters, Mass Effect, Gears of War, Halo (My favourite). Gaming was sort of the beginning of my interest in computers and programming.
                     </p>
                     <cite>Gaming</cite>
                   </blockquote>
                 </li> {/* slide ends */}
                 <li>
                   <blockquote>
                     <p>
                     Growing up I was always a huge paleontology enthusiast, I watched all the BBC documentaries and owned many books that I read, multiple times. It never mattered what kind of creature it was, if it was ancient and gargantuan, I wanted to know more about it.
                     </p>
                     <cite>Paleontology</cite>
                   </blockquote>
                 </li> {/* slide ends */}
               </ul>
             </div> {/* div.flexslider ends */}
           </div> {/* div.flex-container ends */}
         </div> {/* row ends */}
       </div>  {/* text-container ends */}
     </section>
      </React.Fragment>
    );
  }
}
