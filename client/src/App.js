import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editingItem, setEditingItem] = useState(null);
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data);
        } catch (err) {
            console.error('Error fetching items:', err);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http:///Localhost:5000/api/items', { name, description });
            setItems([...items, response.data]);
            setName('');
            setDescription('');
        } catch (err) {
            console.error('Error adding item:', err);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item._id);
        setEditName(item.name);
        setEditDescription(item.description || '');
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/items/${editingItem}`, {
                name: editName,
                description: editDescription,
            });
            setItems(
                items.map((item) =>
                    item._id === editingItem ? response.data : item
                )
            );
            setEditingItem(null);
            setEditName('');
            setEditDescription('');
        } catch (err) {
            console.error('Error updating item:', err);
        }
    };

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            setItems(items.filter((item) => item._id !== id));
        } catch (err) {
            console.error('Error deleting item:', err);
        }
    };

    return ( <
        div className = "min-h-screen bg-gray-100 flex items-center justify-center p-4" >
        <
        div className = "w-full max-w-lg bg-white rounded-lg shadow-lg p-6" >
        <
        h1 className = "text-2xl font-bold text-gray-800 mb-6 text-center" > Todo App < /h1> <
        form onSubmit = { handleSubmit }
        className = "space-y-4 mb-6" >
        <
        div className = "flex flex-col sm:flex-row gap-4" >
        <
        input type = "text"
        placeholder = "Item Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        className = "flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required /
        >
        <
        input type = "text"
        placeholder = "Description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        className = "flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" /
        >
        <
        /div> <
        button type = "submit"
        className = "w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500" >
        Add Item <
        /button> <
        /form> <
        ul className = "space-y-3" > {
            items.map((item) => ( <
                li key = { item._id }
                className = "bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-100 transition" >
                {
                    editingItem === item._id ? ( <
                        form onSubmit = { handleUpdate }
                        className = "flex-1 space-y-2" >
                        <
                        div className = "flex flex-col sm:flex-row gap-2" >
                        <
                        input type = "text"
                        value = { editName }
                        onChange = {
                            (e) => setEditName(e.target.value) }
                        className = "flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required /
                        >
                        <
                        input type = "text"
                        value = { editDescription }
                        onChange = {
                            (e) => setEditDescription(e.target.value) }
                        className = "flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" /
                        >
                        <
                        /div> <
                        div className = "flex gap-2" >
                        <
                        button type = "submit"
                        className = "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition" >
                        Save <
                        /button> <
                        button type = "button"
                        onClick = {
                            () => setEditingItem(null) }
                        className = "bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition" >
                        Cancel <
                        /button> <
                        /div> <
                        /form>
                    ) : ( <
                        >
                        <
                        div className = "flex-1" >
                        <
                        strong className = "text-lg text-gray-800" > { item.name } < /strong> {
                            item.description && ( <
                                p className = "text-sm text-gray-600 mt-1" > { item.description } < /p>
                            )
                        } <
                        /div> <
                        div className = "flex gap-2" >
                        <
                        button onClick = {
                            () => handleEdit(item) }
                        className = "bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition" >
                        Edit <
                        /button> <
                        button onClick = {
                            () => handleDelete(item._id) }
                        className = "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition" >
                        Delete <
                        /button> <
                        /div> <
                        />
                    )
                } <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default App;