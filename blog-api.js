POST /posts
Content-Type: application/json
//random content
{
    "title": "My New Blog Post",
    "content": "My Content."
}

POST /posts/123/comments
Content-Type: application/json

{
    "content": "Great post! Thanks for sharing."
}

GET /posts/123/comments