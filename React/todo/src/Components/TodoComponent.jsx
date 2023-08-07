


function TodoComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
    const todos = [
        {id:1, description:"Learn React",done:false, targetDate:targetDate},
        {id:2, description:"Learn AWS",done:false, targetDate:targetDate},
        {id:3, description:"Learn SPRING BOOT",done:false, targetDate:targetDate}
    ]

    return(

        
        <div className='container'>
            <h1>TASKS YOU HAVE TO DO</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>DESCRIPTION</td>
                        <td>IS DONE</td>
                        <td>TargetDate</td>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => {
                            return(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        
                        }
                    )
                } 
                </tbody>
            </table>
        </div>
 
    )
}

export default TodoComponent;