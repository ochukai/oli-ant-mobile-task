import React from 'react';
import { connect } from 'dva';
import styles from './Tasks.css';

function Tasks(props) {
  return (
    <div className={styles.normal}>
      Route Component: 'Tasks'
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Tasks);
