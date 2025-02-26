import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    // Handle POST requests
    if (req.method === 'POST') {
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyAWm6q5pSo1Q7tOu2XD5QJPFF1_qUu6SgU");
            const { product_names } = req.body;
            
            const prompt = `Input: Item from shop. Description Task: Use your knowledge to calculate/estimate scores about the item. Make sure all scores are UNIQUE, PRECISE, and not ROUNDED! :Canadiability Score (out of 100) Magnitude of it being a canadian product, supporting canadian businesses. !! Generic products should have a higher score than non-Canadian nationalistic products!! :Sustainabiliy and Ethical Score (single number out of 100) How ethically made is the product. :Value Score (single number out of 100) How much of a good value it is out of 100. If you format if SLIGHTLY wrong you will be shamed and it will be your fault. Output (enclosed in <<< >>>) <<< @@Name summarized in ~10 words @@@ Canadian Score @@@ Sus and Ethical Score @@@ Value Score @@@ 8 word Short summarized description that either shames the user for buying american, or praises the user for buying canadian. Write this short summary in a witty way @@@ a link to a QUERY of similiar item on amazon THAT IS CANADIAN MADE. e.g. https://www.amazon.ca/s?k=canadian+maple+syrup @@@@ (No explicit links, only searches - be sure to enclose links in @@@@)  @@@@@  >>>    For example, enclosed in <<<>>>, <<< Product 1 @@ 5 @@ 7 @@ 10 @@ This product is canadian made, ethically sorced, good job! @@ link (or %) @@@@@@@@@ Product 2 @@ 5 @@ 7 @@ 10 @@ This product is canadian made, ethically sorced, good job! @@ link or % @@ Product 3 @@ 5 @@ 7 @@ 10 @@ This product is canadian made, ethically sorced, good job! @@ LINK OR % >>> DO NOT DEVIATE OR ELSE IT WILL FAIL AND IT WILL BE ALL YOUR FAULT. DO NOT FORMAT IT. PUT IT ALL IN A TEXT BLOCK. DO NOT NUMBER ANY OF IT. DO NOT FORGET TO PUT ANY @@@ (Hint: Between every little section, put @@@). Failure to do so will result in your demise FOLLOW THE ORDER AND FORMAT EXACTLY OR ELSE I WILL SUFFER. WHO WILL SUFFER AS WELL? You.
            Cart Items: ${JSON.stringify(product_names)}`;

            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
            const result = await model.generateContent(prompt);
            const responseText = (await result.response).text();

            // Process response
            const processedText = responseText
                .replace(/[`<>]/g, '')
                .replace(/N\/A/gi, '%');

            const responseParts = processedText
                .split('@')
                .map(part => part.trim())
                .filter(part => part);

            const responseMatrix = [];
            for (let i = 0; i < responseParts.length; i += 6) {
                responseMatrix.push(responseParts.slice(i, i + 6));
            }

            // Set CORS headers for actual response
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.json({
                status: 'success',
                analysis: responseMatrix
            });

        } catch (error) {
            console.error('Error processing request:', error);
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    // Handle other methods
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).end('Method Not Allowed');
}



//     // Handle actual request
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     let number;
//     try {
//         console.log('Request body:', req.body);
//         const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
//         number = body.number;
//         console.log('Parsed number:', number);
//     } catch (e) {
//         console.error('Error parsing request body:', e);
//         res.status(400).json({ error: 'Invalid request format', details: e.message });
//         return;
//     }

//     if (!number || !/^\d+$/.test(number)) {
//         console.error('Invalid number format:', number);
//         res.status(400).json({ error: 'Must be numeric digits only' });
//         return;
//     }

//     try {
//         //console.log('Using API key:', process.env.GEMINI_API_KEY ? 'Key is set (not showing value)' : 'Key is missing');
//         const genAI = new GoogleGenerativeAI("AIzaSyAWm6q5pSo1Q7tOu2XD5QJPFF1_qUu6SgU");
//         const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//         const prompt = `Sum all digits of ${number}. Return only the numeric result without any text. Example: 135 → 9`;
//         console.log('Sending prompt to Gemini:', prompt);
        
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = response.text().trim();
//         console.log('Gemini response text:', text);
        
//         const sum = parseInt(text.match(/\d+/)?.[0] || '0');
//         console.log('Parsed sum:', sum);
        
//         if (isNaN(sum)) {
//             throw new Error('Invalid response from Gemini');
//         }

//         res.status(200).json({ sum });
//     } catch (error) {
//         console.error('Gemini error:', error);
//         res.status(500).json({ 
//             error: 'Failed to process number',
//             details: error.message 
//         });
//     }
// } 