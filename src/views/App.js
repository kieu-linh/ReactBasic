import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/images/logo1.png';
import cart from '../assets/images/icon_hovercart.webp';


function App() {
  return (
    <div className="header-top">
      <div className="container-fluid">
      </div>
      <div className="container">
        <div className="content-header">
          <div className="content-top">
            <div className="row">
              <div className="col-lg-6">
                <span className="welcome_text" > Chào mừng bạn đến với thế giới sách Flower Book!</span>
              </div>
              <div className="col-lg-6">
                <div className="header-right">
                  {/* <div className="header-right header-right d-flex justify-content-center"> */}
                  <ul className="menu-list">
                    <li className="li-item">
                      <a href="#">Thẻ quà tặng</a>
                    </li>
                    <li className="li-item">
                      <a href="#">Thành viên cửa hàng & Sự kiện</a>
                    </li>
                    <li className="li-item">
                      <a href="#">Trợ giúp</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content-main">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="head-search">
                  <div className="headtop-search">
                    <ul className="menu-list p-0">
                      <li className="li-item">
                        <a href="#">Ưu đãi đối tác</a>
                      </li>
                      <li className="li-item">
                        <a href="#">Phiếu quà tặng</a>
                      </li>
                      <li className="li-item">
                        <a href="#">Khuyến mãi hot</a>
                      </li>
                    </ul>
                  </div>
                  <form action="#" method="get">
                    <input type="text" name="search" placeholder="Tìm kiếm" />
                    <button type="submit" className="btn-search">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cart">
                  <a href="#">
                    <img src={cart} alt="cart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello React
    //     </p>
    //     <FormComponent />

    //   </header>

    // </div>
  );
}

export default App;
