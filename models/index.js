const User = require('./users')
const Post = require('./post')
const Comments = require('./comments')

User.hasMany(Post, {
    foreignKey:"user_id",
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey:"user_id"
})

Post.hasMany(Comments, {
    foreignKey:"post_id",
    onDelete: 'CASCADE'
})


Comments.belongsTo(Post, {
    foreignKey:"post_id"
})

Comments.belongsTo(User, {
    foreignKey:"user_id"
})


module.exports = { User, Post, Comments };