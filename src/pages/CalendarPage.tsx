
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Plus, X } from 'lucide-react';
import CalendarScheduler from '@/features/home/CalendarScheduler';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const CalendarPage = () => {
  const [activeTab, setActiveTab] = useState('Day');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Complete Assignment 3', completed: false },
    { id: '2', title: 'Study for Midterm', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const tabs = ['Agenda', 'Day', 'Week', 'Month', 'List'];

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        title: newTask,
        completed: false
      }]);
      setNewTask('');
    }
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Calendar</h1>
          
          {/* Tab Switcher */}
          <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "bg-white shadow-sm" : ""}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Calendar Area */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Today - {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarScheduler />
              </CardContent>
            </Card>
          </div>

          {/* Right Rail */}
          <div className="lg:col-span-1 space-y-6">
            {/* Mini Calendar */}
            <Card>
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  />
                  <Button size="sm" onClick={addTask}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{task.title}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeTask(task.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
