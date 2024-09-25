// src/feature/content/contentController.ts

import { Request, Response } from 'express';
import {
  createContent,
  getContents,
  getContentById,
  updateContent,
  deleteContent,
} from './service/contentService';

// Create New Content
export const createNewContent = async (req: Request, res: Response) => {
    try {
        const contentData = req.body;
        console.log("Content Data:", contentData);  // Tambahkan log ini
        const newContent = await createContent(contentData);
        res.status(201).json(newContent);
      } catch (error) {
        console.error("Error creating content:", error);  // Tambahkan log ini
        res.status(500).json({ error: 'Failed to create content' });
    }
};

// Get All Contents
export const getAllContents = async (req: Request, res: Response) => {
  try {
    const contents = await getContents();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contents' });
  }
};

// Get Single Content By ID
export const getSingleContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const content = await getContentById(Number(id));
    if (!content) return res.status(404).json({ error: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve content' });
  }
};

// Update Content
export const modifyContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contentData = req.body;
    const updatedContent = await updateContent(Number(id), contentData);
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
};

// Delete Content
export const removeContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteContent(Number(id));
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete content' });
  }
};

