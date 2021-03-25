# How to use

- ### Clone this repo
```bash
$ git clone https://github.com/Gonior/aaaaaaa.git
$ npm i
$ npm start // To Run Server
```

- ### Add your mongo uri 
Create a file in root folder this project, and give a name `.env`
and type 
```bash
  MONGO_URI = <your_mongo_uri>
```
# API
- GET `/` To see all coupon
- POST `/add` To add coupon with the following format :  
  |key | type | default | opt | desc |
  |----|------|---------|-----| ----- | 
  |name|String| null | required| the name of coupon |
  |amount|Number|null| required| amount of coupon, can be $ or % |
  |couponType|String|null| required | FIX or PERCENTAGE |
  |expiredON|Number|null| required | count in days |
  |createdON|Date|`Date.now()`| required | - |
  |updateON|Date|`Date.now()`| required | - |
  
  example : 
  ```json
  {
    "name" : "20OFF",
    "couponType" : "fix",
    "amount" : 25,
    "expiredON" : 2
  }
  ```
- POST `/check-coupon` To check a copoun with the following `json` format :  
  ```json
  {
    "id" : "<id_coupon>"
  }
  ```
  replace <id_coupon> with property `_id` in coupon data
