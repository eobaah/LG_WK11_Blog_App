const express = require('express');
const router = express.Router();
const path = require( 'path' )
const { db,getAllPosts, getPost, createPost, editPost, deletePost } = require( '../database/database')
const moment = require ( 'moment' )

/* GET home page. */
router.get('/', (request, response) => {
  getAllPosts().then( posts => {
    response.render('index', { posts, normalizeDate: normalizeDate } )
  })
})

router.get( '/api/', (request, response) => {
  getAllPosts().then( posts => {
    response.json({ posts, normalizeDate: normalizeDate } )
  })
})


router.get('/:id', ( request, response ) => {
  getPost( request.params.id )
  .then( post => {
    response.json( post )
  })
})

const normalizeDate = (date) =>{
  return moment(date).format('MMMM Do YYYY')
}

router.post( '/create', (request, response, next ) => {
  const newPost = request.body
  createPost( newPost )
    .then( () => response.redirect('http://localhost:3000') )
})

router.post( '/delete/:id', ( request, response, next ) => {
  const id = request.params.id
  console.log('checking ID in routes',id);
  deletePost( id )
    .then( () => response.redirect('http://localhost:3000') )
})

router.post( '/edit/:id', ( request, response, next ) => {
  const id = request.params.id
  const blogPost = request.body
  editPost( id, blogPost)
  .then( () => {
    response.redirect('http://localhost:3000')
  })
})


module.exports = router;
