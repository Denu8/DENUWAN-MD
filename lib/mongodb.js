const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://unitedcamps.in/Images/file_4265.jpg' },
    { key: 'ALIVE_MSG', value: `*👋 Hello I'm Online Now 😚💗` },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_READ_CMD', value: 'true' },
    { key: 'AUTO_TYPING', value: 'true' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
