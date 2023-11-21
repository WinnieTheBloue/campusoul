import Interest from '../models/interestModel.js';

const interestController = {
  async createInterest(req, res) {
    try {
      const { name } = req.body;
      const interest = new Interest({ name });
      await interest.save();
      res.status(201).json(interest);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteInterest(req, res) {
    try {
      const { id } = req.params;
      const interest = await Interest.findByIdAndDelete(id);
      if (!interest) {
        return res.status(404).json({ message: 'Interest not found' });
      }
      res.status(200).json({ message: 'Interest deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllInterests(req, res) {
    try {
      const interests = await Interest.find();
      res.status(200).json({ interests });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getInterest(req, res) {
    try {
      const { id } = req.params;
      const interest = await Interest.findById(id);
      if (!interest) {
        return res.status(404).json({ message: 'Interest not found' });
      }
      res.status(200).json({ interest });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateInterest(req, res) {
    try {
      const interest = await Interest.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ interest });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default interestController;