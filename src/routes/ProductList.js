import React from 'react';
import { connect } from 'dva';
import styles from './ProductList.css';

function ProductList(props) {
  return (
    <div className={styles.normal}>
      Route Component: 'ProductList'
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ProductList);
