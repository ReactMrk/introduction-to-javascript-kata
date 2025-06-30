Create and push a new branch using **git checkout -b kata-javascript-name** and **git push -u origin kata-javascript-name**

# **Client management with react and hooks**

The idea of our company is to create a large application to manage clients. Therefore, Client management, from the first session, has been redeveloped using React due to its scalability.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Tips:** commented code is the skeleton to complete the exercises.

**Info:** it's not a problem that clients are lost when website is reloaded because in a future an API will be used to get them.

**Exercise 1.**

Client Management System is mind to be a large application, so in a future new react compoments related with clients will be added. Variables client and setClient will be the parameters for these new react components. In order to avoid these variables being passed again and again from parent to children, principal engineer suggested you to create a context.

**To create the context, modify src/ClientContext.js file**
