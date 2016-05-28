import React from 'react';
import Link from 'react-router/lib/Link';

const NavItem = props => <Link to={ props.to }>

  <div className="nav-item">
    {/*<img src={ props.icon } />*/}
    <div>{ props.title }</div>
  </div>
</Link>;

const Header = React.createClass({
  componentDidMount() {
    /*
     * The toggle button is handled by simple inlined JS so that it doesn't
     * depend on React being loaded. But then React loads and replaces the DOM
     * and blows up the existing handlers, so rebind here.
     */
     bindNavToggle();
   },

  render() {
    return <header id="site-header">
      <nav className='main-nav'>
        <NavItem to="/" icon="/icons/ic_home_white_24px.svg" title="Home" />
        <NavItem to="/photos/" icon="/icons/ic_photo_camera_white_24px.svg" title="Photos" />
        <NavItem to="/code/" icon="/icons/ic_code_white_24px.svg" title="Code" />
        <NavItem to="/art/" icon="/icons/ic_brush_white_24px.svg" title="Art" />
        <NavItem to="/videos/" icon="/icons/ic_theaters_white_24px.svg" title="Videos" />
        <NavItem to="/books/" icon="/icons/iconmonstr-book-17.svg" title="Books" />
        <NavItem to="/prose/" icon="/icons/iconmonstr-script-5.svg" title="Prose" />
        <NavItem to="/resume/" icon="/icons/ic_person_white_24px.svg" title="Resume" />
      </nav>
      <button id="toggle-nav"></button>
    </header>;
  }
});

export default Header;
