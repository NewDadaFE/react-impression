import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Notification, Card } from 'react-impression';
import Counter from './components/Counter';
import * as actions from './reducer';

class Home extends Component {
  static propTypes = {
    total: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
  };

  componentDidMount() {
    Notification.info({
      closeable: false,
      title: '通知',
      message: '欢迎，这是一个Info通知。',
    });
  }

  render() {
    const { total, increment, decrement } = this.props;

    return (
      <Card block noborder>
        <Counter counter={total} increment={increment} decrement={decrement} />
      </Card>
    );
  }
}

const mapStateToProps = state => ({ total: state.home.total });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
