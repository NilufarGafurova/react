import komp from "./komp.png";
import plan from "./plan.png";
import phon from "./phon.png";
import './App.css';
import cat from "./cat.png";
import korzinka from "./korzinka2.jpg";


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="overwiev_pieg"> Overwiev Page</div>
        <div className="icons">
          <img className='komp_phone_plan' src={komp}/>
          <img className='komp_phone_plan' src={plan}/>
          <img className='komp_phone_plan' src={phon}/>
        </div>
        <div className="button_icon">
          <img className="cat" src={cat}/>
          <button className="btn1">Freee Download</button>
          <button className="delet">x</button>
        </div>
      </header>
      <header className="header2">
        <div className="menu">
          <div className="starts_bootstrap">Start Bootstrap</div>
          <div className="list">
          <a href="#" className="home">Home</a>
          <a href="#" className="about"> About</a>
          <a href="#"className="shop">Shop </a>
          </div>
         
        </div>
        <button className="button">
        <img className="korzinka" src={korzinka}/>
         <p className="cart">Cart</p>
         <p className="nol">0</p>

        </button>
      </header>
      <div className="middle_Page">
        <p className="Shop_in_style"> Shop in style</p>
        <p className="text1">With this shop hompeage template</p>
      </div>
      <div className="card_box">
        <div className="cards" >
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
      </div>
      <div className="cards" >
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        <div className="box">
          <div className="olcham">400 X 300</div>
          <p className="Fancy_Product">Fancy Product</p>
          <p className="price">$40.00 - $80.00</p>
          <button className="btn">View options</button>
        </div>
        </div>
     
    </div>
    <footer>
      <p>Copyright © Your Website 2022</p>
    </footer>
    </div>
  )
}

export default App;
