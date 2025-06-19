
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressDonut from './ProgressDonut';

interface Module {
  id: string;
  title: string;
  progress: number;
}

const mockModules: Module[] = [
  { id: '1', title: 'Course Introduction', progress: 100 },
  { id: '2', title: 'Fundamentals', progress: 85 },
  { id: '3', title: 'Advanced Topics', progress: 60 },
  { id: '4', title: 'Project Work', progress: 30 },
  { id: '5', title: 'Final Review', progress: 0 },
];

const ContentNavigator = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Course Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockModules.map((module) => (
          <div key={module.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <span className="text-sm font-medium text-gray-700">{module.title}</span>
            <ProgressDonut progress={module.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContentNavigator;
