import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend, className }) => {
  return (
    <Card className={cn('hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <div className="flex items-center mt-2">
                {trend.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                )}
                <span
                  className={cn(
                    'text-sm font-medium',
                    trend.isPositive ? 'text-success' : 'text-destructive'
                  )}
                >
                  {Math.abs(trend.value)}%
                </span>
              </div>
            )}
          </div>
          <div className="bg-blue-light p-3 rounded-lg">
            <Icon className="h-8 w-8 text-blue-accent" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

