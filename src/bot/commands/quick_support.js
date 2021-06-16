/* Copyright © Inertia Lighting | All Rights Reserved */

//---------------------------------------------------------------------------------------------------------------//

'use strict';

//---------------------------------------------------------------------------------------------------------------//

const stringSimilarity = require('string-similarity');

const { Discord, client } = require('../discord_client.js');

//---------------------------------------------------------------------------------------------------------------//

const bot_command_prefix = process.env.BOT_COMMAND_PREFIX;

//---------------------------------------------------------------------------------------------------------------//

/**
 * @typedef {{
 *  title: String,
 *  searchable_queries: String[],
 *  support_contents: String,
 * }} QuickSupportTopic
 * @typedef {QuickSupportTopic[]} QuickSupportTopics
 */

//---------------------------------------------------------------------------------------------------------------//

/**
 * searchable_query must be lowercase
 * @type {QuickSupportTopics} 
 */
const qs_topics = [
    // {
    //     title: 'What are Identity Tokens?',
    //     searchable_queries: [
    //         'identity tokens',
    //     ],
    //     support_contents: `Check out the \`${bot_command_prefix}identity_token\` command for more info on identity tokens.`,
    // },
    {
        title: 'What is Update Catalyst?',
        searchable_queries: [
            'update catalyst',
        ],
        support_contents: '**Update Catalyst** is an upcoming update to all of our products / systems; its release date is currently unknown.',
    }, {
        title: 'Enabling Roblox Output (in-studio)',
        searchable_queries: [
            'roblox studio output',
        ],
        support_contents: 'To open the output window in Roblox Studio, click on the **View** tab and then click on **Output**.',
    }, {
        title: 'Enabling Roblox Output (in-game)',
        searchable_queries: [
            'roblox game output',
        ],
        support_contents: 'To open the **Developer Console** (Output) in Roblox, press F9 or type \`/console\` in the **game\'s chat**.',
    }, {
        title: 'Who is \"Templates\"?',
        searchable_queries: [
            'templates',
        ],
        support_contents: '\"Templates\" is a user generated by Roblox to give users a platform to start building on...\nIf you see the user \"Templates\" in your products, you need to restart your studio session and publish your game.',
    }, {
        title: 'What are the prices for our products?',
        searchable_queries: [
            'product prices',
        ],
        support_contents: `Check out the \`${bot_command_prefix}products\` command for more info on our product prices.`,
    }, {
        title: 'How to make purchases via PayPal',
        searchable_queries: [
            'paypal',
        ],
        support_contents: 'Please open a support ticket <#814197612491833354> to purchase using PayPal.',
    }, {
        title: 'How do I purchase a product?',
        searchable_queries: [
            'purchasing products',
            'buying products',
        ],
        support_contents: 'Check out <#601891200273743932> for more info on buying our products.',
    }, {
        title: 'How do I use the products that I bought?',
        searchable_queries: [
            'using products',
        ],
        support_contents: 'Check out <#822726590508957727> for more info on using our products.',
    }, {
        title: 'Am I able to receive a refund?',
        searchable_queries: [
            'refunds',
        ],
        support_contents: 'Currently, we do not offer refunds; as stated by our product hub confirmation screens.\nThe cost of refunding is greater than the amount that we make from each transaction.',
    }, {
        title: 'How do I open a Support Ticket?',
        searchable_queries: [
            'support tickets',
            'opening a support ticket',
        ],
        support_contents: 'Check out <#814197612491833354> for more information on opening support tickets.',
    }, {
        title: 'Can I share products that I own?',
        searchable_queries: [
            'sharing products',
        ],
        support_contents: 'No, unless you are the owner of a Roblox Group\'s games that others can develop in.',
    }, {
        title: 'Can I work for Inertia Lighting?',
        searchable_queries: [
            'working for inertia',
            'inertia lighting jobs',
            'jobs',
        ],
        support_contents: 'Short answer, yes. Long answer, maybe. Our acceptance on staff is purely dependant on what is in the <#838557713239375872> channel.',
    }, {
        title: 'Am I able to transfer my product(s)?',
        searchable_queries: [
            'product transfers',
        ],
        support_contents: 'Yes, although once you transfer your product(s), you will not be able to use those product(s) until you re-purchase them.\nOpen a Product Transfers support ticket to start a transfer!',
    }, {
        title: 'How to enable HTTP Requests',
        searchable_queries: [
            'http requests',
        ],
        support_contents: 'To enable HTTP Requests, open the \"Game Settings\" menu in Roblox Studio, click on the \"Security\" tab, enable \"HTTP requests\", then save changes.',
    },
];

