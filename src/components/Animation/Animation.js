import React from 'react';
import './Animation.css';
import Typical from 'react-typical'
const Animation = () => {
    return (
        <div>
  <div class="container-fluid">

  <div class="background">
     <div class="cube"></div>
     <div class="cube"></div>
     <div class="cube"></div>
     <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>

 <header>
    <div class="logo col-sm-12">
    <h1 >This is <span>Morshed</span></h1>
         <h1 className='customize'> I'm <span className='ml-4 text-light'> A </span>
              <Typical
        loop={Infinity }
        steps={[ 
          'Junior MERN Web Developer', 2000,1000,
          'Web Designer', 2000,1000,
          'React JS Developer', 2000,1000,
          'Javascript Developer', 2000,1000
        ]}
        wrapper="b"
      />
         </h1>
        <br/>
        <br/>
        <a className="btn btn-light" href="#About">Know more</a>
        </div>
</header>
   </div>
   </div>
    );
};

export default Animation;