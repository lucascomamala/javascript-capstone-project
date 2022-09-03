![](https://img.shields.io/badge/Microverse-blueviolet)


# HOLLYWOOD CENTRAL, a JavaScript capstone project 

> It's a responsive web application based on externals APIs, which randomly displays many TV Shows, Actors and Actresses allowing the user to request details of each one through pop-up windows and give them "likes" and comments

## Live Demo

[Live Demo Link](https://lucascomamala.github.io/javascript-capstone-project/)

## Video preview

[Video Presentation](https://drive.google.com/file/d/122AsXE1nMq4ckSANFP-M0jwXNrOFpzxv/view?usp=sharing)

## GENERAL REQUIREMENTS

### APIs
  First, you need to find an API so you can base the development of the webapp around it. The API should allow you to:
  - Get a list of items with a unique item id (or generate the unique id).
  - For a given item, get detailed information about it.
  We recommend that you choose an API that doesn't need authentication. if you select an API that requires authentication, you should implement it on your own. Also, if you select an API that provides image resources your webapp will be more visual.

### Interfaces
  You should build these interfaces:
   - The home page.
   - The comments popup.
  
### Home page
  When the page loads, the webapp retrieves data from:
  - The selected API and shows the list of items on screen.
  - The Involvement API to show the item likes.
  Remember that your page should make only 2 requests:
  - One to the base API.
  - And one to the Involvement API.
    When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
  When the user clicks on the "Comments" button, the Comments popup appears.
  Home page header and navigation similar to a given mockup.
  Home page footer similar to a given mockup.

### Comments popup
  When the popup loads, the webapp retrieves data from:
  -The selected API and shows details about the selected item.
  -The Involvement API to show the item comments.
  -When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.
  
### Counters in each of the interfaces, that shows:
  The number of items (home).
  The number of comments (comments popup).
  Even if the API gives you these numbers, you will create a specific function to calculate these numbers in each page. These count functions need to be covered with unit tests using Jest.

### Technical set up
  Set up the repository on GitHub and use Gitflow.
  Set up webpack.
  Set up a JavaScript testing library (Jest).

## Built With

- HTML / CSS 
- JavaScript: objects, classes and modules with ES6 syntax 
- Webpack
- Gitflow
- Jest tests
- External APIs

## Getting Started

- To get a local copy up, clone the repo like this: 

  git clone https://lucascomamala.github.io/javascript-capstone-project/

- Install the dependencies using `npm install` and then run the project from the root of the folder using this command `npm run start`

## Authors

- Lucas Comamala (GitHub: https://github.com/lucascomamala)
- Carlos Molina  (GitHub: https://github.com/cmolinan)
   
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.
Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments 

- This webpage is based on a Microverse request

## 📝 License

This project is [MIT](./MIT.md) licensed.
