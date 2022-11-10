# Bootstraped from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


To start the project, run the following command:
### `npm install`
### `npm start`

&nbsp;
&nbsp;
&nbsp;

## About the app

The total time of development is about 16h.

Of course, there are a few things I missed due to time constraints: write tests, implement with typescript, a hook that will handle the API requests better (handle errors etc.), better search functionality (autosuggestions while typing, search details page).

Homepage:
I chose to show the popular movies (default / first page). 
Taking in consideration that the API does not have an option to receive all the movies, the requierment about "all movies" couldn't be followed. However, I can also think of a solution to do multiple requests, but the API returns around 500 pages (~10 k movies) and I am not sure that this was the wanted functionality.
The movies shown can be sorted descending and ascending by rating and release date and also can be filtered by genre.
The search is doing a request to the API with the search term and shows the results. When you click on the movie in the search, you will be redirected to the details page for that movie. Here I would have probably also use an autosuggestions as we type the string and maybe also a search page.

Details Page:
The details page will show information collected from the API for individual movie request based on the id in the route (param).
For each movie you have the possibility to add your own rating. This rating is stored in localStorage, this means that it will be available after a refresh of the page as well.
The similar movies section is fetching data based on the id of the movie that we show in the details page.

Specs:
I do not have experience with D3.js, I heard about it before but that's it.
It was a good exercise to implement the top 10 rated movies. The graphs are custom made. Probably if we would need different data types, then will have to be re-engineered.


In conclusion, it was a challenge to do it in a short time and there are a few things that will need improvements. Also, useMemo and useCallback can be used, but I noticed in the last few projects that is kind of arbitrary and for those hooks to add real improvements in performance a more comprehensive impact testing and debugging are needed.

Thank you!