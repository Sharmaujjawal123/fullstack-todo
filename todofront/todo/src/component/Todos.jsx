export function Todos({todos}){
    return (
        <>
        {todos.map(function(tod,index){
            return (
                <div>
                <h1>{tod.title}</h1>
                <h2>{tod.description}</h2>
                <button>{tod.completed==true?"completed":"Mark as completed"}</button>
                </div>
            )
        })}
        </>
    )
    
}