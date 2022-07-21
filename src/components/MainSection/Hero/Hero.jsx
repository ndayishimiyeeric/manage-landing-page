import NumberedItem from './NumberedItem';

function Hero() {
  return (
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div>
            <h2 className="fs-secondary-heading fw-bold">
              What’s different about Manage?
            </h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div>
            <ul className="numbered-items" role="list">
              <NumberedItem />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
