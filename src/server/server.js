import express from 'express';
import { dirname } from 'path';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';
import path from 'path';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// const prisma = new PrismaClient();
const port = 3001;


app.use(cors())
app.use(express.static('/data/shared/ltu-3d-campus-raw-data/splats'))
// Serve the JSON file
app.get('/api/jsonfile', async (req, res) => {
    try {
        // Read from the database, temporary disabled for now.
        // const data = await prisma.building.findMany();
        // res.json(data)

        // Read data from the .JSON file in the server directory.
        const splats = JSON.parse(fs.readFileSync('/data/shared/ltu-3d-campus-raw-data/splats/modelData.json', 'utf8'));
        splats.map((s) => {
            s["pos"] = JSON.stringify(s["pos"])
            s["rot"] = JSON.stringify(s["rot"])
        })
        res.send(splats)
    } catch (error) {
        console.error('Error fetching data from database:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});