const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.cadastrar_usuarios = async (req, res) => {
  const { nome, telefone } = req.body;
  try {
    const usuario_cadastrado = await prisma.Teste.create({
      data: {
        nome: nome,
        telefone: telefone,
      },
    });

    return res.json({ cadastrado: true, usuario_cadastrado });
  } catch (error) {
    console.log(error)
    res.json({ cadastrado: false });
  }
};
