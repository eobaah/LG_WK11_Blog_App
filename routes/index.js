var express = require('express');
var router = express.Router();
var path = require( 'path' )
const { db,getAllPosts, getPost, createPost, editPost, deletePost } = require( '../database/database')
const moment = require ( 'moment' )


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', posts: [] });
});

router.get('/test', (req, res) => {
  getAllPosts().then( posts => {
    res.render('index', { posts } )
  })
})

module.exports = router;
