import React, { Component, createRef } from 'react';
import style from "./Nav.module.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      sticky: false,
    };
    this.navbarRef = createRef();
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    this.navbarRef.current.classList.toggle(style.active);
  };

  closeMenu = () => {
    this.setState({ clicked: false });
    this.navbarRef.current.classList.remove(style.active);
  };

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav
        id={style.Nav}
        className={this.state.sticky ? style.sticky : ''}
      >
        <a href="" id={style.name}>
          <img src={require("./Media/preview.png")} alt="" /> Akash V
        </a>
        <div>
          <ul ref={this.navbarRef} id={style.navbar}>
            <li><a href="#home" onClick={this.closeMenu}>Home</a></li>
            <li><a href="#about" className={style.active} onClick={this.closeMenu}>Education</a></li>
            <li><a href="#skills" onClick={this.closeMenu}>Skills</a></li>
            <li><a href="#project" onClick={this.closeMenu}>Project</a></li>
            <li><a href="#contact" onClick={this.closeMenu}>Contact Me</a></li>
          </ul>
        </div>
        <div id={style.mobile}>
          <i
            id={style.bar}
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            onClick={this.handleClick}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
