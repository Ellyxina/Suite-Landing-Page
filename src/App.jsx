import logo from "../src/assets/logo.svg";
import SecondaryBtn from "./components/SecondaryBtn";
import PrimaryBtn from "./components/PrimaryBtn";
import heroImg from "./assets/image-hero-portrait.webp";
import line1 from "./assets/pattern-curved-line-1.svg";
import cardImg from "./assets/image-jeremy-large.webp";
import line2 from "./assets/pattern-curved-line-2.svg";
import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import instagramIcon from "./assets/icon-instagram.svg";


export default function App() {
  return (
    <>
      <nav className="main-nav">
        <img src={logo} alt="suite logo" />
        <SecondaryBtn content="Request Beta Access"></SecondaryBtn>
      </nav>
      <section className="hero-section">
        <h1 className="typo-heading-XL">
          <div>A&nbsp;<span>super&nbsp;</span> 
            <span className="deco">
              <img src={line1} className="decoration-line-1"/>
              solution 
            </span>
          </div>
          <div>
            <p>for&nbsp;</p>
            <p>your&nbsp;</p>
            <span>business.</span>
          </div>  
        </h1>
        <p className="typo-body">Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
        <PrimaryBtn content="Request Beta Access"></PrimaryBtn>
        <img src={heroImg} alt="hero image with a phone" className="hero-img" />
        <article className="metrics">
          <div>
            <p>2K+</p>
            <p className="typo-heading-S uppercase text-grey">Companies</p>
          </div>
          <div>
            <p>8</p>
            <p className="typo-heading-S uppercase text-grey">Languages</p>
          </div>
          <div>
            <p>1.2M</p>
            <p className="typo-heading-S uppercase text-grey">Leads</p>
          </div>
        </article>
      </section>
      <section className="card-section">
        <img src={cardImg} alt="Jeremy Robinson" className="card-img"/>
        <img src={line2} className="decoration-line-2"/>
        <article className="card-text">
          <h2 className="typo-heading-L">It just <span>works.</span></h2>
          <p className="typo-quote">“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
          <h3 className="typo-heading-M uppercase">Jeremy Robinson</h3>
          <h4 className="typo-heading-S uppercase">CMO, Fylo</h4>
        </article>
      </section>
      <footer className="footer">
        <img src={logo} alt="suite logo" />
        <p>Copyright - Suite</p>
        <div>
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
        </div>
      </footer>
    </>
  );
}
