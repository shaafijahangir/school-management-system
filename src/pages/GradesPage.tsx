
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface GradeItem {
  item: string;
  category: string;
  weight: string;
  score: string;
}

const mockGrades: GradeItem[] = [
  { item: 'Assignment 1', category: 'Assignments', weight: '20%', score: '85%' },
  { item: 'Assignment 2', category: 'Assignments', weight: '20%', score: '92%' },
  { item: 'Midterm Exam', category: 'Exams', weight: '30%', score: '78%' },
  { item: 'Lab 1', category: 'Labs', weight: '10%', score: '95%' },
  { item: 'Lab 2', category: 'Labs', weight: '10%', score: '88%' },
  { item: 'Participation', category: 'Participation', weight: '10%', score: '90%' }
];

const chartData = [
  { category: 'Assignments', percentage: 88 },
  { category: 'Exams', percentage: 78 },
  { category: 'Labs', percentage: 92 },
  { category: 'Participation', percentage: 90 }
];

const GradesPage = () => {
  const [selectedTerm, setSelectedTerm] = useState('winter-2025');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Grades</h1>
          
          {/* Term Selector */}
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="winter-2025">Winter 2025</SelectItem>
              <SelectItem value="fall-2024">Fall 2024</SelectItem>
              <SelectItem value="summer-2024">Summer 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grades Table */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>CSC 412 - Advanced Computer Graphics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Weight</TableHead>
                      <TableHead>Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockGrades.map((grade, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{grade.item}</TableCell>
                        <TableCell>{grade.category}</TableCell>
                        <TableCell>{grade.weight}</TableCell>
                        <TableCell>{grade.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Summary and Chart */}
          <div className="lg:col-span-1 space-y-6">
            {/* GPA Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Grade Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">B+</div>
                  <div className="text-lg text-gray-600">3.5 GPA</div>
                  <div className="text-sm text-gray-500">Current Standing</div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="percentage" fill="#0066cc" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesPage;
