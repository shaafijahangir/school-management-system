import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Video, 
  Link, 
  Download, 
  ExternalLink,
  Book,
  File,
  Image
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'image' | 'document';
  size?: string;
  uploadDate: string;
  description: string;
  category: string;
  downloadCount: number;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Introduction to Ray Tracing - Lecture Slides',
    type: 'pdf',
    size: '2.4 MB',
    uploadDate: '2025-03-01',
    description: 'Complete slide deck for the ray tracing introduction lecture.',
    category: 'Lectures',
    downloadCount: 45
  },
  {
    id: '2',
    title: 'OpenGL Tutorial Series',
    type: 'video',
    uploadDate: '2025-02-28',
    description: 'Comprehensive video series covering OpenGL fundamentals.',
    category: 'Tutorials',
    downloadCount: 32
  },
  {
    id: '3',
    title: 'Real-Time Rendering 4th Edition',
    type: 'link',
    uploadDate: '2025-02-25',
    description: 'Link to the official textbook website with additional resources.',
    category: 'Textbooks',
    downloadCount: 78
  },
  {
    id: '4',
    title: 'Assignment 2 - Starter Code',
    type: 'document',
    size: '156 KB',
    uploadDate: '2025-03-05',
    description: 'C++ starter code and project structure for Assignment 2.',
    category: 'Assignments',
    downloadCount: 67
  },
  {
    id: '5',
    title: 'Shader Examples Collection',
    type: 'document',
    size: '892 KB',
    uploadDate: '2025-03-08',
    description: 'Collection of vertex and fragment shader examples.',
    category: 'Code Examples',
    downloadCount: 23
  },
  {
    id: '6',
    title: 'Course Syllabus Spring 2025',
    type: 'pdf',
    size: '245 KB',
    uploadDate: '2025-01-15',
    description: 'Complete course syllabus with schedule and grading policy.',
    category: 'Course Info',
    downloadCount: 89
  }
];

const getTypeIcon = (type: Resource['type']) => {
  switch (type) {
    case 'pdf': return FileText;
    case 'video': return Video;
    case 'link': return Link;
    case 'image': return Image;
    case 'document': return File;
    default: return FileText;
  }
};

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'pdf': return 'bg-red-100 text-red-600';
    case 'video': return 'bg-purple-100 text-purple-600';
    case 'link': return 'bg-blue-100 text-blue-600';
    case 'image': return 'bg-green-100 text-green-600';
    case 'document': return 'bg-orange-100 text-orange-600';
    default: return 'bg-gray-100 text-gray-600';
  }
};

const CourseResources = () => {
  const categories = Array.from(new Set(mockResources.map(r => r.category)));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Book className="h-5 w-5" />
          Course Resources
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {categories.map((category) => {
          const categoryResources = mockResources.filter(r => r.category === category);
          
          return (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold text-gray-900 border-b pb-2">{category}</h3>
              
              <div className="space-y-3">
                {categoryResources.map((resource) => {
                  const Icon = getTypeIcon(resource.type);
                  
                  return (
                    <Card key={resource.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{resource.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                            
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>Uploaded {new Date(resource.uploadDate).toLocaleDateString()}</span>
                              {resource.size && <span>{resource.size}</span>}
                              <span>{resource.downloadCount} downloads</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {resource.type.toUpperCase()}
                          </Badge>
                          
                          {resource.type === 'link' ? (
                            <Button size="sm" variant="outline">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Open
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CourseResources;