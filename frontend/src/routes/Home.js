import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div class="image-container">
        <img
          src="images\jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"
          className="home-image"
        />

        <div className="content-on-image">
          <h1>Sing With Singh Musix</h1>
          <p className="text-on-image">
            Welcome to Singhmusix! We bring your musical vision to life. Our
            state-of-the-art studio caters to solo artists, bands, and
            producers. Explore our services and let’s create
            professional-quality music together!
          </p>
          <Link to="/register" className="button-on-image">
            <h2>Register Now</h2>
          </Link>
        </div>
      </div>
      <div className="homepage-details">
        <h4>Welcome to Singhmusix!</h4>
        <p>
          We bring your musical vision to life. Our state-of-the-art studio
          caters to solo artists, bands, and producers. Explore our services and
          let’s create professional-quality music together!
        </p>
      </div>
      <div className="service-details ">
        <h2>Our services</h2>
        <hr></hr>
        <div className="recording-service">
          <img
            src="images\sincerely-media-rLySNDRKYcw-unsplash.jpg"
            className="record-image"
          />
          <p className="record-content">
            <h4>recording</h4>
            Capture your sound with our high-quality recording equipment and
            experienced engineers who are passionate about music.
          </p>
          <p className="record-content">
            <h4>Mixing & Mastering</h4>
            Elevate your tracks with professional mixing and mastering services
            that ensure your music shines on every platform.
          </p>
          <p className="record-content">
            <h4>Songwriting & Production</h4>
            Collaborate with our talented producers and songwriters to refine
            your ideas and craft unforgettable songs.
          </p>
        </div>
      </div>

      <div className="service-details on-desktop">
        <h2>Why Choose Us?</h2>
        <hr></hr>
        <div className="recording-service">
          <p className="record-content">
            <h4>Experienced Team</h4>
            Our team of dedicated professionals has a wealth of experience
            across genres, ready to guide you through every step of the creative
            process.
          </p>
          <p className="record-content">
            <h4>Top-of-the-Line Equipment</h4>
            Work with the latest technology and gear to ensure your sound is
            nothing short of exceptional.
          </p>
          <p className="record-content">
            <h4>Inspiring Atmosphere</h4>
            Our studio is designed to inspire creativity and foster
            collaboration, making it the perfect space for artists of all
            levels.
          </p>
          <img
            src="images\techivation-QkYp37lEc-o-unsplash.jpg"
            className="record-image"
          />
        </div>
      </div>
      <div className="service-details on-mobile">
        <h2>Why Choose Us?</h2>
        <hr></hr>
        <div className="recording-service">
          <img
            src="images\techivation-QkYp37lEc-o-unsplash.jpg"
            className="record-image"
          />
          <p className="record-content">
            <h4>Experienced Team</h4>
            Our team of dedicated professionals has a wealth of experience
            across genres, ready to guide you through every step of the creative
            process.
          </p>
          <p className="record-content">
            <h4>Top-of-the-Line Equipment</h4>
            Work with the latest technology and gear to ensure your sound is
            nothing short of exceptional.
          </p>
          <p className="record-content">
            <h4>Inspiring Atmosphere</h4>
            Our studio is designed to inspire creativity and foster
            collaboration, making it the perfect space for artists of all
            levels.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
