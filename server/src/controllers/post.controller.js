import { pool } from '../db.js'

export const postPost = async (req, res) => { 

    const {tittle, text, id_user} = req.body
    
    await pool.query('INSERT INTO tb_post (tittle, _text, id_user) VALUES (?,?,?)', [tittle, text, id_user]) 
    res.status(200).json('Successfull'); 
}

export const getPost = async (req, res) => { 

    
    const [row] = await pool.query('Select p.tittle, p._text, s.name, p._date from tb_post p inner join tb_user s on p.id_user = s.id') 

    if (row.length <= 0) {

        res.status(200).json(row); 

    } else {

        return res.status(401).json('undefined');
        
    }
}