import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Book, 
  Calendar, 
  User, 
  Mail, 
  Clock, 
  MapPin,
  GraduationCap,
  Target,
  CheckCircle
} from 'lucide-react';

const CourseSyllabus = () => {
  const courseInfo = {
    code: 'CSC 412/512',
    title: 'Advanced Computer Graphics',
    term: 'Spring 2025',
    credits: 3,
    instructor: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@uvic.ca',
    officeHours: 'Tuesday & Thursday 2:00-4:00 PM',
    location: 'ECS 108',
    classTime: 'MWF 10:30-11:20 AM'
  };

  const learningOutcomes = [
    'Understand fundamental concepts of 3D computer graphics',
    'Implement ray tracing algorithms and rendering techniques',
    'Design and develop interactive graphics applications',
    'Apply linear algebra and geometry to graphics problems',
    'Evaluate and compare different rendering methods'
  ];

  const gradingBreakdown = [
    { component: 'Assignments', percentage: 40, description: '4 programming assignments' },
    { component: 'Midterm Exam', percentage: 20, description: 'In-class examination' },
    { component: 'Final Project', percentage: 25, description: 'Individual graphics project' },
    { component: 'Participation', percentage: 10, description: 'Class and online discussions' },
    { component: 'Quizzes', percentage: 5, description: 'Weekly online quizzes' }
  ];

  const schedule = [
    { week: 1, topic: 'Introduction to Computer Graphics', readings: 'Chapter 1-2' },
    { week: 2, topic: 'Linear Algebra Review & Transformations', readings: 'Chapter 3-4' },
    { week: 3, topic: 'Viewing & Projection', readings: 'Chapter 5' },
    { week: 4, topic: 'Rasterization & Hidden Surface Removal', readings: 'Chapter 6-7' },
    { week: 5, topic: 'Lighting Models & Shading', readings: 'Chapter 8-9' },
    { week: 6, topic: 'Texture Mapping', readings: 'Chapter 10' },
    { week: 7, topic: 'Ray Tracing Fundamentals', readings: 'Chapter 11-12' },
    { week: 8, topic: 'Midterm Exam', readings: 'Review Chapters 1-10' },
    { week: 9, topic: 'Advanced Ray Tracing', readings: 'Chapter 13' },
    { week: 10, topic: 'Global Illumination', readings: 'Chapter 14-15' },
    { week: 11, topic: 'Animation & Curves', readings: 'Chapter 16' },
    { week: 12, topic: 'Real-Time Rendering', readings: 'Chapter 17-18' },
    { week: 13, topic: 'Project Presentations', readings: 'N/A' }
  ];

  return (
    <div className="space-y-6">
      {/* Course Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Book className="h-5 w-5" />
            Course Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-600" />
                <span className="font-medium">{courseInfo.code} - {courseInfo.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>{courseInfo.term} • {courseInfo.credits} Credits</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>{courseInfo.classTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>{courseInfo.location}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                <span>{courseInfo.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>{courseInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Office Hours: {courseInfo.officeHours}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5" />
            Learning Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grading Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Grading Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {gradingBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{item.component}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {item.percentage}%
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Grading Scale</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div>A+: 90-100%</div>
              <div>A: 85-89%</div>
              <div>A-: 80-84%</div>
              <div>B+: 77-79%</div>
              <div>B: 73-76%</div>
              <div>B-: 70-72%</div>
              <div>C+: 65-69%</div>
              <div>C: 60-64%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Course Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {schedule.map((week) => (
              <div key={week.week} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="min-w-[60px] justify-center">
                    Week {week.week}
                  </Badge>
                  <span className="font-medium">{week.topic}</span>
                </div>
                <span className="text-sm text-gray-600">{week.readings}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseSyllabus;