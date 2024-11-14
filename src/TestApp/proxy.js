// import express from "express";
// import axios from "axios";
// import cors from "cors";

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());

// // GET request to fetch data
// app.get("/data", async (req, res) => {
//   try {
//     // const response = await axios.get(
//     //   "https://gist.githubusercontent.com/Ahmed3mer118/d3ac8834c1f0833713ca0552a0c56fa0/raw/8ee0f68790fc4bd5f89ded242345e9346fc8f82e"
//     // );
//     const response = await axios.get(Data);
//     // const response = await axios.get('https://docs.google.com/spreadsheets/d/1phspndiY-YQCT5XwzZO2TTL9RwYCg4pC8D-dBpbzyRs/edit?usp=sharing');
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Proxy server listening at http://localhost:${port}`);
// });
// 
import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

// Proxy endpoint
app.get('/data', async (req, res) => {
  try {
    // const response = await axios.get('https://api.jsonserve.com/K5j2tw');
    const response = await axios.get('https://gist.githubusercontent.com/Ahmed3mer118/d3ac8834c1f0833713ca0552a0c56fa0/raw/b0b4e8d060468df9fb8f01e2698d18e5a231a0a4/Attendance%2520Data');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});

