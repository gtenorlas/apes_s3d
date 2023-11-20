require('dotenv').config()
const express = require('express')
const app = express()

const cookieSession = require('cookie-session')
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET_KEY]
  })
)

//------------------------------------
const cors = require('cors')
app.use(cors())
//------------------------------------

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const userlevelsRoutes = require('./routes/userlevels-api')
const usersRoutes = require('./routes/users-api')
const groupsRoutes = require('./routes/groups-api')
const profilesRoutes = require('./routes/profiles-api');
const warsRoutes = require('./routes/wars-api');
const tournamentTypesRoutes = require('./routes/tournamentTypes-api');
const warsRoutes= require('./routes/wars-api');
const tournamentsRoutes = require('./routes/tournaments-api');
const playersRoutes = require('./routes/players-api');

//create endpoints
app.use('/api/userlevels', userlevelsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/groups', groupsRoutes)
app.use('/api/profiles',profilesRoutes)
app.use('/api/wars',warsRoutes);
app.use('api/tournamenttypes',tournamentTypesRoutes)
app.use('api/wars',warsRoutes);
app.use('api/tournaments',tournamentsRoutes);
app.use('api/players',playersRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running')
})
