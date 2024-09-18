import React from 'react';
import styles from './HomePage.module.css'; // Import your CSS module

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <header className={styles.header}>
        <h1>Welcome to JobHuntly</h1>
        <p>Your gateway to finding and posting jobs</p>
      </header>
      <section className={styles.infoSection}>
        <h2>Find Your Dream Job</h2>
        <p>
          Explore a variety of job listings tailored to your skills and preferences. Whether you're looking for full-time, part-time, or internships, we've got you covered.
        </p>
      </section>
      <section className={styles.infoSection}>
        <h2>Post a Job</h2>
        <p>
          Reach out to talented individuals by posting job openings on our platform. It's simple, quick, and effective in finding the right candidate for your needs.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
