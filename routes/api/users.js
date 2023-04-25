const express = require('express');
const uuidv4 = require('uuid').v4; // allows you to generate id strings
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const router = express.Router();

router.use(express.json());

const sessions = {}; // typically stored in a database

// Login endpoint that a user could do a post request to
router.post('/log-in', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).send('Invalid username or password');
    }
    const sessionId = uuidv4();
    sessions[sessionId] = { username, userId: user._id };
    res.cookie('sessionId', sessionId);
    res.send('success');
});

// Signup endpoint that a user could do a post request to
router.post('/sign-up', async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(409).send('Username or email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const sessionId = uuidv4();
    sessions[sessionId] = { username, userId: newUser._id };
    res.cookie('sessionId', sessionId);
    res.send('success');
});

// Logout endpoint
router.post('/logout', (req, res) => {
    const sessionId = req.cookies.sessionId;
    delete sessions[sessionId];
    res.clearCookie('sessionId');
    res.send('success');
});

// This endpoint is authenticated
router.get('/todos', (req, res) => {
    const sessionId = req.cookies.sessionId;
    const userSession = sessions[sessionId];
    if (!userSession) {
        return res.status(401).send('Invalid session');
    }
    const userId = userSession.userId;
    // Can send back data if authentication works
    res.send([{
    id: 1,
    title: 'Learn Node',
    userId,
    }]);
});

module.exports = router;