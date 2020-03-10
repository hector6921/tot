import React, {Component} from 'react';
import GetList from "./getlist";

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }
  addTask = event => {
  event.preventDefault();
  this.setState({
  todos: [...this.state.currentToDo, this.state.todos],
})
console.log("the task method was excuted", event);

  };
  handleChange = event => {
    this.setState({
    currentToDo: event.target.value,
  })
    console.log(event.target.value);
  };


  render(){
    return(
      <div className="container">
      <form  onSubmit={this.addTask}>
      <label htmlFor="taskName">Task Name: </label>
      <input onChange={this.handleChange} name="taskName"
      type="text" placeholder="Add todo here" />
      <button type="submit" >Add task</button>
      </form>
      {this.state.todos.map((todo, index) => (
          <GetList index ={index} todo={todo} />
        ))
      }
      </div>
    )
  }
}
export default TodoList;
