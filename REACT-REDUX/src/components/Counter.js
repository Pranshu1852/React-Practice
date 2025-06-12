import classes from './Counter.module.css';
import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter= useSelector((state)=>{
    return state.counter.counter;
  })

  const dispatch=useDispatch();

  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }

//   increaseHanler(){
//     this.props.increase();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.increaseHanler.bind(this)}>Increment by 5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     ); 
//   }
// }

// const mapStatetoProps=(state)=>{
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     increment: ()=>{dispatch(counterActions.increase())},
//     increase: ()=>{dispatch(counterActions.increase(10))},
//     decrement: ()=>{dispatch(counterActions.decrement())},
//   }
// }
export default Counter;

// export default connect(mapStatetoProps,mapDispatchToProps)(Counter);
