import { Request, Response } from 'express';
import { 
  createInterpreterService, 
  getInterpretersService, 
  getInterpreterByIdService, 
  updateInterpreterService, 
  deleteInterpreterService 
} from './interpreterService';
import { LanguageInterpreter } from '@prisma/client';

export const createInterpreterController = async (req: Request, res: Response) => {
  try {
    const { languageInterpreter, sourceCode } = req.body;

    // Validasi languageInterpreter untuk memastikan sesuai dengan enum
    if (!Object.values(LanguageInterpreter).includes(languageInterpreter)) {
      return res.status(400).json({ error: 'Invalid languageInterpreter value' });
    }

    const newInterpreter = await createInterpreterService(languageInterpreter, sourceCode);
    res.status(201).json(newInterpreter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create interpreter' });
  }
};

export const getInterpretersController = async (req: Request, res: Response) => {
  try {
    const interpreters = await getInterpretersService();
    res.status(200).json(interpreters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve interpreters' });
  }
};

export const getInterpreterByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const interpreter = await getInterpreterByIdService(Number(id));
    if (!interpreter) return res.status(404).json({ error: 'Interpreter not found' });
    res.status(200).json(interpreter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve interpreter' });
  }
};

export const updateInterpreterController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { languageInterpreter, sourceCode } = req.body;

    // Validasi languageInterpreter sebelum update
    if (!Object.values(LanguageInterpreter).includes(languageInterpreter)) {
      return res.status(400).json({ error: 'Invalid languageInterpreter value' });
    }

    const updatedInterpreter = await updateInterpreterService(Number(id), languageInterpreter, sourceCode);
    res.status(200).json(updatedInterpreter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update interpreter' });
  }
};

export const deleteInterpreterController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteInterpreterService(Number(id));
    res.status(200).json({ message: 'Interpreter deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete interpreter' });
  }
};
