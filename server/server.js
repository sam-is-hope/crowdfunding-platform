const authRoutes = require('./routes/auth');
const campaignRoutes = require('./routes/campaigns');

app.use('/api/auth', authRoutes);
app.use('/api/campaigns', campaignRoutes);
