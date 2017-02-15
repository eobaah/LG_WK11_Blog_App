var express = require('express');
var router = express.Router();
var path = require( 'path' )
const { db,getAllPosts, getPost, createPost, editPost, deletePost } = require( '../database/database')
const moment = require ( 'moment' )


/* GET home page. */
router.get('/', (request, response) => {
  getAllPosts().then( posts => {
    response.render('index', { posts } )
  })
})

router.get('/:id', ( request, response ) => {
  getPost( request.params.id )
  .then( post => {
    response.json( post )
  })
})

router.post( '/create', (request, response, next ) => {
  const newPost = request.body
  createPost( newPost )
    .then( () => response.redirect('/') )
})

router.post( '/delete/:id', ( request, response, next ) => {
  const id = request.params.id
  deletePost( id )
    .then( () => response.redirect('/') )
})

router.post( '/edit/:id', ( request, response, next ) => {
  const id = request.params.id
  const blogPost = request.body
  editPost( id, blogPost)
  .then( () => {
    response.redirect('/')
  })
})


module.exports = router;
