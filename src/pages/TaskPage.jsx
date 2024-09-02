import { useSearchParams } from "react-router-dom";

// Pegará as informações através da URL e usará elas para retornar algo ao usuário 
function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title"); 
    const description = searchParams.get("description")
    return (
    <div className="w-screen h-screen bg-slate-500 p-6 border border-slate-300">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>);
}

export default TaskPage