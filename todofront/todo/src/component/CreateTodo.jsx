import { useState } from "react";

export function CreateTodo(){
  const j={title:"",description:"",completed:false}
  const [data,setdata]=useState(j);
  function handle(e){
      const {name,value}=e.target;
      setdata({...data,[name]:value})
  }
  
    return <div>
        
        <input style={{padding:10,margin:10}} type="text" placeholder="title" name="title" value={data.name} onChange={handle}/><br/>
        <input style={{padding:10,margin:10}} type="text" placeholder="description" name="description" value={data.name} onChange={handle}/> <br/>

        <button style={{padding:10,margin:10}} onClick={()=>fetch("http://localhost:4000/post",{
            method: 'POST',
          body:JSON.stringify(
           data
          ),
          headers:{
            'Content-Type': 'application/json'
          }
                

                    
        }).then(async function(res){
            const json=await res.json();
            alert("TOdo added");
        })} >Add atodo</button>
    </div>
}