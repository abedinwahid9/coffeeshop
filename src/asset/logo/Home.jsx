import classes from "../style/section.module.css";

export default function Home() {
  return (
    <>
      <section className={classes.section1}>
        <div className={classes.queto}>
          <h1>
            Every time is coffee time, and there is no reason for not taking it
            anywhere
          </h1>
          <h6>
            Many people have embraced coffee, and it is one thing that keep them
            alert in their activities. According to Sethi, being the second most
            traded commodity, after petroleum, coffee is a mainstay in the
            modern diet.
          </h6>
        </div>
      </section>
      <section className={classes.section2}>
        <a href="./items.html">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h1>Cappucino</h1>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </div>
              <div className="swiper-slide">
                <h1>latte</h1>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </a>
      </section>
      <section className={classes.section3} id="contact">
        <div className="contact">
          <h1>CONTACT US</h1>
          <form className="accountSection" action="#">
            <div className="inputText">
              <input
                type="email"
                placeholder="enter your valid email address"
              />
              <span className="material-icons-outlined"> alternate_email </span>
            </div>
            <div className="inputText">
              <input type="password" placeholder="enter your password" />
              <span className="material-icons-outlined"> lock </span>
            </div>
            <div className="textarea">
              <textarea placeholder="enter you comment"></textarea>
            </div>

            <div className="button">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
      <footer className={classes.footer} id="about">
        <div className="socialInfo">
          <div className="miniLogo">
            <a href="">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <div className="miniLogo">
            <a href="">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="miniLogo">
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="miniLogo">
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="miniLogo">
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
