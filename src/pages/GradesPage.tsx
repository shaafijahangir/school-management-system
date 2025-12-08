import React, { useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getStudentCourses, getStudentGrades, mockEnrollments } from '@/lib/mock-data';
import { Student } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import DataTable, { Column } from '@/components/shared/DataTable';

interface CourseGrade {
  courseCode: string;
  courseTitle: string;
  credits: number;
  grade: number | undefined;
  letterGrade: string | undefined;
  term: string;
}

const GradesPage = () => {
  const { user } = useAuth();
  const student = user as Student;
  const [selectedTerm, setSelectedTerm] = useState('Spring 2025');

  // Get student's courses and grades
  const studentCourses = getStudentCourses(student.id);
  const enrollments = mockEnrollments.filter(e => e.studentId === student.id);

  // Build course grades data
  const courseGrades: CourseGrade[] = studentCourses.map(course => {
    const enrollment = enrollments.find(e => e.courseId === course.id);
    return {
      courseCode: course.code,
      courseTitle: course.title,
      credits: course.credits,
      grade: enrollment?.grade,
      letterGrade: enrollment?.letterGrade,
      term: `${course.term} ${course.year}`,
    };
  });

  // Filter by term
  const filteredGrades = courseGrades.filter(g => g.term === selectedTerm);

  // Calculate term GPA
  const completedCourses = filteredGrades.filter(g => g.grade !== undefined);
  const termGPA = completedCourses.length > 0
    ? completedCourses.reduce((sum, g) => sum + (g.grade || 0), 0) / completedCourses.length
    : 0;

  const columns: Column<CourseGrade>[] = [
    {
      key: 'courseCode',
      header: 'Course Code',
      sortable: true,
    },
    {
      key: 'courseTitle',
      header: 'Course Title',
      sortable: true,
    },
    {
      key: 'credits',
      header: 'Credits',
      sortable: true,
    },
    {
      key: 'grade',
      header: 'Grade',
      sortable: true,
      render: (item) => (
        item.grade !== undefined ? (
          <span className="font-semibold">{item.grade.toFixed(1)}%</span>
        ) : (
          <Badge variant="outline">In Progress</Badge>
        )
      ),
    },
    {
      key: 'letterGrade',
      header: 'Letter Grade',
      render: (item) => (
        item.letterGrade ? (
          <Badge className="bg-blue-accent text-white">{item.letterGrade}</Badge>
        ) : (
          <span className="text-gray-400">-</span>
        )
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Grades</h1>
          <p className="text-gray-600">View your academic performance</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Transcript
        </Button>
      </div>

      {/* GPA Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Cumulative GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-navy">{student.gpa.toFixed(2)}</div>
            <p className="text-sm text-gray-600 mt-2">Overall Performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Term GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-accent">{termGPA.toFixed(2)}</div>
            <p className="text-sm text-gray-600 mt-2">{selectedTerm}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Credits Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-success">{student.creditsEarned}</div>
            <p className="text-sm text-gray-600 mt-2">
              {student.creditsInProgress} in progress
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Course Grades</CardTitle>
            <Select value={selectedTerm} onValueChange={setSelectedTerm}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Spring 2025">Spring 2025</SelectItem>
                <SelectItem value="Fall 2024">Fall 2024</SelectItem>
                <SelectItem value="Summer 2024">Summer 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            data={filteredGrades}
            columns={columns}
            searchable
            searchPlaceholder="Search courses..."
            pageSize={10}
            emptyMessage="No grades available for this term"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default GradesPage;
