import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="service-details">
        <h2>About Us</h2>
        <hr></hr>
        <div className="recording-service">
          <p className="record-content">
            <h4>Our Story</h4>
            Welcome to Singhmusix, where passion meets professionalism in the
            world of music. Founded in 2024 by Jai Singh, our studio was born
            from a shared love of music and a desire to create an inspiring
            space for artists of all kinds. Located in Barbigha, we’ve become a
            hub for creativity, collaboration, and innovation.
          </p>
          <img
            src="images\techivation-QkYp37lEc-o-unsplash.jpg"
            className="record-image"
          />
          <p className="record-content">
            <h4>Our Mission</h4>
            At Singhmusix, our mission is to empower musicians to bring their
            artistic visions to life. We believe that every artist has a unique
            story to tell, and we’re here to provide the tools, expertise, and
            support to help you share that story with the world. Whether you’re
            an emerging talent or an established artist, our goal is to elevate
            your sound and inspire your creativity.
          </p>
        </div>
      </div>
      <div className="service-details">
        <h2>Join Our Community</h2>
        <hr></hr>
        <div className="recording-service">
          <p className="record-content">
            <h4>Sing With Singh Musix</h4>
            We invite you to become part of the singhmusix's family. Whether
            you're looking to record your first track, refine your sound, or
            collaborate with fellow artists, we’re here to support you every
            step of the way. Let’s create something amazing together!
          </p>
        </div>
      </div>
      <div className="about-container-2">
        <h1>Sing With Singh Musix</h1>
        <p>
          Welcome to Singhmusix! We bring your musical vision to life. Our
          state-of-the-art studio caters to solo artists, bands, and producers.
          Explore our services and let’s create professional-quality music
          together!
        </p>
        <Link to="/register" className="button-on-image">
          <h2>Register Now</h2>
        </Link>
      </div>
    </>
  );
}

export default About;
