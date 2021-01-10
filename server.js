// ----------------------- External
const express = require('express');

// ----------------------- Internal

// ----------------------- Instanced
const app = express();

// ----------------------- Configuration
const PORT = 3000;

// ----------------------- Middleware

// ----------------------- Routes

// ----------------------- Listener
app.listen(PORT, () => {
    console.log(`Live and listening on port ${PORT}`);
})