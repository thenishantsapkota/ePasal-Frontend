import React from "react";

function BannerSection() {
  return (
    <section id="banners" className="section-p1">
      <div className="big-banners">
        <div className="big-banners-1">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at coro</span>
          <button className="banner-btn">Learn More</button>
        </div>
        <div className="big-banners-2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="banner-btn">Collection</button>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
