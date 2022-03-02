const app = require('express')();
const cors = require('cors');
const PORT = 8080;

app.listen(
	PORT,
	() => console.log(`It's alive on http://locallhost:${PORT}`)
);

app.use(cors({
    origin: '*'
}));

app.get('/events', (req, res) => {
	res.status(200).send([
		{
		  "timestamp": "2021-08-01T12:00:00.000Z",
		  "level": "WARNING",
		  "message": "Metric 1 is above the warning threshold"
		},
		{
		  "timestamp": "2021-08-01T13:00:00.000Z",
		  "level": "ERROR",
		  "message": "Metric 1 is above the error threshold"
		},
		{
		  "timestamp": "2021-08-01T14:00:00.000Z",
		  "level": "INFO",
		  "message": "Metric 1 is back to normal"
		},
		{
		  "timestamp": "2021-08-02T12:00:00.000Z",
		  "level": "INFO",
		  "message": "Telemetry downloaded"
		},
		{
		  "timestamp": "2021-08-02T12:01:00.000Z",
		  "level": "INFO",
		  "message": "Telemetry downloaded"
		},
		{
		  "timestamp": "2021-08-02T12:02:00.000Z",
		  "level": "INFO",
		  "message": "Telemetry downloaded"
		},
		{
		  "timestamp": "2021-08-02T12:03:00.000Z",
		  "level": "INFO",
		  "message": "Telemetry downloaded"
		}
	  ]
	  )
});