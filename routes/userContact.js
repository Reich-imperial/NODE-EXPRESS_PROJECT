import express from "express";
import  {createContact,getContacts,updateContact,getContact,deleteContact} from "../controllers/contacts.js";
import { validateToken } from "../middlewares/validateTokenHandler.js";

const router = express.Router();

router.use(validateToken);

router.get('/', getContacts);
router.post('/',createContact);
router.get('/:id',getContact);
router.put('/:id',updateContact);
router.delete('/:id',deleteContact);

export default router;



