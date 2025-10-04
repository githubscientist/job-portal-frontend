# Job Portal Application

A comprehensive job portal application built with React.js frontend and Node.js backend, featuring role-based dashboards for admins, recruiters, and job seekers.

## Features

### Admin Dashboard

- **Company Management**: Create, edit, and delete companies
- **Recruiter Management**: Create recruiters and assign them to companies
- **User Management**: View all registered users
- **Statistics**: View system-wide statistics and metrics

### Recruiter Dashboard

- **Job Management**: Create, edit, and delete job postings
- **Application Management**: View and manage job applications
- **Status Updates**: Update application status (pending, reviewing, shortlisted, rejected, hired)
- **Company Integration**: Manage jobs for assigned company

### User Dashboard

- **Application Tracking**: View all submitted job applications
- **Status Monitoring**: Track application status in real-time
- **Statistics**: Personal application statistics
- **Quick Actions**: Easy access to browse jobs and update profile

### Home Page

- **Job Search**: Advanced search with filters (location, job type, experience level)
- **Job Browsing**: Paginated job listings with detailed information
- **Job Details**: Comprehensive job information with company details
- **Application Process**: Seamless job application with cover letter

## Tech Stack

### Frontend

- **React.js**: Modern UI library
- **React Router**: Client-side routing
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **React Toastify**: Toast notifications
- **Axios**: HTTP client

### Backend

- **Node.js**: Server runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **bcrypt**: Password hashing

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd job-portal-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/job-portal
   JWT_SECRET=your-secret-key
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd job-portal-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user
- `POST /auth/logout` - User logout

### Companies (Admin only)

- `GET /companies` - Get all companies
- `POST /companies` - Create company
- `PUT /companies/:id` - Update company
- `DELETE /companies/:id` - Delete company
- `POST /companies/recruiters` - Create recruiter

### Jobs

- `GET /jobs` - Get all jobs (public)
- `GET /jobs/:id` - Get job by ID (public)
- `POST /jobs` - Create job (recruiter)
- `PUT /jobs/:id` - Update job (recruiter)
- `DELETE /jobs/:id` - Delete job (recruiter)
- `GET /jobs/recruiter/jobs` - Get recruiter's jobs
- `GET /jobs/recruiter/jobs/:id/applications` - Get job applications

### Applications

- `POST /applications/:jobId/apply` - Apply for job (user)
- `GET /applications/applications` - Get user's applications
- `PUT /applications/:id/status` - Update application status (recruiter)

## User Roles & Permissions

### Admin

- Full system access
- Company and recruiter management
- System monitoring and analytics
- User management

### Recruiter

- Job posting and management
- Application review and status updates
- Company-specific operations
- Analytics for posted jobs

### User (Job Seeker)

- Job search and browsing
- Job application submission
- Application tracking
- Profile management

## Application Flow

### For Job Seekers

1. Register/Login to the platform
2. Browse jobs on the home page
3. Use search and filters to find relevant positions
4. Click on job cards to view detailed information
5. Apply for jobs with a cover letter
6. Track application status in the dashboard

### For Recruiters

1. Login with recruiter credentials (created by admin)
2. Access recruiter dashboard
3. Create and manage job postings
4. Review incoming applications
5. Update application statuses
6. Communicate with applicants

### For Admins

1. Login with admin credentials
2. Access admin dashboard
3. Manage companies and create recruiters
4. Monitor system usage and statistics
5. Oversee platform operations

## Key Features in Detail

### Advanced Job Search

- **Text Search**: Search by job title, description, or skills
- **Location Filter**: Filter by job location
- **Job Type Filter**: Full-time, part-time, contract, freelance, internship
- **Experience Level**: Entry, mid, senior, executive level positions
- **Pagination**: Efficient browsing of large job lists

### Application Management

- **Real-time Status Updates**: Applications update status instantly
- **Cover Letter Support**: Personalized applications with cover letters
- **Application History**: Complete application tracking
- **Status Indicators**: Visual status indicators (pending, reviewing, shortlisted, rejected, hired)

### Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Great experience on tablets
- **Desktop Enhancement**: Full-featured desktop interface

### Security Features

- **Role-Based Access Control**: Strict permission system
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Secure password storage
- **Route Protection**: Protected routes based on user roles

## Development Guidelines

### Code Structure

- **Components**: Reusable UI components
- **Pages**: Route-level components
- **Services**: API integration layer
- **Redux**: Centralized state management
- **Loaders**: Route data loading

### Best Practices

- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Loading indicators for better UX
- **Form Validation**: Client-side and server-side validation
- **Responsive Design**: Mobile-first approach

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.
