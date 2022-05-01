import React from "react";
import { connect } from "react-redux";
import { addAction, addASyncAction } from "../store/store";
import { Button } from "antd";

const D = (props) => {
  let { count, user, add } = props;
  return (
    <div>
      <div>页面D</div>
      <div>count---{count}</div>
      <div>user --- {JSON.stringify(user)}</div>
      <Button onClick={add}>add</Button>
    </div>
  );
};

export default connect(
  function mapStoreToProps(state) {
    return {
      count: state.count,
      user: state.user,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      add(num) {
        dispatch(addASyncAction(3));
      },
    };
  }
)(D);
