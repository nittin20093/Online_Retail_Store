// import React from "react";
import "../styles/body.css";
import welcome_image from "../images/welcome_image.png";

// import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
// import {NavLink} from "react-router-dom";
// function Btnn() {
//   console.log("clicked");
//   const navigate = useNavigate();

//   // function handleClick() {
//     navigate("/login_page");
//   // }
// }

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="welcome_div">
          <div className="welcome_head">
            Welcome To
            <br />
            Our WholeSale Rate Store ..
          </div>
          <div className="welcome_desc">
            Bonjour! Ciao! Willkommen! Hello! Ohhh my goodness, we're so
            thrilled you decided to shop with us! Hats off on making an
            excellent decision! You're now officially in the loop to hear all
            about our awesome products, new releases and maybe even a deal or
            two. If that's not exciting, we don't know what is!{" "}
          </div>
          {/* <button component={Link} to='/login_page' className="shop_now_btn">Shop Now</button> */}
          <Link  to='/login_page' className="shop_now_btn">Shop Now</Link>
        </div>
        <img className="welcome_img" alt="??" src={welcome_image} />
      </div>
    </>
  );
}

export default Body;
