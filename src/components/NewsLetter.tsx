function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter-text">
        <h3>Sign Up For Newsletters</h3>
        <h5>
          get e-mail updates about our latest shop and{" "}
          <span>special offers</span>
        </h5>
      </div>
      <div className="form">
        <input
          type="email"
          placeholder="Your email address"
          id="email-address-input"
        />
        <button>Sign Up</button>
      </div>
    </section>
  );
}

export default Newsletter;
