# ConFusion Node Backend

## Create Database

1. `sudo mysql`
2. `CREATE DATABASE confusion;`
3. `SET GLOBAL validate_password.policy=LOW;`
4. `CREATE USER 'confuseduser'@'localhost' IDENTIFIED BY 'enigma123!';`
5. `GRANT ALL ON confusion.* TO 'confuseduser'@'localhost' WITH GRANT OPTION;`
6. `FLUSH PRIVILEGES;`
7. `exit`
8. `sudo mysql -u confuseduser -p confusion`

## Application Setup

1. Run `npm install`
2. Run `sequelize db:migrate`
3. Run `sequelize db:seed:all`
4. In the terminal, type `touch .env`
5. In the terminal, type `node` to open Node REPL
6. Type `require('crypto').randomBytes(64).toString('hex')` 2 times to get the values for the following constants
    `ACCESS_TOKEN_SECRET=<hexcode 1>`\
    `REFRESH_TOKEN_SECRET=<hexcode 2>`
7. Enter the text above in the .env file
8. Run `cd bin`
9. Run `openssl genrsa 1024 > private.key`
10. Run `openssl req -new -key private.key -out cert.csr`
11. Run `openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem`
12. Run `npm start`
13. Open Postman and send the following request (body option x-www-form-urlencoded):
```
        POST https://localhost:3443/users/signup
        {
            "username": "confuseduser",
            "password": "password"
        }
```
14. Open mysql REPL in the terminal and execute the following query on the `confusion` schema:
        `UPDATE Users SET admin = 1;`
15. Pull code from the repository https://github.com/khuramzahid/conFusion-Angular6 in a convenient directory
16. Check out the commit `2203e436acf8b49a377cb099fb53736d39711791`
17. Run `npm install`
18. Run  `sudo npm install --save-dev  --unsafe-perm node-sass`
19. Run `npm start`

## Acknowledgement

Jogesh Muppala 
https://github.com/jmuppala/

## Sequelize Help

1. To initialize Sequelize if already not done, type `sequelize init` in the terminal
2. Sample command to generate a new migration file `sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`
3. Sample command to generate a new seeder file `sequelize seed:generate --name demo-user`

