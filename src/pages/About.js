function About() {
  return (
    <section className="container page-section">
      <span className="eyebrow">GET TO KNOW US</span>
      <h1 className="page-title">About CAVMS</h1>
      <p className="lead">Campus Activities & Volunteer Management System is a student-focused platform designed to bring university communities closer together.</p>
      <div className="about-grid">
        <div className="about-panel"><span className="feature-icon">◎</span><h2>Our mission</h2><p>Make it easier for students to discover campus activities, connect with others, and participate in meaningful experiences.</p></div>
        <div className="about-panel"><span className="feature-icon">✦</span><h2>Our vision</h2><p>Create a connected campus where every student can find opportunities to learn, contribute, and belong.</p></div>
      </div>
      <h2 className="subheading">What we believe</h2>
      <p className="body-copy">University life is about more than classes. Events and volunteering help students develop skills, build friendships, and make a positive contribution to their community. CAVMS brings these opportunities together in one easy-to-use place.</p>
    </section>
  );
}

export default About;