//---------------------------------------------------------------------------------------------------------------//

module.exports = {
    name: 'quick_support',
    description: 'provides a method to quickly look up support topics',
    aliases: ['quick_support', 'qs'],
    permission_level: 'public',
    async execute(message, args) {
        const { command_prefix, command_name, command_args } = args;

        const search_query = command_args.join(' ').trim().toLowerCase();

        if (search_query.length === 0) {
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 0xFFFF00,
                        author: {
                            iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
                            name: 'Inertia Lighting | Quick Support System',
                        },
                        title: 'Improper Command Usage!',
                        description: [
                            'Please provide a quick support topic to lookup!',
                            'Example:',
                            '\`\`\`',
                            `${command_prefix}${command_name} refunds`,
                            '\`\`\`',
                            'You can find a list of topics to lookup by doing the following:',
                            '\`\`\`',
                            `${command_prefix}${command_name} topics`,
                            '\`\`\`',
                        ].join('\n'),
                    }),
                ],
            }).catch(console.warn);
            return;
        }

        if (['topics'].includes(search_query)) {
            const qs_searchable_queries = qs_topics.map(qs_topic => qs_topic.searchable_queries[0]);

            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 0xFFFF00,
                        author: {
                            iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
                            name: 'Inertia Lighting | Quick Support System',
                        },
                        title: 'Searchable Quick Support Topics',
                        description: [
                            'Here is a list of topics that can be searched using this command:',
                            '\`\`\`',
                            qs_searchable_queries.map(search_query => `${command_prefix}${command_name} ${search_query}`).join('\n'),
                            '\`\`\`',
                        ].join('\n'),
                    }),
                ],
            }).catch(console.warn);

            return;
        }

        const mapped_qs_topics = [];
        for (const qs_topic of qs_topics) {
            let similarity_score_total = 0;
            for (const searchable_query of qs_topic.searchable_queries) {
                const similarity_score = stringSimilarity.compareTwoStrings(search_query, searchable_query);
                similarity_score_total += similarity_score;
            }

            const similarity_score_average = similarity_score_total / qs_topic.searchable_queries.length;

            mapped_qs_topics.push({
                ...qs_topic,
                similarity_score: similarity_score_average,
            });
        }

        const matching_qs_topics = mapped_qs_topics.filter(qs_topic => qs_topic.similarity_score > 0.45);
        if (matching_qs_topics.length === 0) {
            const example_qs_topics = qs_topics.slice(0, 3).map(qs_topic => qs_topic.searchable_queries[0]);
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 0xFFFF00,
                        author: {
                            iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
                            name: 'Inertia Lighting | Quick Support System',
                        },
                        title: 'Improper Command Usage!',
                        description: [
                            'I couldn\'t find quick support topic that matches your search query!',
                            '\nFor example; here are a few quick support topics that you can lookup:',
                            `\`\`\`\n${example_qs_topics.map(example_qs_topic => `${command_prefix}${command_name} ${example_qs_topic}`).join('\n')}\n\`\`\``,
                        ].join('\n'),
                    }),
                ],
            });
            return;
        }

        const best_matching_qs_topic = matching_qs_topics.reduce((previous, current) => previous.similarity_score > current.similarity_score ? previous : current);

        message.channel.send({
            embeds: [
                new Discord.MessageEmbed({
                    color: 0x60A0FF,
                    author: {
                        iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
                        name: 'Inertia Lighting | Quick Support System',
                    },
                    title: `${best_matching_qs_topic.title}`,
                    description: `${best_matching_qs_topic.support_contents}`,
                }),
            ],
        });
    },
};
