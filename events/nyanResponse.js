const {trySimpleReplyWhenContainsArray} = require("../utils");

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        if (message.author.bot) return false;
        if (message.mentions.users.size > 0 && !message.mentions.has(client.user)) return false;
        if (Math.random() < 0.5) return;
        return await trySimpleReplyWhenContainsArray(['γ«γ', 'π'], ['γ«γγΌγ', 'γ«γ', 'γ«γγοΌ', 'γ«γγ', 'γ«γγ', 'γγ«γ', 'γ«γγΌ'], message);
    },
};
