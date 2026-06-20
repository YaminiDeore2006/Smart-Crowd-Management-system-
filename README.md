# Smart Crowd Management System

A web-based system that monitors crowd density from camera feeds using OpenCV, analyzes crowd conditions in real time, and provides insights through a dashboard — built to help manage crowds at pilgrimage sites and reduce the risk of overcrowding.

## Overview

Pilgrimage sites and large public gatherings often face overcrowding, which can pose serious safety risks. This project uses computer vision (OpenCV) to analyze crowd density from camera feeds, processes that data in real time, and presents it through an interactive dashboard so administrators can take timely action — including sending alerts/notifications when crowd levels become unsafe.

## Features

- Real-time crowd density analysis from camera feeds using OpenCV
- Interactive dashboard for visualizing crowd conditions
- SMS-based alert/notification system for crowd warnings
- RESTful backend APIs for data and alert management
- Centralized data storage for crowd and alert records

> Note: Update this list with your actual implemented features — e.g. live camera feed, heatmaps, route suggestions, historical analytics, admin panel/login, etc.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Crowd Detection | OpenCV (image/video processing) |
| Notifications | SMS integration |

## Project Structure

```
.
├── public/              # Frontend static assets
├── data/                # Data storage (e.g. crowd/alert records)
├── server.js            # Express server and API routes
├── sms-mock.js           # SMS alert/notification module
├── package.json          # Project dependencies and scripts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB (local instance or Atlas connection string)
- Python with OpenCV (if crowd detection runs as a separate service/script)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the required environment variables (see `.env.example` if provided), e.g.:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server
   ```bash
   npm start
   ```

5. Open the dashboard in your browser at `http://localhost:3000`

## How It Works

1. Camera feeds are captured and processed using OpenCV to estimate crowd density.
2. Processed data is sent to the backend (Express/Node.js) and stored in MongoDB.
3. The React dashboard fetches and displays live crowd data and conditions.
4. If crowd density crosses a defined threshold, an SMS alert is triggered to notify administrators.

## Future Improvements

- Heatmap visualization of crowd-dense zones
- Automated route suggestions to redirect crowds
- Historical analytics and trend reporting
- Role-based admin panel with authentication

## License

This project is open source and available under the [MIT License](LICENSE).
