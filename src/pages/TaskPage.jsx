import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Pegará as informações através da URL e usará elas para retornar algo ao usuário 
function TaskPage() {
    const navigate = useNavigate(); // Função para que o botão de voltar funcione
    function onBackClick() {
        navigate(-1);
    } // Criar uma função faz com que possa chamar no onClick de outra forma, ao invés de chamar 
    const [searchParams] = useSearchParams(); // Função usada para buscar o 'title' e 'description'
    const title = searchParams.get("title"); 
    const description = searchParams.get("description")
    return (
    <div className = "w-screen h-screen bg-slate-500 p-6 flex justify-center"> 
        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative">
                <button 
                    onClick={onBackClick} 
                    className="absolute left-0 top-0 bottom-0 text-white">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes da tarefa
                </h1>
            </div>
            <div className="space-y-2 p-6 bg-slate-200 rounded-md gap-2 flex flex-col">
                <h2 className="text-black font-bold text-center">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>);
}

export default TaskPage