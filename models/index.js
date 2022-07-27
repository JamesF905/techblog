const User = require('./user');
const Blog = require('./ulog');
const Comment = require('./uomment');


User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});  
  
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };