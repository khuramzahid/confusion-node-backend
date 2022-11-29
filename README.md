## CREATE DATABASE

sudo mysql;
CREATE DATABASE confusion;
SET GLOBAL validate_password.policy=LOW;
CREATE USER 'confuseduser'@'localhost' IDENTIFIED BY 'enigma123!';
GRANT ALL ON confusion.* TO 'confuseduser'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
sudo mysql -u confuseduser -p confusion

## SEQUELIZE Migration Setup

[If-no-Sequelize-Migration-File-exist]sequelize init
[Generating-Migration-File] sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
[Generating-Seeder-File] sequelize seed:generate --name demo-user
[Starting-Point] npm install
sequelize db:migrate
sequelize db:seed:all

## FOR ENV variables

touch .env
node REPL
require('crypto').randomBytes(64).toString('hex')
ACCESS_TOKEN_SECRET=<hexcode 1>
REFRESH_TOKEN_SECRET=<hexcode 2>

## HTTPS

cd bin
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem

POST on POSTMAN body option x-www-form-urlencoded

## Start Application

npm start

POST https://localhost:3443/users/signup
{
    "username": "khuram",
    "password": "password"
}

UPDATE Users SET admin = 1;

## Acknowledgments

Jogesh Muppala 
https://github.com/jmuppala/conFusion-Angular6 commit 2203e436acf8b49a377cb099fb53736d39711791 