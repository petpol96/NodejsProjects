const getAllTasks = (req,res)=>{
    res.send('all items')
}

const createTask= (req,res)=>{
    res.send('Create Task')
}

const getTask= (req,res)=>{
    res.json({id:req.params.id})
}
const updateTask= (req,res)=>{
    res.send('Update Task')
}
const deleteTask= (req,res)=>{
    res.send('Delete Task')
}

module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,

}