import React, { useState } from 'react';
import { User, LogOut, Users, Building, Calendar, TrendingUp, Search, Filter, Eye, Plus, Download } from 'lucide-react';
import { User as UserType, Student, Application, Company } from '../types';

interface TPODashboardProps {
  user: UserType;
  onLogout: () => void;
}

const TPODashboard: React.FC<TPODashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in production, this would come from an API
  const students: Student[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      rollNumber: 'CS2021001',
      department: 'Computer Science',
      cgpa: 8.5,
      skills: ['JavaScript', 'React', 'Node.js'],
      resume: 'john_doe_resume.pdf',
      applications: [
        {
          id: '1',
          studentId: '1',
          company: 'Google',
          position: 'Software Engineer',
          applicationDate: new Date('2024-01-15'),
          status: 'interview-scheduled'
        },
        {
          id: '2',
          studentId: '1',
          company: 'Microsoft',
          position: 'Product Manager',
          applicationDate: new Date('2024-01-10'),
          status: 'shortlisted'
        }
      ],
      interviews: []
    },
    {
      id: '2',
      name: 'Alice Smith',
      email: 'alice@example.com',
      rollNumber: 'CS2021002',
      department: 'Computer Science',
      cgpa: 9.2,
      skills: ['Python', 'Machine Learning', 'Data Science'],
      resume: 'alice_smith_resume.pdf',
      applications: [
        {
          id: '3',
          studentId: '2',
          company: 'Amazon',
          position: 'Data Scientist',
          applicationDate: new Date('2024-01-12'),
          status: 'selected'
        }
      ],
      interviews: []
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      rollNumber: 'ME2021003',
      department: 'Mechanical Engineering',
      cgpa: 7.8,
      skills: ['CAD', 'SolidWorks', 'Manufacturing'],
      resume: 'bob_johnson_resume.pdf',
      applications: [
        {
          id: '4',
          studentId: '3',
          company: 'Tesla',
          position: 'Mechanical Engineer',
          applicationDate: new Date('2024-01-18'),
          status: 'applied'
        }
      ],
      interviews: []
    }
  ];

  const companies: Company[] = [
    {
      id: '1',
      name: 'Google',
      description: 'Leading technology company',
      positions: ['Software Engineer', 'Product Manager', 'Data Scientist'],
      requirements: ['Strong programming skills', 'Problem-solving', 'Team collaboration'],
      package: '₹25-30 LPA',
      deadline: new Date('2024-02-15')
    },
    {
      id: '2',
      name: 'Microsoft',
      description: 'Global technology leader',
      positions: ['Software Developer', 'Cloud Engineer', 'Program Manager'],
      requirements: ['Programming expertise', 'Cloud technologies', 'Leadership skills'],
      package: '₹22-28 LPA',
      deadline: new Date('2024-02-20')
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'bg-blue-100 text-blue-800';
      case 'shortlisted': return 'bg-yellow-100 text-yellow-800';
      case 'interview-scheduled': return 'bg-purple-100 text-purple-800';
      case 'selected': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'applied': return 'Applied';
      case 'shortlisted': return 'Shortlisted';
      case 'interview-scheduled': return 'Interview Scheduled';
      case 'selected': return 'Selected';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  const allApplications = students.flatMap(student => 
    student.applications.map(app => ({ ...app, studentName: student.name, studentRoll: student.rollNumber }))
  );

  const stats = [
    { 
      label: 'Total Students', 
      value: students.length, 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-100',
      icon: Users
    },
    { 
      label: 'Active Companies', 
      value: companies.length, 
      color: 'text-green-600', 
      bgColor: 'bg-green-100',
      icon: Building
    },
    { 
      label: 'Total Applications', 
      value: allApplications.length, 
      color: 'text-purple-600', 
      bgColor: 'bg-purple-100',
      icon: Calendar
    },
    { 
      label: 'Placements', 
      value: allApplications.filter(app => app.status === 'selected').length, 
      color: 'text-orange-600', 
      bgColor: 'bg-orange-100',
      icon: TrendingUp
    }
  ];

  const placementsByDepartment = students.reduce((acc, student) => {
    const placed = student.applications.some(app => app.status === 'selected');
    if (placed) {
      acc[student.department] = (acc[student.department] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TPO Dashboard</h1>
                <p className="text-gray-600">Welcome, {user.name}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <nav className="flex space-x-8 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'students', label: 'Students', icon: Users },
            { id: 'applications', label: 'Applications', icon: Calendar },
            { id: 'companies', label: 'Companies', icon: Building }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Placement Statistics */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Placement by Department</h3>
                <div className="space-y-4">
                  {Object.entries(placementsByDepartment).map(([dept, count]) => (
                    <div key={dept} className="flex items-center justify-between">
                      <span className="text-gray-700">{dept}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(count / students.length) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status Overview</h3>
                <div className="space-y-4">
                  {['applied', 'shortlisted', 'interview-scheduled', 'selected', 'rejected'].map(status => {
                    const count = allApplications.filter(app => app.status === status).length;
                    return (
                      <div key={status} className="flex items-center justify-between">
                        <span className="text-gray-700 capitalize">{status.replace('-', ' ')}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                            {count}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
              <div className="space-y-4">
                {allApplications.slice(0, 5).map((application, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{application.studentName}</h4>
                        <p className="text-sm text-gray-600">{application.company} • {application.position}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                      {getStatusText(application.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map(student => {
                      const isPlaced = student.applications.some(app => app.status === 'selected');
                      return (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                <div className="text-sm text-gray-500">{student.rollNumber}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{student.department}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{student.cgpa}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{student.applications.length}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              isPlaced ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {isPlaced ? 'Placed' : 'Active'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">All Applications</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {allApplications.map((application, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{application.studentName}</div>
                          <div className="text-sm text-gray-500">{application.studentRoll}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{application.company}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{application.position}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{application.applicationDate.toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {getStatusText(application.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-green-600 hover:text-green-900">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Company Management</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Plus className="w-4 h-4" />
                <span>Add Company</span>
              </button>
            </div>

            <div className="grid gap-6">
              {companies.map(company => (
                <div key={company.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
                      <p className="text-gray-600 mb-4">{company.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Available Positions</h4>
                          <div className="space-y-1">
                            {company.positions.map((position, index) => (
                              <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2 mb-1">
                                {position}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Package</h4>
                          <span className="text-lg font-semibold text-green-600">{company.package}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Deadline</h4>
                          <span className="text-sm text-red-600 font-medium">{company.deadline.toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Applications</h4>
                          <span className="text-2xl font-bold text-blue-600">
                            {allApplications.filter(app => app.company === company.name).length}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TPODashboard;