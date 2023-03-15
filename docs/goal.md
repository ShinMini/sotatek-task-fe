Coding Challenge

Goal
Create a simple game where you are walking along a trail. You begin your adventure at the bottom of the trail and you hike your way up to the top. If you turn around you are facing the other direction.

Requirements

Git

- Commit to GitHub
- Use single-purpose commits
- Use semantic commit messages  
(<https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716>)

Code

- Use your framework (React, Vue, or Angular)
- Use Typescript and strongly typed code
- For design use, Ionic Framework is a plus
- Unit test is a plus

Structure

- All the images will be as a JSON file, you must determine the structure. For example, you  may define it as

{
 "scenes":[
  {
   "id": 0,
   "background_url": “mountain0.png”,
   "hitzones": [
    {
     "x":“10%”,
     "y":”50%”,
     "goto":1
    }
   ]
  },
  {
   "id": 1,
   "background_url": “mountain1.png”,
   "hitzones": [
    {
     "x":“10%”,
     "y":”50%”,
     "goto":0
    },
    {
     "x":“60%”,
     "y":”50%”,
     "goto":2
    }
   ]
  }
 ]
}

Report

- Record how many hours you spent on the project
- Record what you would improve on if you had more time.
- Include these in the README.md

Assets
Here are the pictures  
<https://photos.app.goo.gl/ioPLWRSakbctgLkb8>

Design
 Works on a phone (it is still a website but is mobile first)
 Words as a desktop (responsive design)
 It has scroll left and right buttons that scroll the background image left or right.
Has a button over the trail that if you press it you walk there. Like google street view  but simpler
(<https://www.google.ca/maps/@49.8741404>,-119.3492443,3a,75y,105.46h,77.91t/data=!  3m6!1e1!3m4!1sRhiWMCxfgWeF3VOkgJW3rA!2e0!7i13312!8i6656)
