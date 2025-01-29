const Usuario = require('../modelos/Usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
   
    const userExists = await Usuario.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya está registrado' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new Usuario({
      name,
      email,
      password: hashedPassword,
    });

    
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await Usuario.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Usuario no encontrado' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Contraseña incorrecta' });
      }

      // ✅ **Asegurar que la clave JWT_SECRET esté definida**
      if (!process.env.JWT_SECRET) {
          throw new Error('Falta definir JWT_SECRET en el archivo .env');
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { registerUser, loginUser };


