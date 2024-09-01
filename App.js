import './style.css';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import Online from './images/logo.svg';
import register_logo from './images/register_logo.svg';

const brand = "On-Line";

let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let mainpage = document.getElementById('main_page');
let registerpage = document.getElementById('register_page');
let Enter_information = document.getElementById('Enter_information');

function register() {
    //mainpage.style.opacity = `0%`;
    //registerpage.style.opacity = `100%`;
    //document.body.style.overflow = `hidden`;
    //document.body.style.backgroundColor = `#DFF9FF`;

    mainpage.style.opacity = `0%`;
    registerpage.style.opacity = `100%`;
    document.body.style.overflow = `hidden`;
    document.body.style.backgroundColor = `#DFF9FF`;
}

function enterEmail() {
  firstname.style.display = `none`;
  lastname.style.display = `none`;
  Enter_information.innerHTML = `Enter your Email and Password please!!`;
  email.style.display = `flex`;
  password.style.display = `flex`;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div id='main_page' className='main_page'>
        <div className='topbar' id='topbar'>
          <Menu2/>
          <Menu/>
          <div className='sign'>
            <button id='register' class="btn btn-danger me-md-2" type="button" onClick={register}>Register</button>
            <button class="btn btn-primary" type="button">Login</button>
          </div>
        </div>

        <div id='logo' className='logo'>
          <img src={Online}></img>
        </div>

        <div id='search' class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
          <button class="btn btn-primary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div><br></br>

        <div className='bottom'>
          <div className='website'>
          <h4 id='website'>About</h4><br></br>
          <a id='a'>developer</a><br></br>
          <a id='a'>how to use?</a><br></br>
          <a id='a'>contact</a><br></br>
          <a id='a'>Questions</a>
          </div>

          <div className='categories'>
          <h4 id='Categories'>Categories</h4><br></br>
          <a id='a'>Home supplies</a><br></br>
          <a id='a'>school supplies</a><br></br>
          <a id='a'>socks</a><br></br>
          <a id='a'>accessories</a>
          </div>
        </div>
      </div>




      <div className='register_page' id='register_page'>

          <img id='register_logo' src={register_logo}></img>

        <div id='warning' class="alert alert-warning" role="alert">
        <mark>warning: </mark>using fake account could block you from the website
        </div>

        <div id='names'>

          <h4 id='Enter_information'> Enter Your name please! </h4><br></br>
      
        <div id='firstname' class="form-floating mb-3">
          <input type="input" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Firstname</label>
        </div>
        <div id="lastname" class="form-floating">
          <input type="input" class="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingInput">Lastname</label>
        </div>

        <div id='email' class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Email</label>
        </div>
        <div id="password" class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Password</label>
        </div>

        <button className='btn btn-primary' id="submitNames" onClick={enterEmail}>Submit</button>

        </div>

      </div>

      </header>
    </div>
  );
}

export default App;
