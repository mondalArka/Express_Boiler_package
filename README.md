# boiler-plate-expressjs

`boiler-plate-expressjs` is a package designed to help developers quickly set up a basic Express.js project with the option to choose between MySQL and MongoDB databases. This package automates the creation of a project structure, installs necessary dependencies, and helps set up the boilerplate code, saving you time and effort. It's perfect for developers who want to skip the repetitive setup process and jump straight into building their application.

## Key Features:
- **Database Setup**: Choose between MySQL (with TypeScript for ORM support) or MongoDB.
- **Authentication**: Option to include JWT authentication setup for your app.
- **Request Validation**: Option to add request validation to ensure cleaner code and error handling.
- **Joi**: Used for request validation, when Database selected as MongoDB.
--**class-validator**: Used for request validation, when Database selected as MySQL.
- **Prisma ORM** for MySQL and **Mongoose ORM** for MongoDB.

## Intended Audience:
This package is ideal for:
- Freshers/new developers who are just starting with Express.js and want a simple setup to get going.
- Intermediate developers who need to quickly generate a boilerplate project without worrying about repetitive setup tasks.

## How to Use:

### 1. Install the package and executing the package

### 1.1 Installing the package
To get started, you can install `boiler-plate-expressjs` globally or as a dev dependency in your project. To install globally, run:

```bash
npm install -g boiler-plate-expressjs
```
### 1.2 Executing the package
Use this command in the bash to execute the package:
```bash
npx boiler-plate <your-directory-name>
```

### 2. Directly Execute the package
Use this command in the bash:
```bash
npx boiler-plate-expressjs <your-directory-name>
```

## Note:
Updates are still going...