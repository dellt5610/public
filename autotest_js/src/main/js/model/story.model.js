const mongoose = require('mongoose');
const storySchema = new mongoose.Schema({
    content: {type: String, required: true, trim: true}
});

const Story = mongoose.model('Story', storySchema);

module.exports = { Story };