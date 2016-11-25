import React, { PropTypes as T } from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';
import Button from 'react-bootstrap/lib/Button'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

export class Header extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <div className={styles.topbar}>
        <section>
          <Button bsStyle='warning'>
            CoC Login
          </Button>
        </section>
        <Nav bsStyle='pills' bsSize='small' activeKey={1} >
          <NavItem eventKey={1} href='#about'>About us</NavItem>
          <NavItem eventKey={2} href='#glance'>At a glance</NavItem>
          <NavItem eventKey={3} href='#how'>How to help</NavItem>
          <NavItem eventKey={4} href='#partners'>Partners & resources</NavItem>
        </Nav>
      </div>
    )
  }
}

Header.propTypes = {
  title: T.string
}

Header.defaultProps = {
  title: 'Home.me'
}
/* <div className={styles.logo}></div> */

export default Header
