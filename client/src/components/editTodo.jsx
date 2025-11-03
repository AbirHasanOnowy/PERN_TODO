import React from 'react'

const EditTodo = ({ todo, onClose }) => {
    const [description, setDescription] = React.useState(todo.description);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (description.trim() === "") {
            alert("Description can't be empty");
            return;
        }

        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/api/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                onClose();
                window.location = "/";
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-cyan-100/10 backdrop-blur-xs z-10">
            <div className="bg-cyan-300 p-6 rounded-lg w-96">
                <h2 className="text-lg font-semibold mb-3">Edit Todo</h2>

                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded px-3 py-2 mb-3"
                    />

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-600 text-white rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTodo