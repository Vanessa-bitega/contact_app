// Contact routes here// Contact routes here

import express from 'express';
import contactController from "../controllers/contact.controller.js";
const router= express.Router();




router.route('/').get(contactController. getAllContacts).post(contactController. createContact)
router.route('/:id').get(contactController.getContactById).patch(contactController.updateContact).delete(contactController. deleteContact)

export default router;