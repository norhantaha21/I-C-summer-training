const express = require('express');
const mongoose = require('mongoose');

const app = express();

// متغيرات مباشرة بدل .env
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/notesapp';

// Middleware
app.use(express.json());

// راوتات (لو عندك ملف راوتات، غير السطر ده حسب حالتك)
const noteRoutes = require('./routes/noteRoute');
app.use('/api/notes', noteRoutes);

// اتصال بقاعدة البيانات
mongoose.connect(MONGO_URI)

.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at: http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
});
