# College Placement Tracker

A comprehensive web application designed to streamline college placement activities for both students and Training & Placement Officers (TPOs). This modern, responsive platform provides centralized tools for tracking job applications, managing interviews, and monitoring placement progress.

## 🌟 Features

### For Students
- **Application Management**: Log and track job applications with detailed status updates
- **Interview Scheduling**: Manage upcoming interviews with reminders and instructions
- **Company Discovery**: Browse available companies and job opportunities
- **Progress Tracking**: Monitor application status from applied to selected
- **Dashboard Analytics**: View personal placement statistics and progress

### For TPOs
- **Student Oversight**: Monitor all student placement activities and progress
- **Company Management**: Manage company relationships and job postings
- **Placement Analytics**: Comprehensive reports and statistics by department
- **Application Tracking**: Track all student applications across companies
- **Export Capabilities**: Generate reports for administrative purposes

## 🚀 Live Demo

Visit the live application: [https://sensational-flan-5c3b09.netlify.app](https://sensational-flan-5c3b09.netlify.app)

### Demo Credentials
- **Student Login**: `student@demo.com` / `password`
- **TPO Login**: `tpo@demo.com` / `password`

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MoreMohit/College-Placement-Tracker.git
   cd College-Placement-Tracke
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Homepage with features overview
│   ├── LoginPage.tsx        # Authentication interface
│   ├── StudentDashboard.tsx # Student portal
│   └── TPODashboard.tsx     # TPO management interface
├── types.ts                 # TypeScript type definitions
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional interface with intuitive navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Color System**: Comprehensive color palette with primary, secondary, and accent colors
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## 📊 Key Components

### Student Dashboard
- Application tracking with status indicators
- Interview management with scheduling
- Company browsing and application submission
- Personal analytics and progress monitoring

### TPO Dashboard
- Student management and oversight
- Company relationship management
- Placement statistics and reporting
- Application status monitoring across all students

### Landing Page
- Feature showcase with benefits
- Professional design with call-to-action
- Responsive hero section and testimonials

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The application is configured for easy deployment on various platforms:

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔮 Future Enhancements

- **Database Integration**: Connect to backend API for persistent data
- **Email Notifications**: Automated reminders for interviews and deadlines
- **Resume Management**: File upload and management system
- **Advanced Analytics**: Detailed placement trends and insights
- **Mobile App**: React Native version for mobile platforms
- **Real-time Updates**: WebSocket integration for live notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- React team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- Netlify for seamless deployment

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact: your.email@example.com

---

⭐ **Star this repository if you found it helpful!**