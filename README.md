
# Imagica - AI Image Generation Platform

![image](https://github.com/user-attachments/assets/4b9bd4ea-c89a-4bac-b085-f751cd07e605)

## Overview
Imagica is a powerful MERN stack application that transforms text descriptions into stunning AI-generated images. Built with React, Node.js, Express, and MongoDB, it offers a seamless interface for creating unique visuals using artificial intelligence.

## Features
- **AI Image Generation**: Convert text descriptions into high-quality images
- **User Authentication**: 
  - Email/password login
  - Google OAuth integration
  - Password reset functionality
- **Credit System**: 
  - Multiple subscription plans
  - Pay-per-generation model
- **Image Management**:
  - View generation history
  - Download generated images
  - Real-time image preview
- **Responsive Design**: Fully responsive interface across all devices
- **Modern UI**: Sleek design with animations and transitions

## Tech Stack
### Frontend
- React 19
- Vite
- TailwindCSS
- Motion/React for animations
- React Router DOM
- Axios for API calls
- React Toastify for notifications
- Google OAuth integration

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT Authentication
- Nodemailer for email services
- Image processing capabilities
- [Backend Repository](https://github.com/rKrishan99/imagica-mern-stack-ai-saas-app-backend.git)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance
- Environment variables setup

### Installation

1. Clone the frontend repository:
```bash
git clone <frontend-repo-url>
```

2. Clone the backend repository:
```bash
git clone https://github.com/rKrishan99/imagica-mern-stack-ai-saas-app-backend.git
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Install backend dependencies:
```bash
cd ../backend
npm install
```

5. Set up environment variables:
   - Frontend (.env):
```
VITE_BACKEND_URL=http://localhost:3000
```
   - Backend (.env) - check backend repository for required variables

6. Start the development servers:
   - Frontend:
```bash
npm run dev
```
   - Backend:
```bash
npm start
```

## Usage
1. Create an account or login with Google
2. Purchase credits or select a subscription plan
3. Navigate to the image generation page
4. Enter your text description
5. Click generate and watch AI create your image
6. Download or share your generated images

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Rajitha Wijesinghe - [@your_twitter](https://twitter.com/your_twitter)
Project Link: [https://github.com/rkrishan99/imagica](https://github.com/rkrishan99/imagica)

## Acknowledgments
- [React Documentation](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [MongoDB](https://www.mongodb.com)
- All other open-source libraries used in this project
