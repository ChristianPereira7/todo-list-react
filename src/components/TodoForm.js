import React, {useState} from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    //props.onSubmit({
    // id: Math.floor(Math.random() * 1000),
    //   text: input 
    // });
        setInput('');
    };

    return (
        <form className="todo-form">
            <input type="text" 
            placeholder="Adicione uma tarefa..."
             value={input} name="text" 
            className="todo-input"
            onSubmit={handleSubmit}
            onChange={handleChange}/>

            <button className="todo-button">Adicionar Tarefa</button>
        </form>
    )
}

export default TodoForm
