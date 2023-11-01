import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import LearnImg from './img/learn-earn.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/Navbar';
import Logo from './img/logo.svg'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [top, setTop] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false`
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const options = {
    loop: false,
    margin: 30,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,

      },
      380: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      },
      1199: {
        items: 5
      }
    }
  }
  const options2 = {
    loop: false,
    margin: 30,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,

      },
      380: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      },
      1199: {
        items: 4
      }
    }
  }

  const options3 = {
    loop: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,

      },
      380: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1199: {
        items: 1
      }
    }
  }

  const truncate = function (str) {
    return str.length > 10 ? str.substring(0, 25) + "..." : str;
  }

  return (
    <main className="App">

      <Navbar />
      <section className='youtube' style={{ "padding": "50px 0 0 0" }}>
        <div className='container'>
          <OwlCarousel className='owl-theme text-white' loop margin={10} {...options}>
            <div className='course-item'>
              <img className='courseImg img-fluid' src={require('./img/yt.webp')} />
              <p class="course-item-para">Video</p>
              <p class="course-item-heading">{truncate('jhddddddddddddddddddddddddddddddddddddd')}</p>
            </div>
            <div className='course-item'>
              <img className='courseImg img-fluid' src={require('./img/yt.webp')} />
              <p class="course-item-para">Video</p>
              <p class="course-item-heading">{truncate('jhddddddddddddddddddddddddddddddddddddd')}</p>
            </div>
            <div className='course-item'>
              <img className='courseImg img-fluid' src={require('./img/yt.webp')} />
              <p class="course-item-para">Video</p>
              <p class="course-item-heading">{truncate('jhddddddddddddddddddddddddddddddddddddd')}</p>
            </div>
            <div className='course-item'>
              <img className='courseImg img-fluid' src={require('./img/yt.webp')} />
              <p class="course-item-para">Video</p>
              <p class="course-item-heading">{truncate('jhddddddddddddddddddddddddddddddddddddd')}</p>
            </div>
            <div className='course-item'>
              <img className='courseImg img-fluid' src={require('./img/yt.webp')} />
              <p class="course-item-para">Video</p>
              <p class="course-item-heading">{truncate('jhddddddddddddddddddddddddddddddddddddd')}</p>
            </div>
          </OwlCarousel>;
        </div>
      </section>
      <section className='top-courses' style={{ "padding": "30px 0 0 0" }}>
        <div className='container'>
          <h4 className='text-white mb-4'>Top Courses</h4>
          <OwlCarousel className='owl-theme text-white' loop margin={10} {...options2}>
            <div className='top-course-item'>
              <div className='d-flex'>
                <div className='pr-2 d-flex align-items-center'>
                  <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                </div>
                <div className='px-2 d-flex align-items-center'>
                  <div class="mt-2">
                    <h6 class="tc-head">Marius Petrakius</h6>
                    <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-course-item'>
              <div className='d-flex'>
                <div className='pr-2 d-flex align-items-center'>
                  <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                </div>
                <div className='px-2 d-flex align-items-center'>
                  <div class="mt-2">
                    <h6 class="tc-head">Marius Petrakius</h6>
                    <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-course-item'>
              <div className='d-flex'>
                <div className='pr-2 d-flex align-items-center'>
                  <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                </div>
                <div className='px-2 d-flex align-items-center'>
                  <div class="mt-2">
                    <h6 class="tc-head">Marius Petrakius</h6>
                    <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-course-item'>
              <div className='d-flex'>
                <div className='pr-2 d-flex align-items-center'>
                  <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                </div>
                <div className='px-2 d-flex align-items-center'>
                  <div class="mt-2">
                    <h6 class="tc-head">Marius Petrakius</h6>
                    <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-course-item'>
              <div className='d-flex'>
                <div className='pr-2 d-flex align-items-center'>
                  <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                </div>
                <div className='px-2 d-flex align-items-center'>
                  <div class="mt-2">
                    <h6 class="tc-head">Marius Petrakius</h6>
                    <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>;
        </div>
      </section>
      <section class="crypto-trade" style={{ "padding": "0" }}>
        <div class="container">
          <h1 class="ct-head text-white">Cryptocurrency Prices Today by Market Cap</h1>
          <p class="ct-para">Today's cryptocurrency global market capitalization is $1.31T, which increased by 0.12% in the last 24 hours. Learn More</p>
          <div class="row mb-3">
            <div class="col-lg-4">
              <div class = "stat-item">
                  <h3 class = "stat-head">Activity Center</h3>
                  <OwlCarousel className='owl-theme text-white' loop margin={10} {...options3}>
                <div className='top-course-item' style = {{"padding-left": 0}}>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='top-course-item'>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>;
              </div>
            </div>
            <div class="col-lg-4">
              <div class = "stat-item">
                  <h3 class = "stat-head">Activity Center</h3>
                  <OwlCarousel className='owl-theme text-white' loop margin={10} {...options3}>
                <div className='top-course-item' style = {{"padding-left": 0}}>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='top-course-item'>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>;
              </div>
            </div>
            <div class="col-lg-4">
              <div class = "stat-item">
                  <h3 class = "stat-head">Activity Center</h3>
                  <OwlCarousel className='owl-theme text-white' loop margin={10} {...options3}>
                <div className='top-course-item' style = {{"padding-left": 0}}>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='top-course-item'>
                  <div className='d-flex'>
                    <div className='pr-2 d-flex align-items-center'>
                      <img src={require("./img/how-to-avoid-rug-pulls.webp")} style={{ width: "80px" }} />
                    </div>
                    <div className='px-2 d-flex align-items-center'>
                      <div class="mt-2">
                        <h6 class="tc-head">Marius Petrakius</h6>
                        <p class="tc-para">NFT - Everything you need to know about non-fungible tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>;
              </div>
            </div>
          </div>
          <div class = "d-flex">
            <div>
                {/* <button class = "filter-btn">All Assets</button> */}
                {/* <button class = "filter-btn" onClick = {() => setTop(true)}>Gainers</button>
                <button class = "filter-btn" onClick = {() => setTop(false)}>Losers</button> */}
            </div>
          </div>
          <table className="table table-hover" style={{ "position": "relative" }}>
            <thead className='sticky-top text-white' style = {{"background": "#2b004a"}}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">20H %</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Volume</th>
                <th scope="col">Circulating Supply</th>
              </tr>
            </thead>
            <tbody class="text-white" style = {{fontWeight: 700}}>
              {coins.map((coin, index) => {
                let { id, name, image, current_price, price_change_percentage_24h, market_cap, total_volume, circulating_supply } = coin;
                image = image.split('?')[0];
                return (
                  <tr>
                    <th scope="row" class = "py-4">{index + 1}</th>
                    <td class = "py-4"><img src={image} style={{ "width": "30px", "margin-right": "5px" }} /> {name}</td>
                    <td class = "py-4">${current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    {price_change_percentage_24h > 0 ? <td class = "py-4" style = {{"color": "#19c283", "font-weight": 800}}>{"+" + price_change_percentage_24h.toFixed(2)}</td>: <td class = "py-4" style = {{"color": "#ff3d64", "font-weight": 800}}>{price_change_percentage_24h.toFixed(2)}</td>}
                    <td class = "py-4">{market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td class = "py-4">{total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td class = "py-4">{circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section style = {{background: "purple", "margin-top": "-20px", "padding": "200px 0"}}>
        <div class="container text-center text-white">
          <h1 class = "achieve-head">#1 Crypto Educator</h1>
          <p class = "achieve-para mt-4">Build crypto skills with courses, data, certificates, and degrees from leading blockchain companies</p>
          <button class = "achieve-btn mt-4">Enter the Learnoverse</button>
        </div>
      </section>
      <section style = {{"background": "#0d0d0d"}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class = "text-white">We are educating millions of cryptocurrency learners with 21,000+ crypto courses, blockchain projects, coins, and tokens</h1>
              <p style = {{"color": "#9f9e9e", fontSize: "25px", fontWeight: 300}}>As the leading gamified learning crypto education platform in the world, we focus on providing you with tracking information and in-depth data on the largest number of different digital assets, cryptocurrency prices, and other metrics. With the help of our Cryptocurrency Tracker, you can learn and earn crypto by tracking and analyzing the data of over 21,000+ different crypto projects, as well as the coins & tokens behind them.</p>
              <div class="row text-white">
                <div class="col-lg-4">
                  <h1>21,000+</h1>
                  <p style = {{fontWeight: 700, "color": "#9884fb", fontSize: "20px"}}>Crypto Tracked</p>
                </div>
                <div class="col-lg-4">
                  <h1>21,000+</h1>
                  <p style = {{fontWeight: 700, "color": "#9884fb", fontSize: "20px"}}>Crypto Tracked</p>
                </div>
                <div class="col-lg-4">
                  <h1>21,000+</h1>
                  <p style = {{fontWeight: 700, "color": "#9884fb", fontSize: "20px"}}>Crypto Tracked</p>
                </div>
              </div>
            </div>
            <div class = "col-lg-6 d-flex align-items-center justify-content-center">
              <img src = {require('./img/Laptop.webp')} class = "img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section style = {{background: "#0d0d0d", "border-top": "0.5px solid #8e7ceb"}}>
        <div class="container">
          <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center p-3">
              <img src={require('./img/subscribe.webp')} class="img-fluid" />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h1 class = "text-white" style = {{margin: 0}}>Subscribe to the Early Bird List!</h1>
                <p style = {{"color": "#a89dac", "margin": 0}}>Be the first in row to access exclusive features & unlock restricted perks.</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div>
              <input type="email" placeholder="Enter Your Email Here" style={{ "width": "400px", "padding": "8px 10px" }} />
            </div>
            <div class = "pl-2">
              <button class="btn btn-danger py-2 px-4">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section style = {{background: "#25003e"}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <img src={LearnImg} class="img-fluid" />
            </div>
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div>
              <h1 style = {{color: "#e83f82", fontSize: "30px", fontWeight: 700}}>LEARN & EARN CRYPTO</h1>
              <p style = {{width: "80%"}} className='text-white'>Get rewarded with free crypto simply for learning about promising crypto projects</p>
              <ul style = {{listStyleType: "none"}}>
                <li style = {{marginLeft: "-40px", marginTop: "20px", fontSize: "20px", color: "#fff"}}><span style = {{fontWeight: 700}}>&#10003;</span> Watch short courses</li>
                <li style = {{marginLeft: "-40px", marginTop: "20px", fontSize: "20px", color: "#fff"}}><span style = {{fontWeight: 700}}>&#10003;</span> Watch short courses</li>
                <li style = {{marginLeft: "-40px", marginTop: "20px", fontSize: "20px", color: "#fff"}}><span style = {{fontWeight: 700}}>&#10003;</span> Watch short courses</li>
              </ul>
              <button class = "achieve-btn mt-4">Enter the Learnoverse</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer style = {{"padding": "30px 0 0 0"}}>
        <div class="container">
          <div class="footer-wrapper">
            <div class="row">
              <div class="col-lg-5">
                <img src={Logo} style = {{width: "200px"}} alt="" />
                <div class="footer-desc pt-3">
                  <p>BlackFort group of companies DO NOT PROVIDE ANY financial services,
                    investment advice or any type of investment services.</p>
                  <p>
                    BlackFort Wallet & Exchange by Blackfort Tech Estonia OÜ. Registered address
                    Lõkke Tn 4, 10122,
                    Tallinn, Harju county, Estonia </p>

                  <p>BlackFort Exchange Network by BlackFort INC,
                    P.O.Box 4342, Road Town,Tortola, British Virgin Islands
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-lg-4">
                    <h5 class="footer-list-head">Links</h5>

                    <ul class="footer-list">
                      <li><a href="/">Home</a></li>
                      <li><a href='/download'>Downloads</a></li>
                      <li><a href='/referral'>Referrals</a></li>
                      <li><a href='/fees'>Fees</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <h5 class="footer-list-head">Company</h5>

                    <ul class="footer-list">
                      <li><a href='/terms'>Terms Of Services</a></li>
                      <li><a href='/privacy'>Privacy & Policies</a></li>
                      <li><a href='/kyc'>KML & KYC Policy</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <h5 class="footer-list-head">Learn & Support</h5>

                    <ul class="footer-list">
                      <li><a href="#">Telegram Channel</a></li>
                      <li><a href="#">Medium - Blogs</a></li>
                      <li><a href="#">FAQ’s & Support</a></li>
                      <li><a href="#">Tutorials ( Comming Soon )</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div>
              <p class="my-auto">© 2020-2022 All Rights Reserved. BlackFort Group of companies.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
