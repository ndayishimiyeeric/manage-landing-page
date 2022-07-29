import NumberedItem from './NumberedItem';
import data from './data';

function Hero() {
  return (
    <section className="padding-block-900">
      <div className="wrapper">
        <div className="even-columns">
          <div className="flow">
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
            <ul className="numbered-items | flow" role="list">
              {data &&
                data.map((item) => <NumberedItem key={item.id} data={item} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
