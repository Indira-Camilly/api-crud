import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (_, res) => {
  try {
    const users = await prisma.usuario.findMany();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const addUser = async (req, res) => {
  const { Equipamento, Subestacao, plc } = req.body;

  try {
    const newUser = await prisma.usuario.create({
      data: {
        Equipamento,
        Subestacao,
        plc,
      },
    });
    return res.status(200).json("Cadastro criado com sucesso.");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateUser = async (req, res) => {
  const { Equipamento, Subestacao, plc } = req.body;
  const { id } = req.params;

  try {
    await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: {
        Equipamento,
        Subestacao,
        plc,
      },
    });
    return res.status(200).json("Cadastro atualizado com sucesso.");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json("Cadastro deletado com sucesso.");
  } catch (err) {
    return res.status(500).json(err);
  }
};