import React from 'react';
import "./Blog.scss"

const Blog = () => {
    return (
      <div className="header-text">
        <h1>Blog</h1>
<div className="blog-post">
<div class="grid">
  <div class="grid__item">
    <div class="card"><img class="card__img" src="https://i.ibb.co/N1TRfc0/1-ffn-8-KUw-Jzhc-Du-QP5a4oow.jpg" alt="Snowy Mountains"/>
      <div class="card__content">
        <h1 class="card__header">Array in javascript</h1>
        <p class="card__text">Array is a data structure that contains a group of elements. JS arrays can contain...</p>
        <a class="card__btn" href="https://morshed247.medium.com/array-ee1dd2d53532" target="_blank" rel="noreferrer">Explore <span>&rarr;</span></a>
      </div>
    </div>
  </div>
  <div class="grid__item">
    <div class="card"><img class="card__img" src="https://i.ibb.co/pfC3F9S/1-C4u-EKBan-ML9-Q8q5-4-HV3-Q.jpg" alt="Desert"/>
      <div class="card__content">
        <h1 class="card__header">Data type</h1>
        <p class="card__text">Spread operator (…)is a smart addition in JavaScript of ES6. Spread operator can be used..</p>
        <button class="card__btn">Explore <span>&rarr;</span></button>
      </div>
    </div>
  </div>
  <div class="grid__item">
    <div class="card"><img class="card__img" src="https://i.ibb.co/98K1N4m/cover-a1d5b40.png" alt="Canyons"/>
      <div class="card__content">
        <h1 class="card__header">Basic React</h1>
        <p class="card__text">React is declarative, efficient, flexible for building user interfaces..</p>
        <button class="card__btn">Explore <span>&rarr;</span></button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    );
};

export default Blog;