const {GraphQLServer} = require('graphql-yoga');

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

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => `This is the API of Hackernews WhatEver Clone`,
        feed: () => links,
        people: () => members,
        link: (parent, args) => links.find(item => item.id === args.id)
    },

    Mutation: {
        updateLink: (parent, args) => {
            return links.map(item => {
                if(item.id === args.id){
                    item.description = args.description
                    item.url = args.url
                }
                return item
            });
        },

        deleteLink: (parent, args) => {
            links = links.filter(item => item.id !== args.id)
        },

        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            return link
        }
    },
};


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
