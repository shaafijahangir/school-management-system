
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CourseTileProps {
  code: string;
  title: string;
  term: string;
  image: string;
  color: string;
}

const CourseTile: React.FC<CourseTileProps> = ({ code, title, term, image, color }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden">
      <div className="relative">
        <div 
          className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
        >
          <div className="text-white text-center">
            <div className="text-lg font-bold">{code}</div>
            <div className="text-sm opacity-90">{term}</div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </CardContent>
      </div>
    </Card>
  );
};

export default CourseTile;
