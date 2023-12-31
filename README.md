# Log-Register-with-elastic-search


## Overview
This project is a demonstration of implementing Elasticsearch for efficient log management and querying. It provides functionalities for querying logs based on various parameters such as level, message, resource ID, trace ID, span ID, commit, and parent resource ID.

![1111111111](https://github.com/ShiveshSinghRao/Log-Register-with-elastic-search/assets/94308757/e94ed856-70b4-42d2-94db-6d8dd37abfa1)

### Watch how project works on :https://drive.google.com/file/d/1TYxDKFWSdCvT75qae2B5020kRQXMYCg6/view?usp=drive_link

## Features
- **Log Ingestion**: Allows users to input log data with specified fields.
- **Query Interface**: Provides a user-friendly interface to search logs based on different criteria.
- **Log Display**: Displays queried logs in a tabular format.

## Technologies Used
- **Elasticsearch**: Used as the primary database for log storage and querying.
- **React.js**: Frontend framework used for building the user interface.
- **Node.js & Express.js**: Backend server handling API requests and Elasticsearch interactions.

## Prerequisites
- Node.js and npm installed
- Elasticsearch set up and running locally or remotely

## Setup Instructions
1. Clone the repository: `git clone : https://github.com/ShiveshSinghRao/Log-Register-with-elastic-search`
2. Install dependencies:
   - For frontend:
     ```
     cd client
     npm install react-table react-toastify
     ```
   - For backend:
     ```
     cd api
     yarn install express nodemon cors express-async-errors body-parser @elastic/elasticsearch
     ```
3. Configure Elasticsearch connection details in the backend code.

## Usage
1. Start the backend server: `yarn start` in the backend directory.
2. Start the frontend application: `npm start` in the frontend directory.
3. Access the application via `http://localhost:your-port`.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.

## License
This project is licensed under the [MIT License](LICENSE).
