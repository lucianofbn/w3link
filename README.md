# W**3**Link.
## _Everything about your web3 profile in one simple link_

[![N|W3Link](https://imgur.com/f67YEcC.png)](https://w3link.vercel.app)

W3Link is an easy way to have a profile with custom links on the web 3.

- https://w3link.vercel.app/

## 📋 Contents
- [Why](#why)
- [Video Demo](#video-demo)
- [Installation](#installation)
- [Public Repository](#public-repository)
- [Upgrading](#upgrading)
- [Contact](#contact)

## Why?

- Difficulty quickly getting a customizable profile that is easy to share on the web3. 

## Video Demo

Click to access our video-demo.

[![Video Demo](http://img.youtube.com/vi/FcoUvu0mGog/0.jpg)](https://www.youtube.com/watch?v=FcoUvu0mGog)

## Installation

**1 - Download the files**
```sh
git clone https://github.com/lucianofbn/w3link.git
```

**2 - Create a new Firebase Project**
- Before requesting the credentials, create a Realtime Firebase project
- Add a new web app on firebase and get your credentials
- Add the firebase credentials in a new '.env' file on "w3link/server/"  
 ```sh
FIREBASE_SERVICE_ACCOUNT_KEY=""
```
**3 - Create a new Unstoppable Domains Client**
- Register in https://dashboard.auth.unstoppabledomains.com/
- Add the creadentials in a '.env' file on "w3link/web/.env" as follows:
 ```sh
VITE_CLIENT_ID = ""  
VITE_REDIRECT_URI = "" 
```

**4 - Install and run the project**
 ```sh
npm install
npm run dev
```

## Public Repository
Click to access our repository.
| W3Link | GitHub |
| ------ | ------ |
| Public Repo | https://github.com/lucianofbn/w3link |

## Upgrading
- Add more customizable layouts
- Fetch profile data on the edit page

## Contact 
Person of contact in case there are any questions 
| Contact | Luciano Ferreira |
| ------ | ------ |
| Discord | lucianofbn#3226 |
| Contact Email | lfbnwork@gmail.com |

