import { createPool } from "mysql2/promise"
// Permite conectar a mySql con el metodo pool para hacer las consultas. 
export const pool = createPool ({
host: 'localhost',
port: 3306,
user:'root',
password: 'JoaquiFran90',
database: 'taskdb'
})


 