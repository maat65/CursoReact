import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow gap-2 flex flex-col">
        <input 
            type="text" 
            placeholder="Digite o Titulo da tarefa" 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value = {title}
            onChange={(event) => setTitle(event.target.value)}>
        </input>
        <input 
            type="text" 
            placeholder="Digite o Titulo da tarefa" 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value = {description}
            onChange={(event) => setDescription(event.target.value)}>
        </input>
        <button onClick={() => {
            // VERIFICA SE TENTOU DAR SUBMIT COM ALGUM CAMPO EM BRANCO
            if(!title.trim() || !description.trim())
                return alert("Preencha os campos para adicionar!")
            onAddTaskSubmit(title, description);
            setTitle[""];
            setDescription[""];
        }} className="border bg-slate-500 px-4 py-2 rounded-md ">Adicionar</button>
    </div>
)}

export default AddTasks;