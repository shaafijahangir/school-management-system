
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mockSearchResults = [
  'Spring 2025 CSC 412 512 A01 A02 X - 202501 CSC 412 512 A01 A02 X CO',
  'Spring 2025 CSC 503 A01 - A03 & SENG 474 A01 A02 X - 202501 CSC 503 A01 - A03 x SENG 474 A01 A02 X CO',
  'Spring 2025 EDCI 136 A01 (21054) - 202501 EDCI 136 A01 (21054) CO',
  'Spring 2025 EDCI 136 B02 (24206) - 202501 EDCI 136 B02 (24206) CO',
  'Fall 2024 CSC + ENGR Co-op Work Term 2 Module X - 202409 CSC + ENGR Co-op Work Term 2 Module X CO',
  'Summer 2024 CSC + ENGR Co-op Work Term 1 Module X - 202405 CSC + ENGR Co-op Work Term 1 Module X CO',
];

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <div className="flex space-x-2">
        <Input
          placeholder="Search for a course"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="flex-1"
        />
        <Button variant="outline">Advanced Search</Button>
      </div>
      
      {isOpen && (
        <Card className="absolute top-12 left-0 right-0 z-50 max-h-80 overflow-y-auto">
          <CardContent className="p-0">
            {mockSearchResults
              .filter(result => 
                searchTerm === '' || 
                result.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((result, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 text-sm"
                  onClick={() => {
                    setSearchTerm(result);
                    setIsOpen(false);
                  }}
                >
                  {result}
                </div>
              ))}
          </CardContent>
        </Card>
      )}
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CourseSearch;
