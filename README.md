# lyftStringtoCut

# Backend application created through Node.js that accepts a POST request to route "/test" and one argument "string_to_cut"
# Returns JSON object with key "return_string" and a string containing every third letter from the string

# Requirements: Make sure to have Node.js installed

Git clone in your preferred directory

Navigate to directory and type npm start to initialize server.

Server is now ready to accept POST requests on http://localhost:8080/

# Making a post request through Postman

install the latest version of Postman (You do not need to create an account)

create a new collection and add a request

change GET to POST and paste http://localhost:8080/test in the request URL

go to body and click x-www-form-urlencoded

in the key section, type string_to_cut

in the value section, type iamyourlyftdriver

click send and you should get an output with return string as well as the string with every third letter in the value string
