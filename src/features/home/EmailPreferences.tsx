
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown } from 'lucide-react';

const EmailPreferences = () => {
  const preferences = [
    { id: 'new-announcement', label: 'New Announcement', checked: true },
    { id: 'updated-announcement', label: 'Updated Announcement', checked: true },
    { id: 'grade-released', label: 'Grade released', checked: true },
    { id: 'grade-updated', label: 'Grade updated', checked: true },
    { id: 'new-content', label: 'New content item', checked: true },
    { id: 'updated-content', label: 'Updated content item', checked: true },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          Email Notifications
          <ChevronDown className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 mb-4">
          Are you receiving Email notifications from Brightspace?
        </p>
        <div className="space-y-3">
          {preferences.map((pref) => (
            <div key={pref.id} className="flex items-center space-x-3">
              <Checkbox id={pref.id} checked={pref.checked} />
              <label htmlFor={pref.id} className="text-sm text-gray-700">
                {pref.label}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t text-sm text-gray-600">
          <p>
            Update your{' '}
            <a href="#" className="text-blue-600 hover:underline">
              primary contact Email
            </a>{' '}
            or your{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Email notification settings
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailPreferences;
