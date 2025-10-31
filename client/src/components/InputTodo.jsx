import { useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e && e.preventDefault();

        if (description.trim() === "") {
            alert("Please enter a todo description");
            return;
        }

        try {
            const response = fetch("http://localhost:5000/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ description }),
            });

            if (response) {
                alert("Todo Added Successfully");
                setDescription("");
            } else {
                alert("Failed to add todo");
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full max-w-3xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Todo Application (PERN)</h3>

            <form onSubmit={handleSubmit} className="mt-1 w-full">
                <div className="flex w-full items-stretch">
                    <input
                        type="text"
                        aria-label="Add a new todo"
                        placeholder="Add a new todo"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1 w-[650px] h-10 px-4 border border-gray-200 text-center rounded-l-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-5 h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-r-lg transition-colors duration-150"
                        aria-label="Add todo"
                    >
                        {/* simple plus icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputTodo;