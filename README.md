# ConFusion Node Backend

## Create Database

1. Run `sudo mysql`
2. Run `CREATE DATABASE confusion;`
3. Run `SET GLOBAL validate_password.policy=LOW;`
4. Run `CREATE USER 'confuseduser'@'localhost' IDENTIFIED BY 'enigma123!';`
5. Run `GRANT ALL ON confusion.* TO 'confuseduser'@'localhost' WITH GRANT OPTION;`
6. Run `FLUSH PRIVILEGES;`
7. Run `exit`
8. Run `sudo mysql -u confuseduser -p confusion`

## Application Setup

1. Run `npm install`
2. Run `sequelize db:migrate`
3. Run `sequelize db:seed:all`
4. In the terminal, type `cp .env.example .env`
5. In the terminal, type `node` to open Node REPL
6. Use `require('crypto').randomBytes(64).toString('hex')` 2 times to get the values for the following constants
    `ACCESS_TOKEN_SECRET`\
    `REFRESH_TOKEN_SECRET`
7. Enter the text above in the .env file
8. Provide the gmail account credentials in the .env file which will be used to send emails to the admin users of this application.
9. Run `cd bin`
10. Run `openssl genrsa 1024 > private.key`
11. Run `openssl req -new -key private.key -out cert.csr`
12. Run `openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem`
13. Run `npm start`
14. Open Postman and send the following request (body option x-www-form-urlencoded):
```
        POST https://localhost:3443/users/signup
        {
            "username": "confuseduser",
            "password": "password"
        }
```
15. Open mysql REPL in the terminal and execute the following query on the `confusion` schema:
        `UPDATE Users SET admin = 1;`
16. Pull code from the repository https://github.com/khuramzahid/conFusion-Angular6 in a convenient directory
17. Check out the commit `2203e436acf8b49a377cb099fb53736d39711791`
18. Run `npm install`
19. Run  `sudo npm install --save-dev  --unsafe-perm node-sass`
20. Run `npm start`

## Acknowledgement

Jogesh Muppala 
https://github.com/jmuppala/

## Sequelize Help

1. To initialize Sequelize if already not done, type `sequelize init` in the terminal
2. Sample command to generate a new migration file `sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`
3. Sample command to generate a new seeder file `sequelize seed:generate --name demo-user`

