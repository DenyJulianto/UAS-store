const db = require('../models');
const User = db.user;

// Fungsi sederhana untuk membuat token (tidak aman, hanya untuk contoh)
function generateToken(userId) {
    return `${userId}-${new Date().getTime()}`;
}

// Fungsi sederhana untuk verifikasi password (tidak aman, hanya untuk contoh)
function isPasswordValid(inputPassword, storedPassword) {
    return inputPassword === storedPassword;
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cari user berdasarkan email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Verifikasi password
        if (!isPasswordValid(password, user.password)) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        // Buat token sederhana (tidak aman)
        const token = generateToken(user._id);

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
        res.status(500).send({ message: error.message || "Some error occurred while logging in." });
    }
};

exports.logout = (req, res) => {
    // Implementasikan logika logout jika Anda menggunakan sesi
    req.session = null;
    res.status(200).send({ message: 'Logout successful' });
};