
const promise = require( 'bluebird')
const options = { promiseLib: promise }
const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/careful-gaur-db`
const db = pgp( CONNECTION_STRING )

const getAllPosts = () =>
  db.any(
    `SELECT * FROM posts
    ORDER BY post_date ASC`
  )

const getPost = ( id ) =>
  db.one(
    `SELECT * FROM posts
    where id=$1`, [ id ]
  )

const createPost = ( { title, author, snippet, blog_entry, image_url, tags } ) =>
  db.any(
    `INSERT INTO posts
       ( title, author, snippet, blog_entry, image_url, tags )
    VALUES
      ( $1, $2, $3, $4, $5, $6 )`,
    [ title, author, snippet, blog_entry, image_url, tags ] )

const editPost = ( id, post ) => {
  return db.oneOrNone( `UPDATE
  posts SET title=$2, author=$3, snippet=$4, blog_entry=$5, image_url=$6,
  tags=$7  WHERE id=$1`,
  [ id, post.title, post.author, post.snippet, post.blog_entry,
  post.image_url, post.tags ] )
}

const deletePost = id =>
  db.none( `DELETE FROM posts WHERE id=$1`, [ id ] )

module.exports = {
  db,
  getAllPosts,
  getPost,
  createPost,
  editPost,
  deletePost
}
