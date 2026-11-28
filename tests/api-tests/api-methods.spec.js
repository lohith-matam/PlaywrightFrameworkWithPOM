import { test, expect } from '@playwright/test';

test.describe('api http methods', () => {
   let token;
   let bookingId;

test('get the token',async({request}) => {

   const logindata = {"username" : "admin","password" : "password123"}
   const response = await request.post("https://restful-booker.herokuapp.com/auth",
      {
         data:logindata,
         headers:
         {"Content-Type":"application/json"}
      })
   expect(response.ok()).toBeTruthy();
   const body = await response.json();
   token = body.token;
   console.log(token);
   expect(token).toBeTruthy();
})

test('create a bookingId', async({request}) =>{

const bookingPayload = 
{
    "firstname" : "Sam",
    "lastname" : "Brown",
    "totalprice" : 226,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

const response = await request.post("https://restful-booker.herokuapp.com/booking",
   {
      data:bookingPayload,
      headers :
      {
         "Content-Type" : "application/json"
      }
   }
   )

   expect(response.ok()).toBeTruthy();
   const body = await response.json();
   console.log(body);
   bookingId = body.bookingid;
   expect(bookingId).toBeTruthy();
   expect(body.booking.firstname).toBe(bookingPayload.firstname);

})


test('update a bookingId', async({request}) =>{

const updatePayload = 
{
    "firstname" : "Sam",
    "lastname" : "Brown",
    "totalprice" : 227,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

const updateresponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
   {
      data:updatePayload,
      headers :
      {
         "Content-Type" : "application/json",
         "Accept" : "application/json",
         "Cookie" : `token=${token}`
      }
   }
   )

   expect(updateresponse.ok()).toBeTruthy();
   const body = await updateresponse.json();
   console.log(body);
   expect(body.firstname).toBe(updatePayload.firstname);

})



})