import React from 'react';

function Cta() {
  return (
    <section className="cta | padding-block-900 bg-accent-400 text-neutral-100">
      <div className="wrapper">
        <div className="even-columns vertical-align-center">
          <div>
            <p className="fs-primary-heading fw-bold">
              Simplify how your team works today.
            </p>
          </div>
          <div className="justify-self-end-md">
            <button className="button | button--white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
