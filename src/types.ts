export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tpo';
  department?: string;
  rollNumber?: string;
}

export interface Application {
  id: string;
  studentId: string;
  company: string;
  position: string;
  applicationDate: Date;
  status: 'applied' | 'shortlisted' | 'interview-scheduled' | 'rejected' | 'selected';
  nextStep?: string;
  nextStepDate?: Date;
  notes?: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  positions: string[];
  requirements: string[];
  package: string;
  deadline: Date;
}

export interface Interview {
  id: string;
  studentId: string;
  company: string;
  position: string;
  type: 'technical' | 'hr' | 'group-discussion' | 'test';
  scheduledDate: Date;
  location: string;
  instructions?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  department: string;
  cgpa: number;
  skills: string[];
  resume: string;
  applications: Application[];
  interviews: Interview[];
}