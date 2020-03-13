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
  todos: [...this.state.todos, this.state.currentToDo],
})
console.log("the task method was excuted", event);

  };
  handleChange = event => {
    this.setState({
    currentToDo: event.target.value,
  })
    console.log(event.target.value);
  };
  resetInput (){

    var inputBox = document.getElementById("input");
    inputBox.reset();
  }
  Delete = (value) => {
      this.setState({
        todos: this.state.todos.filter(function(item, index) {
          return index !== value;
      })});
  }


  render(){
    return(
      <div className="container">
      <form id ="input" onSubmit={this.addTask}>
      <label htmlFor="taskName">Task Name: </label>
      <input onChange={this.handleChange}  name="taskName"
      type="text" placeholder="Add todo here" />
      <button type="submit" onClick={this.resetInput}>Add task</button>
      </form>
{this.state.todos.map((todo, index) =>  (
        <GetList Delete = {this.Delete} index={index} todo={todo} />

))
}
      </div>
    )
  }

}
export default TodoList;
