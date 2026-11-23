export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88"
          alt="AZURE brand story"
        />
        <div>
          <span className="kicker">OUR PHILOSOPHY</span>
          <h1>
            Made for Your
            <br />
            <em>Everyday Evolution.</em>
          </h1>
        </div>
      </div>
      <div className="page-section about-content">
        <div className="story-grid">
          <div>
            <span className="kicker">THE STORY</span>
            <h2>
              Quiet confidence,
              <br />
              considered in every line.
            </h2>
          </div>
          <div>
            <p>
              AZURE began with a simple idea: clothing should feel as natural as
              it looks. We create considered essentials where function, form and
              feeling meet.
            </p>
            <p>
              Each piece is shaped around real movement, long-lasting materials
              and a quieter kind of modern style.
            </p>
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>2019</strong>
            <span>Founded</span>
          </div>
          <div>
            <strong>28</strong>
            <span>Trusted makers</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>Responsible materials</span>
          </div>
          <div>
            <strong>18</strong>
            <span>Markets worldwide</span>
          </div>
        </div>
        <div className="values">
          <article>
            <span>01</span>
            <h3>Quality</h3>
            <p>
              Premium fabrics selected for softness, durability and performance.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Purpose</h3>
            <p>
              Every detail earns its place. Nothing excessive, nothing
              overlooked.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Mindful</h3>
            <p>
              We build slowly, work closely and choose lower-impact processes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
