import { pool } from '../db.js'

export const postPost = async (req, res) => { 

    const {tittle, text, id_user} = req.body
    
    await pool.query('INSERT INTO tb_post (tittle, _text, id_user) VALUES (?,?,?)', [tittle, text, id_user]) 
    res.status(200).json('Successfull'); 
}