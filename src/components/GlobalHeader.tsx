
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid2x2, Mail, Bell, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const GlobalHeader = () => {
  return (
    <header className="bg-[#002855] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white text-[#002855] px-3 py-1 rounded font-bold text-lg">
                UViC
              </div>
            </Link>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/announcements" className="hover:text-blue-200 transition-colors">
                Announcements
              </Link>
              <Link to="/calendar" className="hover:text-blue-200 transition-colors">
                Calendar
              </Link>
              <Link to="/courses" className="hover:text-blue-200 transition-colors">
                Courses
              </Link>
              <Link to="/grades" className="hover:text-blue-200 transition-colors">
                Grades
              </Link>
              <Link to="/fees" className="hover:text-blue-200 transition-colors">
                Fees
              </Link>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-2">
              <Grid2x2 className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-2">
              <Mail className="h-5 w-5" />
            </Button>
            
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-2 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
                <DropdownMenuItem className="flex flex-col items-start p-4 border-b">
                  <div className="font-medium text-sm">PASS drop in Summer hours - connect with a PASS advisor</div>
                  <div className="text-xs text-gray-500 mt-1">Engineering and Computer Science • Yesterday at 9:05 AM</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4 border-b">
                  <div className="font-medium text-sm">Registration planning assistance with PASS</div>
                  <div className="text-xs text-gray-500 mt-1">Engineering and Computer Science • May 28 at 4:19 PM</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-4">
                  <div className="font-medium text-sm">Study Buddy for Summer!</div>
                  <div className="text-xs text-gray-500 mt-1">Engineering and Computer Science • May 14 at 12:38 PM</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-2 flex items-center space-x-1">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="hidden md:block text-sm">M Shaafi Jahangir</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
