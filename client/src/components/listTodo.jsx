import { useState, useEffect } from 'react'

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/todos",
                    { method: "GET" }
                );
                const data = await response.json();
                setTodos(data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchTodos();
    }, []);


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                setTodos(todos.filter(todo => todo.todo_id !== id));
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleEdit = (id) => {
        console.log("Edit todo with id:", id);
        // Implement edit functionality as needed
    };

    return (
        <div className='mt-5 w-full h-[800px]'>
            {/* <h2 className='text-2xl font-semibold text-gray-800 text-center'>Tasks todo by order</h2> */}
            {todos.length === 0 && <p className='text-center mt-10 text-gray-600'>No todos available. Please add some tasks.</p>}
            {todos.length > 0 && <>
                <ol>
                    <li>
                        <div className='flex font-bold border-b-2 border-gray-400 pb-2 mb-3'>
                            <span className='ml-10'>Todo id</span>
                            <span className='ml-30 w-80'>Todo Description</span>
                            <span className='mx-5'>Edit</span>
                            <span className='mx-5'>Delete</span>
                        </div>
                    </li>
                    {/* map through todos */}
                    {todos.map((todo) => (
                        <li key={todo.todo_id} className='border-b border-gray-300 py-2'>
                            <div className='flex'>
                                <span className='mx-10'>{todo.todo_id}</span>
                                <span className='ml-30 w-80'>{todo.description}</span>
                                <span className='mx-5'><button className='bg-sky-600 text-white rounded-md px-4 py-2' onClick={() => handleEdit(todo.todo_id)}>Edit</button></span>
                                <span className='mx-5'><button className='bg-red-600 text-white rounded-md px-4 py-2' onClick={() => handleDelete(todo.todo_id)}>Delete</button></span>
                            </div>
                        </li>
                    ))}
                </ol>
            </>}
        </div>
    )
}

export default ListTodo
