import express from 'express';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controller.js';

import isAuthenticated from '../middleware/isAuthenticated.js';
const router=express.Router();

router.route("/post").post(isAuthenticated,postJob);

router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getadminjob/:id").get(isAuthenticated,getAdminJobs);
// router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;