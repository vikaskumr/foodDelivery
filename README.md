# My Application


follow the commands to run the project

npm i

npm i --g nodmeon

nodemon

curl request for csv upload  and curl request for login

curl --location --request POST 'http://localhost:3001/api/AppUsers/uploadCSV' \
--form 'file=@/Users/admin/Downloads/userData - Sheet1.csv'




curl --location --request POST 'http://localhost:3001/api/AppUsers/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username" : "vikas123",
    "password" : "vikas123"

}'


