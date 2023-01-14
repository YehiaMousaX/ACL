import React from 'react';
import './landingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our Online Courses</h1>
      </header>
      <main>
        <section className="featured-courses">
          <h2>Featured Courses</h2>
          <div className="featured-courses-container">
            <article className="featured-course">
              <img src="/images/course1.jpg" alt="Course 1" />
              <h3>Course 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim efficitur nisi, et fermentum magna pellentesque vel. Aliquam erat volutpat.</p>
              <button>Learn More</button>
            </article>
            <article className="featured-course">
              <img src="/images/course2.jpg" alt="Course 2" />
              <h3>Course 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim efficitur nisi, et fermentum magna pellentesque vel. Aliquam erat volutpat.</p>
              <button>Learn More</button>
            </article>
            <article className="featured-course">
              <img src="/images/course3.jpg" alt="Course 3" />
              <h3>Course 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim efficitur nisi, et fermentum magna pellentesque vel. Aliquam erat volutpat.</p>
              <button>Learn More</button>
            </article>
          </div>
        </section>
        <section className="categories">
          <h2>Course Categories</h2>
          <div className="categories-container">
            <article className="category">
              <img src="/images/category1.jpg" alt="Category 1" />
              <h3>Category 1</h3>
            </article>
            <article className="category">
              <img src="/images/category2.jpg" alt="Category 2" />
              <h3>Category 2</h3>
            </article>
            <article className="category">
              <img src="/images/category3.jpg" alt="Category 3" />
              <h3>Category 3</h3>
            </article>
            <article className="category">
              <img src="/images/category4.jpg" alt="Category 4" />
              <h3>Category 4</h3>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright 2021 Our Online Courses</p>
      </footer>
    </div>
  );
}

export default LandingPage;
