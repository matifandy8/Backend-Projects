import React, { useState } from "react";
import "./addTodo.css";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <input
            className="input__todo"
            onChange={handleForm}
            type="text"
            id="task"
            placeholder="Write Todo"
            required
          />
        </div>
      </div>
      <button
        className="button__add"
        disabled={formData === undefined ? true : false}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
