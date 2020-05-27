const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.json());
require('./server/config/mongoose.config')
app.use(cors())
app.use(express.urlencoded({ extended: true }));

require('./server/routes/project.routes')(app);

app.listen(8000, () => console.log(`ready to rock on port: 8000`));