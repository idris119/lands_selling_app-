# Property Sales App: Full Stack Application

## Description

Welcome to the RealEstate Marketplace project! This is a full stack application built using React and Ruby, designed to help users search for and purchase properties, including houses, vehicles, and land. This README file will guide you through the setup, features, and usage of the application.

## Table of Contents
1. Getting Started
    . Prerequisites
    . Installation
2. Features
3. Usage
4. Technologies Used
5. Contributing
6. License

# Getting Started
## Prerequisites
This project has been deployed in the internet however if you want to have a copy of the project or have bought a copy follow the instructions below.
Before you begin, make sure you have the following tools and software installed:

- Node.js (v14 or higher)
- Ruby (v2.7 or higher)
- PostgreSQL (v11 or higher)
- Git

See Environment Setup below for instructions on installing these tools if you do not already have them.

## Installation

1. Start by **cloning** (not forking) the repository to yor local machine.

```console
$ git clone https://github.com/idris119/property_sale_app--front-end-.git
$ git clone https://github.com/idris119/property-sale-app-backend-.git
```
2. Navigate to the project directory:
```console
$ cd property_sale_app--front-end-
$ cd property_sale_app--back-end-
```
3. Install frontend dependencies:
In the front-end directory:
```console
$ npm install
```
4. Install backend dependencies:
In the backend directory:
```console
$ gem install bundler
$ bundle install
```
5. Set up the database:

Create a PostgreSQL database named property_sale_app_db.
Configure your database credentials in backend/config/database.yml.

6. Run database migrations:
```console
$ cd property_sale_app--back-end-
$ rails db:migrate
```
7. Start the application:
    . Start the backend server
    ```console
    $ rails server
    ```
    . Start the frontend development server:
    ```console
    $ cd property_sale_app--front-end-
    $ npm start
    ```
8. Open your web browser and navigate to http://localhost:3000 to access the application.

## Features
- User authentication and registration
- Property search based on filters (e.g., property type, location, price range)
- Detailed property listings with images and descriptions
- Secure payment processing for property purchases
- User profiles to track purchased properties and listing history

## Usage

1. Create an account or log in to your existing account.
2. Browse and search for properties using the provided filters.
3. Click on a property to view its details, including images and descriptions.
4. Add properties to your cart for purchase.
5. Proceed to checkout and complete the payment process for selected properties.
6. View your purchased properties and listing history in your user profile.

## Technologies Used
### Frontend
- React
- Redux for state management
- Fetch for HTTP requests
- React Router for navigation
- Material-UI and Bootstrap for UI components
- CSS for styling

### Backend
- Ruby on Rails
- PostgreSQL database
- Devise for authentication
- MPESA for payment processing

## Contributors
The following people were involved in the development of this project:

## Environment Setup
For those without the necessary tools to run this application i.e. Node, Ruby and PostgreSQL, please follow the instructions below.

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][] and install it. Launch the app and click
  "Initialize" to create a new server. You should now be able to run
  `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

## License
This project is licensed under the MIT License.

## Resources

- [postgres downloads page]: https://postgresapp.com/downloads.html

- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)


