import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Shield } from 'lucide-react';
import { UserRole } from '@/lib/types';
import { DEFAULT_ROUTES } from '@/lib/constants';

const RoleSelect = () => {
  const navigate = useNavigate();
  const { loginDemo } = useAuth();

  const handleRoleSelect = (role: UserRole) => {
    loginDemo(role);
    navigate(DEFAULT_ROUTES[role]);
  };

  const roles = [
    {
      role: 'student' as UserRole,
      title: 'Student',
      description: 'Access your courses, grades, assignments, and schedule',
      icon: GraduationCap,
      color: 'bg-blue-accent',
    },
    {
      role: 'teacher' as UserRole,
      title: 'Teacher',
      description: 'Manage courses, grade assignments, and communicate with students',
      icon: BookOpen,
      color: 'bg-navy',
    },
    {
      role: 'admin' as UserRole,
      title: 'Administrator',
      description: 'Manage users, courses, enrollments, and system settings',
      icon: Shield,
      color: 'bg-gray-dark',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-navy text-white px-6 py-3 rounded text-2xl font-bold">
              UViC
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Demo Mode</h1>
          <p className="text-gray-600">Select a role to explore the system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map(({ role, title, description, icon: Icon, color }) => (
            <Card
              key={role}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-2 hover:border-blue-accent"
              onClick={() => handleRoleSelect(role)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`${color} text-white p-4 rounded-full`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-gray-600 hover:text-blue-accent"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;

