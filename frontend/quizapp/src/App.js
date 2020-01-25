import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    let right = 0;
    let wrong = 0;
    this.state = {
      quiz: [],
      answer: '',
      right: 0,
      wrong: 0
    }
    this.refreshList = this.refreshList.bind(this)


  }



  answer(id) {
    var count = 0
    if (id === true) {
      this.setState({
        right: this.state.right + 1,

      })
    }
    else {
      this.setState({
        wrong: this.state.wrong + 1

      })
    }

    axios.post("http://127.0.0.1:8000/quiz/"), { answer: id }
    this.setState({
      answer: id,


    })

  }

  refreshList() {
    axios.get("http://127.0.0.1:8000/quiz/")
      .then(res => {
        this.setState({ quiz: res.data });
      });
  }

  componentDidMount() {
    this.refreshList();

  }

  render() {
    return (
      <div className="App">
        {this.state.quiz.map((item, index) => (
          <ol key={index} >

            <div className='question'>{item.question}</div>
            
              {item.choice.map((item, index) => (<ol key={index} className='radio'>
                <input type="radio" value={item.isTrue} onChange={(event) => this.answer(item.isTrue)} />
                {item.choice}
              </ol>))}
          
          </ol>
        ))}
       
        <span>Correct Answer: {this.state.right}</span>
        <span> Wrong Answer  : {this.state.wrong}</span>
        </div>
      
    );
  }
}

export default App;
