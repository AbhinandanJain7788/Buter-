This project is a full-stack web application developed using React.js for the frontend and Node.js with Express and Mongoose for the backend. The application focuses on managing loan applications, user authentication (signup and login), and integrating bank performance data.
The frontend is simple yet fully functional. It features a working login and signup system — when users enter the correct details, they receive confirmation alerts, and all user data is securely stored in a MongoDB database named butter-money. The login function validates users by checking their email and password against this database.
Once logged in, users can view the Bank Partner and Time Period filter — this filter is linked to a dynamic Loan Distributed by Bank chart, allowing users to update the chart by selecting a bank. Additionally, a Bank Performance table displays data provided, clearly showcasing key metrics.
The app also includes a PDF Viewer — users can upload and easily view PDF files directly in the interface. Moving forward, the project presents multiple interactive charts, each with proper definitions and clear visual representation of loan and bank data. At the end, there is an Export to PDF feature, allowing users to download a loan table as a PDF. While currently set to download a single PDF at a time, this can be expanded to allow multiple downloads.
This project effectively combines a clean frontend with a well-connected backend, demonstrating various working functionalities. Thanks for reviewing!

📦 Features Implemented
Frontend:
User signup and login forms.
Dashboard displaying bank performance, loan products, and integration metrics.
Dynamic chart updating through bank filters.
PDF viewer for uploaded documents.
Export to PDF feature for loan tables.
Routing using React Router.
API calls with Axios for backend interaction.
Backend:
RESTful APIs built with Express.
User authentication with JWT.
MongoDB integration using Mongoose.
Routes for user signup, login, and data retrieval.

