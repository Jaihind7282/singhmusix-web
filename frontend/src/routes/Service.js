function Service() {
  return (
    <>
      <div className="service-details">
        <h2>Our services</h2>
        <hr></hr>
        <div className="recording-service">
          <img
            src="images/panagiotis-falcos-3ELAAwo8zVQ-unsplash.jpg"
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
      <div className="service-details">
        <hr></hr>
        <div className="recording-service">
          <p className="record-content">
            <h4>Sound Design</h4>
            Bring your projects to life with our experts. we specialize in
            creating unique soundscapes that enhance your storytelling.
          </p>
          <p className="record-content">
            <h4>Music Lessons</h4>
            Discover new techniques, expand your musicality, and gain confidence
            in your abilities in a supportive environment.
          </p>
          <p className="record-content">
            <h4>Rehearsal Space</h4>
            Prepare for greatness in our versatile rehearsal rooms, equipped
            with everything you need to refine your sound.
          </p>
          <img
            src="images/gytis-bukauskas-28vTSxwQG0s-unsplash.jpg"
            className="record-image"
          />
        </div>
      </div>
    </>
  );
}

export default Service;
