For this project,you will be required to install mysql and node.js modules.

Created a small REST API and a web page. 

Problem Statement:
1. Create a Web form which will take inputs from user. Below are the form fields.
a. User Name
b. Password
c. Email Id
d. Phone Number
• Note*: Use input field validation.
2. Create a REST API which will take request from the HTML form and insert the data into MySQL
database along with the current Date and Time.
3. Your API should insert the record if it doesn‘t exist, else update the previous record.
4. Create a search bar which will take email id as input and show the respective record if exist,
else show error.
5. MySQL Table struct and connection details;
a. Table Struct:
userName varchar(25) NOT Null,
emailId varchar(50) primary key,
phoneNo varchar(10) Not Null,
password varchar(50) Not Null,
dateTime Timestamp
b. Host Name: db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com
c. Port: 3306
d. User Name: dummyUser
e. Password: dummyUser01
f. Db Name: db_intern
g. Table Name: userData
• Note*: You should use Node js for API creation.
