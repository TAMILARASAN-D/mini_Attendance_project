const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'attendance'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render attendance page
	response.sendFile(path.join(__dirname + '/atte2.html'));
});
/*app.get('/login', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});*/
app.post('/e_attendance', function(request, response) {
	// Capture the input fields
    //let dept = request.body.dept;
    let sem = request.body.sem;
	let subject_code = request.body.sub_code;
    let at01 = request.body.ra1;
	let at02 = request.body.ra2;
	let at03 = request.body.ra3;
	let at04 = request.body.ra4;
	let at05 = request.body.ra5;
	let at06 = request.body.ra6;
	let at07 = request.body.ra7;
	let at08 = request.body.ra8;
	let at09 = request.body.ra9;
	let at10 = request.body.ra10;
	let at11 = request.body.ra11;
	let at12 = request.body.ra12;
	let at13 = request.body.ra13;
	let at14 = request.body.ra14;
	let at15 = request.body.ra15;
	let at16 = request.body.ra16;
	let at17 = request.body.ra17;
	let at18 = request.body.ra18;
	let at19 = request.body.ra19;
	let at20 = request.body.ra20;
	let at21 = request.body.ra21;
	let at22 = request.body.ra22;
	let at23 = request.body.ra23;
	let at24 = request.body.ra24;
	let at25 = request.body.ra25;
	let at26 = request.body.ra26;
	let at27 = request.body.ra27;
	let at28 = request.body.ra28;
	let at29 = request.body.ra29;
	let at30 = request.body.ra30;
	// Ensure the input fields exists and are not empty
	if (sem && subject_code) {
		// Execute SQL query that'll insert records into 21MCA table in attendance database
		connection.query('insert into 21MCA(semester,subject_code,21MCA001,21MCA002,21MCA003,21MCA004,21MCA005,21MCA006,21MCA007,21MCA008,21MCA009,21MCA010,21MCA011,21MCA012,21MCA013,21MCA014,21MCA015,21MCA016,21MCA017,21MCA018,21MCA019,21MCA020,21MCA021,21MCA022,21MCA023,21MCA024,21MCA025,21MCA026,21MCA027,21MCA028,21MCA029,21MCA030)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [sem,subject_code,at01,at02,at03,at04,at05,at06,at07,at08,at09,at10,at11,at12,at13,at14,at15,at16,at17,at18,at19,at20,at21,at22,at23,at24,at25,at26,at27,at28,at29,at30], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			else if(!error) {
				response.send('Attendance submitted successfully!!!');
			} else {
				response.send('Incorrect details');
			}			
			response.end();
		});
	}
});

// http://localhost:3000/home
/*app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome ' + request.session.username + '!!!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});*/

app.listen(3000);