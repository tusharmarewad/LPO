const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(body.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(5000,() => { console.log(`server is running on localhost:${PORT}`);
}
)