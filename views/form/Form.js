import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';
import ProgressBar from 'react-bootstrap/lib/ProgressBar'
import Button from 'react-bootstrap/lib/Button'

const now = 60;

export class Form extends React.Component {
  render() {
    return (
      <div id='page' className={styles.wrapper}>
        <div id='topbar' className={styles.topbar}>
          <Button bsStyle='primary' >
            Back
          </Button>
          <section>
            <ProgressBar now={now} label={`${now}%`} />
          </section>
        </div>
        <div id='content' className={styles.content}>
          <h1>This is a basic description of what this form is intended for (an
            emergency housing form that fields and ranks what you ll see).
            Answer the questions HONESTLY.</h1>
        </div>
      </div>
    )
  }
}

export default Form;
