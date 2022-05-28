# TatDo
![TatDo](TatDoREADME.png)

TatDo allows users to keep track of tattoo artists they would like to be tattooed by, along with tattoo ideas. Rather than keeping notes of tattoo ideas in one app, and bookmarking artist profiles in another, TatDo lets users organize all of this in one place. TatDo is for tattoo collectors who need some structure for their enthusiasm. 

## Planning
- [ERD](https://dbdiagram.io/d/6134dcc6825b5b0146f39bb3)

## Setup
1. `git clone git@github.com:cod-y-clark/TatDo.git`
1. `cd` into the created directory
1. `json-server -p 8088 -w api/database.json`
1. Type `npm start` to auto host the app.

## Using TatDo
1. Create a new account. This is not true authentication - login information is saved to the JSON database and will be visible to anyone. Do not use your real info when testing this app
1. Go to the "Artists" page and add a tattoo artist you're interested in collecting work from. 
1. Navigate to the "Ideas" page to add an idea for a tattoo, and select one of the previously added Artists. 
1. View completed "Ideas" on the respective page linked in the navigation bar. 
1. Edit "Ideas" and "Artists" as necessary

## Example Data
```json
{
  "users": [
    {
      "id": 1,
      "name": "Cody Clark",
      "email": "cody@cody.com",
      "password": "123"
    }
  "artists": [
    {
      "name": "Chad Koeplinger ",
      "ig_url": "https://www.instagram.com/chadkoeplingertattoo/?hl=en",
      "location": "Nashville, TN",
      "id": 1
    }
  ]
  "ideas": [
    {
      "id": 1,
      "artistId": 1,
      "desc": "Butterfly",
      "body_loc": "Full Stomach",
      "budget": "1500",
      "color": "Color",
      "appt_date": "",
      "completed": false,
      "finalCost": ""
    }
  ]
}
```

## Technologies Used: 
- JavaScript
- [React](https://reactjs.org/)
- CSS
- HTML
