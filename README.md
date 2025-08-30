# A CRUD Operation on Posts

This application helps in Creating, Reading (with pagination), Updating and Deleting Posts which comprises of the following attributes: Author, Date, Title, Description, Image, Views, Likes, Comments and Read More. It employs the use of Postgres as the Database in use and NestJs.

## Installation

```bash
npm install
```

## Running the app
Ensure to have created your databasebefore running the app, here the database name is 'post-app'.
{DBPassword} - your password set in postgres  to access the databases.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## API endpoints and usage

There are 5 endpoints created for this project, they are:

- Get Post: To get all posts created, run `http://localhost:3000/posts` with the GET method.
- Get a single post: In retrieving a single post, an ID which was primarily generated is employed. This ID is of type number and is attached to each post created. To find a specific post, run `http://localhost:3000/posts/getPost/:id` with the GET method.
- Create a Post: To create a post, run `http://localhost:3000/posts` with the attributes of the Entity (Post) declared in the Body with the POST method. For example:

```bash
{
    "author": "Thumi Satgo Patel",
    "date": "2025/06/21",
    "title": "Ultimate rise of Node.js frameworks: Express vs. NestJS",
    "description": "Comparing two popular Node.js frameworks for backend development.",
    "image": "https://via.placeholder.com/300x200",
    "views": 31,
    "likes": 30,
    "comments": 23,
    "readMore": true
  }
```

- Updating a Post: To make changes to a post, for example, making changes to the title or description of a post, run `http://localhost:3000/posts/updatePost/:id`  with the PUT method . The id attached to that post is added as a parameter and whatever attributes you want changed is done so in the body.

```bash
{
    "author": "Thumi Satgo Patelli",
  }
```

- Deleting a Post: This involves removing a particular post with its other attributes, to do this, the ID attached to that particular post is attached as a parameter. Run this API using `http://localhost:3000/posts/deletePost/:id` with the DELETE method.


## Pagination implementation (limit & offset/page-based)
Pagination was achieved here using Pagination from nestjs-typeorm-paginate. To consume this API, run `http://localhost:3000/posts` with the GET method. This API requires two query parameter, which are: page and limit. The limit describes how many posts you want to see per page

The output below was gotten by using 1 for the page number and 5 for limit:

```bash
{
  "items": [
    {
      "id": 2,
      "author": "Annatasia Beverly",
      "date": "2024-05-22T23:00:00.000Z",
      "title": "Top Strategies for Water Conservation in Business",
      "description": "Simple steps for managing water resources effectively.",
      "image": "https://via.placeholder.com/300x200",
      "views": 30,
      "likes": 15,
      "comments": 10,
      "readMore": true
    },
    {
      "id": 3,
      "author": "Jamal Okoye",
      "date": "2025-01-11T23:00:00.000Z",
      "title": "Building Scalable APIs with NestJS",
      "description": "A guide to designing robust and scalable backend services.",
      "image": "https://via.placeholder.com/300x200",
      "views": 120,
      "likes": 45,
      "comments": 18,
      "readMore": true
    },
    {
      "id": 4,
      "author": "Fatima Al-Mansour",
      "date": "2024-11-02T23:00:00.000Z",
      "title": "Empowering Communities Through Tech",
      "description": "How NGOs are using digital tools to drive social impact.",
      "image": "https://via.placeholder.com/300x200",
      "views": 85,
      "likes": 32,
      "comments": 14,
      "readMore": true
    },
    {
      "id": 5,
      "author": "Leo Zhang",
      "date": "2025-03-07T23:00:00.000Z",
      "title": "PostgreSQL Performance Tuning Tips",
      "description": "Optimize your database for speed and reliability.",
      "image": "https://via.placeholder.com/300x200",
      "views": 210,
      "likes": 78,
      "comments": 25,
      "readMore": true
    },
    {
      "id": 6,
      "author": "Chidinma Eze",
      "date": "2024-09-16T23:00:00.000Z",
      "title": "Mental Fitness for Tech Professionals",
      "description": "Strategies to stay sharp and focused in high-pressure roles.",
      "image": "https://via.placeholder.com/300x200",
      "views": 60,
      "likes": 22,
      "comments": 9,
      "readMore": true
    }
  ],
  "meta": {
    "totalItems": 12,
    "itemCount": 5,
    "itemsPerPage": 5,
    "totalPages": 3,
    "currentPage": 1
  }
}
```

## Error handling and validation of data
Error handling and validation of data was gotten with the use of property decorators from "class-validator" module which was imported. These decorators ensured data supplied was in the format requested. For example, IsDate(), IsString() etc.

## Automated testing

The .spec.ts files that NestJS auto-generates are designed for automated testing, specifically using the Jest testing framework, which comes preconfigured in NestJS projects. The test carried out here are unit tests, as testing was done on individual components (like controllers or services) in isolation. For example:

- PostsController.spec.ts tests whether the controller is defined and can be instantiated.
- PostsService.spec.ts checks that the service behaves as expected, often mocking dependencies.

- How to run test: `npm run test`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
