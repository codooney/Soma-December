import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import { createReadStream } from 'fs';
import { PDFParser } from 'pdf2json';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseFile = async (file: formidable.File): Promise<string> => {
  if (file.mimetype === 'application/pdf') {
    return new Promise((resolve, reject) => {
      const pdfParser = new PDFParser();
      
      pdfParser.on('pdfParser_dataReady', (pdfData) => {
        const text = pdfParser.getRawTextContent();
        resolve(text);
      });
      
      pdfParser.on('pdfParser_dataError', (error) => {
        reject(error);
      });

      const readStream = createReadStream(file.filepath);
      pdfParser.parseBuffer(readStream);
    });
  } else if (file.mimetype?.startsWith('text/')) {
    const buffer = await createReadStream(file.filepath).read();
    return buffer.toString();
  } else if (file.mimetype?.startsWith('image/')) {
    // For now, return a message that image processing will be implemented
    return 'Image processing will be implemented';
  }
  
  throw new Error('Unsupported file type');
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable();
    
    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = files.file;
    if (!file || Array.isArray(file)) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const text = await parseFile(file);

    // For now, return the extracted text
    // Later we'll integrate this with OpenAI
    return res.status(200).json({ 
      success: true,
      text,
      analysis: {
        status: 'processed',
        content: 'File processed successfully. OpenAI integration pending.'
      }
    });

  } catch (error) {
    console.error('Error processing file:', error);
    return res.status(500).json({ 
      error: 'Error processing file',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}