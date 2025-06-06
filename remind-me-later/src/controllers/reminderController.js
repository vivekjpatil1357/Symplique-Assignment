const Reminder = require('../models/reminder');

exports.createReminder = async (req, res) => {
  try {
    const { date, time, message } = req.body;

    if (!date || !time || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide date, time, and message for the reminder' 
      });
    }
    
    const newReminder = new Reminder({
      date,
      time,
      message
    });

    await newReminder.save();

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Reminder created successfully',
      data: newReminder
    });
  } catch (error) {
    console.error('Error creating reminder:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};
