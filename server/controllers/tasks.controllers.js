export const getTasks = (req ,res) => {
res.send("Obteniendo Tareas")
};

export const getTask = (req ,res) => {
    res.send("Obteniendo una tarea")
};

export const createTask = (req ,res) => {
    res.send("Creando Tareas")
};

export const updateTask = (req, res) => {
    res.send("Actualizando tareas")
};

export const deleteTask = (req, res) => {
    res.send("Eliminando tarea")
}

