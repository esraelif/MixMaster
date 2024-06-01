![](https://github.com/esraelif/MixMaster/blob/main/MIXMASTER/src/assets/mix.gif)


Steps
Install and Setup
-npm install
-npm run dev


SPA
SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.
Setup Pages
pages are components
create src/pages
About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
export from index.js


Loader
Each route can define a "loader" function to provide data to the route element before it renders.

must return something even "null" otherwise error


Landing - Fetch Drinks
empty search term returns some default drinks
if search term yields not drinks drinks:null

Query Params
const url = new URL(request.url); This line of code creates a new URL object using the URL constructor. The URL object represents a URL and provides methods and properties for working with URLs. In this case, the request.url is passed as an argument to the URL constructor to create a new URL object called url.

The request.url is an input parameter representing the URL of an incoming HTTP request. By creating a URL object from the provided URL, you can easily extract specific components and perform operations on it.

const searchTerm = url.searchParams.get('search') || ''; This line of code retrieves the value of the search parameter from the query string of the URL. The searchParams property of the URL object provides a URLSearchParams object, which allows you to access and manipulate the query parameters of the URL.

The get() method of the URLSearchParams object retrieves the value of a specific parameter by passing its name as an argument. In this case, 'search' is passed as the parameter name. If the search parameter exists in the URL's query string, its value will be assigned to the searchTerm variable. If the search parameter is not present or its value is empty, the expression '' (an empty string) is assigned to searchTerm using the logical OR operator (||).



Redirects
in public folder create "_redirects"
