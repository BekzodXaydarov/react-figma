import "./Footer.css"

export interface FooterI {}

const Footer:React.FC<FooterI> = () => {
  return (
    <footer className="container-padding">
      <div className="footer-section">
        <h1>Listee Travel</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="icons">
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
        <li className="list-title">About</li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">News & Blogs</a>
        </li>
        <li>
          <a href="#">Help & Supports</a>
        </li>
      </ul>
      <ul>
        <li className="list-title">Company</li>
        <li>
          <a href="#">How we work</a>
        </li>
        <li>
          <a href="#">Terms of service</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
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