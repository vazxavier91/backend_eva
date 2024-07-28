POST /orders
Content-Type: application/json
//random total_price inputes 
{
    "user_id": 123,
    "total_price": 150.00
}

POST /orders/456/items
Content-Type: application/json

{
    "product_id": 789,
    "quantity": 3,
    "price": 30.00
}

GET /orders/123/total