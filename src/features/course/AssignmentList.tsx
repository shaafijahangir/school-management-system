import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  points: number;
  status: 'not-started' | 'in-progress' | 'submitted' | 'graded';
  description: string;
  type: 'assignment' | 'quiz' | 'project' | 'exam';
}

const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Ray Tracing Implementation',
    dueDate: '2025-03-15',
    points: 100,
    status: 'in-progress',
    description: 'Implement a basic ray tracer with sphere and plane intersections.',
    type: 'assignment'
  },
  {
    id: '2',
    title: 'Midterm Exam',
    dueDate: '2025-03-20',
    points: 150,
    status: 'not-started',
    description: 'Comprehensive exam covering chapters 1-6.',
    type: 'exam'
  },
  {
    id: '3',
    title: 'Shader Programming Quiz',
    dueDate: '2025-03-10',
    points: 25,
    status: 'graded',
    description: 'Quick quiz on GLSL shader basics.',
    type: 'quiz'
  },
  {
    id: '4',
    title: 'Final Project Proposal',
    dueDate: '2025-04-01',
    points: 50,
    status: 'not-started',
    description: 'Submit your final project proposal with timeline and objectives.',
    type: 'project'
  }
];

const getStatusColor = (status: Assignment['status']) => {
  switch (status) {
    case 'not-started': return 'bg-gray-100 text-gray-600';
    case 'in-progress': return 'bg-blue-100 text-blue-600';
    case 'submitted': return 'bg-yellow-100 text-yellow-600';
    case 'graded': return 'bg-green-100 text-green-600';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const getTypeIcon = (type: Assignment['type']) => {
  switch (type) {
    case 'assignment': return FileText;
    case 'quiz': return Clock;
    case 'project': return FileText;
    case 'exam': return CheckCircle;
    default: return FileText;
  }
};

const AssignmentList = () => {
  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Assignments
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockAssignments.map((assignment) => {
          const Icon = getTypeIcon(assignment.type);
          const daysUntilDue = getDaysUntilDue(assignment.dueDate);
          
          return (
            <Card key={assignment.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{assignment.description}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(assignment.status)}>
                  {assignment.status.replace('-', ' ')}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Due {new Date(assignment.dueDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{assignment.points} pts</span>
                  </div>
                  {daysUntilDue >= 0 && (
                    <div className={`flex items-center gap-1 ${daysUntilDue <= 3 ? 'text-red-600' : 'text-blue-600'}`}>
                      <Clock className="h-4 w-4" />
                      {daysUntilDue === 0 ? 'Due today' : `${daysUntilDue} days left`}
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {assignment.status === 'not-started' && (
                    <Button size="sm" variant="outline">Start</Button>
                  )}
                  {assignment.status === 'in-progress' && (
                    <Button size="sm">Continue</Button>
                  )}
                  {assignment.status === 'submitted' && (
                    <Button size="sm" variant="outline">View Submission</Button>
                  )}
                  {assignment.status === 'graded' && (
                    <Button size="sm" variant="outline">View Grade</Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AssignmentList;