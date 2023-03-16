import { pool } from '../db.js'


export const getUser = async (req, res) => { 
    const [rows] = await pool.query('SELEXT * FROM tb_user') 
    res.json(rows)
}


export const postUserlogin = async (req, res) => { 

    const {name, password} = req.body

    const [rows] = await pool.query('SELECT * FROM tb_user WHERE name = ?', [name])

    if (rows.length <= 0){
        return res.status(401).json('Usuario o contraseña incorrectos');
    }

    const user = rows[0];
    
    if(password != user.password){
        return res.status(401).json('Usuario o contraseña incorrectos')
    }else {
         res.status(200).json({ user: { name: user.name, email: user.email } });
    }

    
   
    
}

export const createUser = async (req, res) => {

    const {name, email, password, password_confirm} = req.body

    if(password === password_confirm) { 
     
        await pool.query('INSERT INTO tb_user (name, email, password) VALUES (?,?,?)', [name, email, password])
        res.status(200).json('Successfull'); 
  
    } else {
        return res.status(401).json('Error')
    }

  
}



export const getCurrentUser = (req, res) => {
    

}