const User = require('../models/user.model'); // Asumsikan Anda memiliki model user
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cari user berdasarkan email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        // Buat token JWT
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: '1h', // Token valid selama 1 jam
        });

        res.status(200).send({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
            },
            token,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.logout = (req, res) => {
    // Implementasikan logika logout jika Anda menggunakan sesi
    req.session = null;
    res.status(200).send({ message: 'Logout successful' });
};
