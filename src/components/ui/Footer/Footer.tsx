import "./Footer.css"

export interface FooterI { }

const Footer: React.FC<FooterI> = () => {
  return (
    <footer className="container-padding">
      <div className="footer-section">
        <h1 data-aos="fade-right">Listee Travel</h1>
        <p data-aos="fade-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="icons" data-aos="fade-right">
          <a href="#">
            <img src="/svgs/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="/svgs/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="/svgs/youtube.svg" alt="" />
          </a>
          <a href="#">
            <img src="/svgs/twitter.svg" alt="" />
          </a>
        </div>
      </div>
      <ul>
        <li className="list-title" data-aos="fade-up">About</li>
        <li data-aos="fade-up">
          <a href="#">Menu</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">Features</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">Features</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">News & Blogs</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">Help & Supports</a>
        </li>
      </ul>
      <ul>
        <li className="list-title" data-aos="fade-up">Company</li>
        <li data-aos="fade-up">
          <a href="#">How we work</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">Terms of service</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">Pricing</a>
        </li>
        <li data-aos="fade-up">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <ul>
        <li className="list-title">Contact Us</li>
        <li>
          <p>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </p>
        </li>
        <li>
          <p>
            +1 202-918-2132
          </p>
        </li>
        <li>
          <p>
            listeetravel@mail.com
          </p>
        </li>
        <li>
          <p>
            www.listeetravel.com
          </p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer