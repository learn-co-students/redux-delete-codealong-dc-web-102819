import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  
  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} deleteTodo={this.props.deleteTodo} text={todo} />)

  render() {
    return(
      <div>
        {this.props.todos.map((todo, id) => <Todo key={id} deleteTodo={this.props.deleteTodo} todo={todo} />)}
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    deleteTodo : (id) => dispatch({type:'DELETE_TODO', id})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
