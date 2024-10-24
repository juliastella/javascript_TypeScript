import React, { Component } from "react";

//icone
import {FaPlus, FaWindowClose, FaEdit} from 'react-icons/fa';

import './Main.css';
export default class Main extends Component {

  state = { // essa é a forma mai facil
    novaTarefa: '',
    tarefas: [

    ],
  };

  handleChange = (e) => {
    e.preventDefault();
    console.log('oi');

  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
            />
          <button type="submit">
            <FaPlus />
          </button>
        </form>


        <ul className="tarefas">
            {tarefas.map(tarefa => (
              <li key={ tarefa }>
                {tarefa}

                <span>
                  <FaEdit className="edit"/>
                  <FaWindowClose className="delete"/>
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
