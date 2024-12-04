import React from "react";
import PropTypes from "prop-types";
import { FaPlus, FaWindowClose, FaEdit } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={() => handleEdit(index)} className="edit" />
            <FaWindowClose
              onClick={() => handleDelete(index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {  // Correção aqui: tudo minúsculo
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
