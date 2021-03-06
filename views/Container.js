import React, { PropTypes as T } from 'react'

import styles from './styles.module.css'

export class Container extends React.Component {
  renderChildren() {
    const childProps = {
      ...this.props
    };
    const {children} = this.props;
    return React.Children.map(children,
              c => React.cloneElement(c, childProps));
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.renderChildren()}
      </div>
    )
  }
}

Container.contextTypes = {
  router: T.object
}

export default Container
