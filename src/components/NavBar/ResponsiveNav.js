import React from 'react'

export class MenuLinks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideResponsiveMenu: true,
      links: [
        {
          text: 'home',
          link: '/',
        },
        {
          text: 'About Us',
          link: '/about-us',
        },
        {
          text: 'Pricing',
          link: '/pricing',
        },
        {
          text: 'Careers',
          link: '/careers',
        },
      ],
    }
  }

  render() {
    let links = this.state.links.map((link, i) => (
      <li ref={i + 1}>
        <a href={link.link} className="burger-menu-links">
          {link.text}
        </a>
      </li>
    ))

    return (
      <>
        {this.state.hideResponsiveMenu && <div id="menu">
          <li>
            <img src={require('../../assets/logo.png').default}></img>
            <button className="close-btn" onClick={() => this.setState({ hideResponsiveMenu: false })}><img className="close-icon" src={require('../../assets/icons/close.png').default}></img></button>
          </li>
          <ul>{links}</ul>
          <img src={require('../../assets/mobile-rounded-001.svg').default}></img>
        </div>}
      </>
    )
  }
}
