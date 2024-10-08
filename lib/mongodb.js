const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://unitedcamps.in/Images/file_4265.jpg' },
    { key: 'ALIVE_MSG', value: `*👋 Hello ${pushname} I'm alive now*

*╭─「 ALIVE 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : DENUWAN-MD
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : KING DENUWAN
*╰──────────●●►*
*╭──────────●●►*
*│ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:*  https://whatsapp.com/channel/0029VaePgYXBqbr6Vkg75n1j
*│ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴:* https://www.youtube.com/@devil-programer99
*╰──────────●●►*

*Type .menu to get bot user menu*

> *©POWERED BY DENUWAN MD*
` },
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
