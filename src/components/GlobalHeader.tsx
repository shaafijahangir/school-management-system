import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, ChevronDown, LogOut, Settings as SettingsIcon, UserCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/lib/contexts/AuthContext';
import { mockAnnouncements } from '@/lib/mock-data';

const GlobalHeader = () => {
  const { user, tenant, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Get recent announcements
  const recentAnnouncements = mockAnnouncements.slice(0, 3);

  // Role badge color
  const getRoleBadgeColor = (role?: string) => {
    switch (role) {
      case 'student':
        return 'bg-blue-accent';
      case 'teacher':
        return 'bg-navy';
      case 'admin':
        return 'bg-gray-dark';
      default:
        return 'bg-gray-500';
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <header className="bg-navy text-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and School Name */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-blue-800 p-2">
              <Menu className="h-5 w-5" />
            </Button>

            <Link to={`/${user.role}/dashboard`} className="flex items-center space-x-3">
              <div className="bg-white text-navy px-3 py-1 rounded font-bold text-lg">
                {tenant.name.split(' ').map(word => word[0]).join('').slice(0, 4)}
              </div>
              <span className="hidden md:block font-semibold text-sm">
                {tenant.name}
              </span>
            </Link>
          </div>

          {/* Right: User info and actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-2 relative">
                  <Bell className="h-5 w-5" />
                  {recentAnnouncements.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {recentAnnouncements.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
                <div className="px-4 py-2 border-b">
                  <p className="font-semibold text-sm">Notifications</p>
                </div>
                {recentAnnouncements.map((announcement) => (
                  <DropdownMenuItem key={announcement.id} className="flex flex-col items-start p-4 border-b cursor-pointer">
                    <div className="font-medium text-sm">{announcement.title}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {announcement.authorName} • {announcement.createdDate.toLocaleDateString()}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="text-center text-sm text-blue-accent cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 px-3 py-2 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-navy" />
                  </div>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">{user.name}</span>
                    <Badge className={`${getRoleBadgeColor(user.role)} text-white text-xs px-2 py-0`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-2">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
