import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { useSelector } from 'react-redux';

const Result = (props) => {
  //const count = useSelector(state => state.counter.count);
  return (
    <h1> {props.count}  </h1>
  )
}
// connect state from store to props component
const mapStateToProps = state => ({
  count: state.counter.count
});
Result.propTypes = {
  count: PropTypes.number.isRequired
}
export default connect(mapStateToProps, null)(React.memo(Result));