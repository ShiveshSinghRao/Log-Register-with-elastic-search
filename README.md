# Log-Register-with-elastic-search


## Overview
This project is a demonstration of implementing Elasticsearch for efficient log management and querying. It provides functionalities for querying logs based on various parameters such as level, message, resource ID, trace ID, span ID, commit, and parent resource ID.

## Features
- **Log Ingestion**: Allows users to input log data with specified fields.
- **Query Interface**: Provides a user-friendly interface to search logs based on different criteria.
- **Log Display**: Displays queried logs in a tabular format.

## Technologies Used
- **Elasticsearch**: Used as the primary database for log storage and querying.
- **React.js**: Frontend framework used for building the user interface.
- **Node.js**: Backend server handling API requests and Elasticsearch interactions.

## Prerequisites
- Node.js and npm installed
- Elasticsearch set up and running locally or remotely

## Setup Instructions
1. Clone the repository: `git clone https://github.com/your-username/repository-name.git`
2. Install dependencies:
   - For frontend:
     ```
     cd frontend-directory
     npm install
     ```
   - For backend:
     ```
     cd backend-directory
     npm install
     ```
3. Configure Elasticsearch connection details in the backend code.

## Usage
1. Start the backend server: `npm start` in the backend directory.
2. Start the frontend application: `npm start` in the frontend directory.
3. Access the application via `http://localhost:your-port`.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.

## License
This project is licensed under the [MIT License](LICENSE).
