// Contact controllers here// Contact controllers here

// Import necessary modules
import Contact from '../models/contact.model.js';

// Controller methods
const contactController = {
  // Get all contacts
  getAllContacts: async (req, res) => {
    const contacts = await Contact.find();
      res.json(contacts);
    },
  // Get a single contact by ID
  getContactById: async (req, res) => {
    const { id } = req.params;
      const contact = await Contact.findById(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(contact);
  },

  // Create a new contact
  createContact: async (req, res) => {
      const newContact = new Contact(req.body);
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
  },

  // Update a contact by ID
  updateContact: async (req, res) => {
    const { id } = req.params;
      const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(updatedContact);
    
  },

  // Delete a contact by ID
  deleteContact: async (req, res) => {
    const { id } = req.params;
      const deletedContact = await Contact.findByIdAndDelete(id);
      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json({ message: 'Contact deleted successfully' });
  }
};
export default contactController;