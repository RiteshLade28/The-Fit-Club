import React from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo}></img>

      {(menuOpened === false && mobile == true) ? (
        <div
          style={{
            backgroundColor: "var -- appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : <ul className='header-menu'>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='home'
            // span={true}
            smooth={true}
          >Home</Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='programs'
            // span={true}
            smooth={true}
          >Programs</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='reasons'
            // span={true}
            smooth={true}
          >Why us</Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='plans'
            // span={true}
            smooth={true}
          >Plans</Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to='testimonials'
            // span={true}
            smooth={true}
          >Testimonials</Link>
        </li>
      </ul>
      }
      <img className='logo' src={Logo}></img>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>

  )
}
