# AgriApp

## Overview

AgriApp is a comprehensive application designed to assist farmers and agricultural stakeholders in managing their lands, monitoring weather conditions, and performing remote sensing analysis for soil health. The app aims to leverage modern technologies to provide valuable insights and streamline various agricultural processes.

<table style="border-collapse: collapse; max-width: 80%; margin: auto; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <tr>
        <td style="text-align: center; padding: 16px; vertical-align: middle;text-align:center" align="center">
            <img src="./app_logo.png" alt="App Logo" style="width: 100px; height: auto;text-align:center;display: block; margin-left: auto; margin-right: auto;">
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding: 16px; vertical-align: middle;">
            Using software systems by (thanks to)
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding: 16px; vertical-align: middle;">
            <img src="https://www.nabard.org/auth/writereaddata/ContentImgs/1303194734NABARD-ENG-logo-big.png" alt="NABARD" style="width: 75px; margin: 0 10px;border: 1px solid;padding: 0px 5px 0px 5px">
            <img src="https://www.nrsc.gov.in/sites/default/files/inline-images/nrsc_logo_412023_new.png" alt="NRSC/ISRO" style="width: 350px; margin: 0 10px;border: 1px solid;padding: 0px 5px 0px 5px">
            <img src="https://bhoonidhi.nrsc.gov.in/bhoonidhi/images/BhooLogoSearch.png" alt="Bhoonidhi" style="width: 150px; margin: 0 10px;border: 1px solid;padding: 0px 5px 0px 5px">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/India_Meteorological_Department_%28logo%29.png/150px-India_Meteorological_Department_%28logo%29.png" alt="IMD" style="width: 50px; margin: 0 10px;border: 1px solid;padding: 0px 5px 0px 5px">
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding: 16px; vertical-align: middle;">
            In consultation for problem statements with professors from
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding: 16px; vertical-align: middle;">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/IIIT_Bangalore_Logo.svg/1200px-IIIT_Bangalore_Logo.svg.png" alt="IIIT Bangalore" style="width: 100px; height: auto;">
            <h5>and other private FPOs, CBBOs, agricultural land owners and farmers.</h5>
        </td>
    </tr>
</table>

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication**: Signup and login functionality for users.
- **Dashboard**: Personalized user dashboard with various options.
- **Live Weather**: Real-time weather information for specific lands.
- **Land Management**: Add and manage land details.
- **Remote Sensing Analysis**: Perform soil health analysis using remote sensing data.

## Tech Stack

### Frontend

- React Native
- React Navigation

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB
- React Native CLI

### Backend Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/rogue0xbyte/agriSure-app
    cd agriSure-app/backend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Configure MongoDB**:

    Ensure MongoDB is running on your machine. You can start MongoDB using:

    ```sh
    mongod
    ```

4. **Run the backend server**:

    ```sh
    npm start
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:

    ```sh
    cd ../frontend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the React Native app**:

    ```sh
    npx react-native run-android # For Android
    npx react-native run-ios # For iOS
    ```

## Usage

1. **Create an Account**:
    - Open the app and navigate to the "Create Account" screen.
    - Fill in the required details and sign up.

2. **Dashboard**:
    - After signing up, you'll be redirected to your personalized dashboard.
    - Explore various features like Live Weather, Add Land, and Remote Sensing Analysis.

3. **Live Weather**:
    - View real-time weather information for your lands.

4. **Add Land**:
    - Add details of your land including survey number, state, and land name.

5. **Remote Sensing Analysis**:
    - Perform soil health analysis using remote sensing data.

## API Endpoints

### Authentication

- **Signup**: `POST /api/auth/signup`
- **Login**: `POST /api/auth/login`

### Land Management

- **Add Land**: `POST /api/land/add`
- **Get Lands**: `GET /api/land`

### Weather

- **Get Weather**: `GET /api/weather/:landId`
