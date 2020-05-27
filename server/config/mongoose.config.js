const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projects', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
   
