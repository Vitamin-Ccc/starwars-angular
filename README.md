# Star Wars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Accomplishment

1. Home Page shows a list of people, planets, starships.
2. The People Page only displays the first 10 people because Swapi is a paginated API. Although I successfully used rxjs to fetch all the available data, the loading process was excessively slow. I commented out this functionality in the People Service to continue development without extended loading times.
3. The Planets page and Starships page should display all results rather than limiting them to the first 10.
4. I encountered difficulties getting the Modal to function properly. But I implemented routes for each person. If you input an ID number, the system should present details about that person. For instance, accessing http://localhost:4200/people/20 will provide information about Yoda, including gender, height, weight, hair color, and eye color.
5. I watched a tutorial on Signal and followed along to incorporate it into this project.

## Notes

I spent most of my time watching tutorials and really tried to grasp the basics of Angular. This assignment was overall enjoyable, but it required a lot of Googling and video-watching on Angular. Particularly with the Standalone Components update, some of the tutorials and resources were outdated. Nevertheless, it was a great learning opportunity for me. Although I faced challenges in getting the Modal to work, I acknowledge that I need more practice and time to complete this assignment.