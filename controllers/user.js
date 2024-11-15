import {bd} from "../bd.js";

export const getUsers=(_, res) => {

    const q = "SELECT * FROM usuarios";

    bd.query(q, (err, data)=>{

        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO usuarios(`Equipamento`, `Subestacao`, `plc`) VALUES(?)";
  
    const values = [
      req.body.Equipamento,
      req.body.Subestacao,
      req.body.plc,
   
    ];
  
    bd.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro criado com sucesso.");
    });
  };
  
  export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `Equipamento` = ?, `Subestacao` = ?, `plc` = ? WHERE `id` = ?";
  
    const values = [
      req.body.Equipamento,
      req.body.Subestacao,
      req.body.plc,
    ];
  
    bd.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado com sucesso.");
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    bd.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado com sucesso.");
    });
  };