const express = require('express')
const app = express();
const PORT = 8000;
const { connectDB } = require('./connectDatabase');
const { syncDatabase } = require('./syncDatabase.js');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const imageRouter = require('./routes/imageRoute');
const eagerlazyRoute = require('./routes/eagerlazyRoute')
const transactionRouter = require('./routes/transaction')
const queryInterfaceRouter = require('./routes/queryInterfaceRoute')

app.get('/', (req, res) => {
    res.send("Home page");
});

app.use(express.json())
app.use('/api/v1',userRouter)
app.use('/api/v1',postRouter)
app.use('/api/v1',imageRouter)
app.use('/api/v1',eagerlazyRoute)
app.use('/api/v1',transactionRouter)
app.use('/api/v1',queryInterfaceRouter)

const startServer = async () => {
    const server = app.listen(PORT, () => {
        console.log(`app is listening at port ${PORT}`);
    })
    try {
        await connectDB();
        console.log("succesfully connected to database");
        console.log("server started");
        syncDatabase();
    } catch (error) {
        console.log(`cannot connect to database bcoz of ${error}`);
        server.close(() => {
            console.log("Shutting down server");
        });
        process.exit(1)
    }
};
startServer();