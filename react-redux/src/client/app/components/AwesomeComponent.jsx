import React from 'react';

class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.buttonName = this.props.buttonName;
    this.incrementByValue = this.props.incrementBy;
    this.parentClickAction = this.props.action;
    
    this.buttonOnClickAction = () => {
      this.parentClickAction(this.incrementByValue)
    };
  }

  render(){
    return (  
      <button onClick={this.buttonOnClickAction}>
        {this.buttonName}
      </button>
    );
  }
}

class ClearButton extends React.Component{

}

const Result = (props) => {
  return (
    <div>
      Times Liked: {props.timesLiked}
    </div>
  );
};

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timesLiked : 0
    };

    this.increment = (incrementVal) => {
      this.setState((prevState) => ({
        timesLiked : prevState.timesLiked + incrementVal
      }));
    };
  }

  render() {
    return (
      <div>
        <LikeButton incrementBy={1} buttonName="+1" action={this.increment}/>
        <LikeButton incrementBy={2} buttonName="+2" action={this.increment}/>
        <LikeButton incrementBy={10} buttonName="+10" action={this.increment}/>
        <LikeButton incrementBy={20} buttonName="+20" action={this.increment}/>
        <LikeButton incrementBy={30} buttonName="+30" action={this.increment}/>
        <LikeButton incrementBy={40} buttonName="+40" action={this.increment}/>
        <LikeButton incrementBy={-1} buttonName="-1" action={this.increment}/>

        <Result timesLiked={this.state.timesLiked}/>
      </div>
    );
  }
}

export default Counter;