import express from 'express';
export const Router = express.Router();
import { createComplaint, adminLogin, getAllComplaints } from '../controllers/complaints.controller.js';
import { requireAdminAuth } from '../middlewares/requireAdminAuth.js';




Router.post("/complaints", createComplaint)

Router.post("/admin/login", adminLogin)

Router.get("/complaints", requireAdminAuth, getAllComplaints)
