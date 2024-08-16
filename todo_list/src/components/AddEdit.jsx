import React, { useState } from 'react'
import TodoList from './TodoList';

const AddEdit = () => {
    const [todoList, setTodoList] = useState([]);
    // const [actionType, setActionType] = useState("add");
    // const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        todoItem: '',
    });

    const [errors, setErrors] = useState({
        todoItem: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    // validating form fields
    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.todoItem) newErrors.todoItem = 'TodoItem is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm()){
            setTodoList([...todoList, formData.todoItem]);
            setFormData({
                todoItem: '',
            });
            console.log("form submitted : ", formData);
        }
    }

    // const handleEdit = (edit) => {
    //     setEdit(true);
    //     const list = [...todoList];
    //     const index = list.indexOf(edit);
    //     console.log(index);
    //     list[index] = 
    //     console.log("Edit clicked", edit)
    // }

    const handleDelete = (del) => {
        const list = todoList.filter(item => item !== del)
        setTodoList(list);
        console.log("Delete Clicked", del);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='todo-item-container'>
                {/* <label htmlFor="todo-item">Todo Item</label><br /> */}
                <input type="text" name="todoItem" id="todo-item" value={formData.todoItem} onChange={handleChange} autoComplete='off' placeholder='Enter Todo item'/>
                {errors.todoItem && <span className='error'>{errors.todoItem}</span>}
            </div>
            {/* <button type="submit">{edit ? "Edit" : "Add"}</button> */}
            <button type="submit" className='btn btn-add'>Add</button>
        </form>
        {/* {!edit && <TodoList todoList={todoList} handleEdit={handleEdit} handleDelete={handleDelete}/>} */}
        <TodoList todoList={todoList} handleDelete={handleDelete}/>
        
    </div>
  )
}

export default AddEdit