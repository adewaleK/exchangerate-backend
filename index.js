const express = require('express');
const fetch = require('node-fetch');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT

// app.get('/api/rates/:base/:symbols', async (req, res) =>{
//     const base = req.params.base;
//     const symbols = req.params.symbols;

//     const api_url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
    
//         const fetch_response = await fetch(api_url);

//         const jsonData = await fetch_response.json();
   
//         res.json(jsonData);
//         console.log(jsonData);

// })

app.get('/api/rates/:base/:symbols', async (req, res) =>{
    const base = req.params.base;
    const symbols = req.params.symbols;

    const api_url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
    
    
    try {
        const fetch_response = await fetch(api_url);

        const jsonData = await fetch_response.json();
   
        res.status(200).json(jsonData);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

})

app.listen(PORT, () => {
    console.log(`app running on PORT ${PORT}`);
});
