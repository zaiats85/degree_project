const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const {GraphQLServer} = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

let members = [
    {
        name: "Oleg",
        age: 33,
        budget: 100000,
    },
    {
        name: "Dariya",
        age: 30,
        budget: 200000,
    },
    {
        name: "Jan",
        age: 27,
        budget: 10,
    },
    {
        name: "Arcadiy",
        age: 48,
        budget: 4210000,
    },
    {
        name: "Vladimir",
        age: 60,
        budget: 1,
    },
    {
        name: "Oksana",
        age: 22,
        budget: 1000000,
    }
];
let links = [
    {
        id: 'link-0',
        url: 'www.kpi.ua',
        description: 'best education ever',
        members: [
            {
                name: "Oleg",
                age: 33,
                budget: 100000,
            },
            {
                name: "Dariya",
                age: 30,
                budget: 200000,
            },
        ]

    },
    {
        id: 'link-1',
        url: 'www.lpi.ua',
        description: 'worst education ever',
        members: [
            {
                name: "Jan",
                age: 27,
                budget: 10,
            },
            {
                name: "Arcadiy",
                age: 48,
                budget: 4210000,
            }
        ]
    },
    {
        id: 'link-2',
        url: 'www.kiokyshin.com',
        description: 'Andy Hug',
        members: [
            {
                name: "Vladimir",
                age: 60,
                budget: 1,
            },
            {
                name: "Oksana",
                age: 22,
                budget: 1000000,
            }
        ]
    }
];

const resolvers = {
    Query,
    Mutation,
    User,
    Link
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
