import illustrationIntro from '../../../assets/illustration-intro.svg';

function Showcase() {
  return (
    <section>
      <div className="container">
        <div className="even-columns">
          <div>
            <h1 className="fs-primary-heading fw-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button">Get Started</button>
          </div>
          <div>
            <img src={illustrationIntro} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
