// 리덕스 호출
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </>
  );
};
const mapStateProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});
export default connect(mapStateProps, mapDispatchToProps)(CounterContainer);
