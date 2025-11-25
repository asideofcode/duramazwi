'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ChartDataPoint {
  date: string;
  completions: number;
  uniqueUsers: number;
}

interface ChartData {
  timeSeriesData: ChartDataPoint[];
  summary: {
    totalCompletions: number;
    avgCompletionsPerDay: number;
    peakDay: {
      date: string;
      completions: number;
    };
    totalDays: number;
  };
}

type DateRange = '7d' | '14d' | '30d' | '90d' | 'all';

export default function ChallengeCompletionChart() {
  const router = useRouter();
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>('30d');
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  // Handle bar click to navigate to challenge detail
  const handleBarClick = (data: any) => {
    if (data && data.date) {
      router.push(`/admin/challenges/daily/edit?date=${data.date}`);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/challenge-stats');
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  // Format date for display (e.g., "Nov 20" or "11/20")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Filter data based on selected date range and fill in missing days
  const getFilteredData = () => {
    if (!data) return [];

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    
    let start = new Date(end);
    
    switch (dateRange) {
      case '7d':
        start.setDate(end.getDate() - 6);
        break;
      case '14d':
        start.setDate(end.getDate() - 13);
        break;
      case '30d':
        start.setDate(end.getDate() - 29);
        break;
      case '90d':
        start.setDate(end.getDate() - 89);
        break;
      case 'all':
        // For "all time", just return the data as-is (don't fill gaps)
        return data.timeSeriesData;
    }
    
    start.setHours(0, 0, 0, 0);
    
    // Create a map of existing data
    const dataMap = new Map<string, number>();
    data.timeSeriesData.forEach(point => {
      dataMap.set(point.date, point.completions);
    });
    
    // Generate all dates in range and fill with data or zeros
    const result: ChartDataPoint[] = [];
    const currentDate = new Date(start);
    
    while (currentDate <= end) {
      const dateString = currentDate.toISOString().split('T')[0];
      result.push({
        date: dateString,
        completions: dataMap.get(dateString) || 0,
        uniqueUsers: 0 // Not used anymore but kept for type compatibility
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return result;
  };

  // Navigate through time
  const shiftDateRange = (direction: 'back' | 'forward') => {
    if (dateRange === 'all') return;
    
    const days = dateRange === '7d' ? 7 : dateRange === '14d' ? 14 : dateRange === '30d' ? 30 : 90;
    const newDate = new Date(endDate);
    
    if (direction === 'back') {
      newDate.setDate(newDate.getDate() - days);
    } else {
      newDate.setDate(newDate.getDate() + days);
      // Don't go beyond today
      if (newDate > new Date()) {
        newDate.setTime(new Date().getTime());
      }
    }
    
    setEndDate(newDate);
  };

  const resetToToday = () => {
    setEndDate(new Date());
  };

  const isAtPresent = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const current = new Date(endDate);
    current.setHours(0, 0, 0, 0);
    return current.getTime() === today.getTime();
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">
            {new Date(data.date).toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
            <span className="font-medium">Completions:</span> {data.completions}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            Click to view details →
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Daily Challenge Completions
        </h2>
        <div className="h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Daily Challenge Completions
        </h2>
        <div className="h-80 flex items-center justify-center">
          <p className="text-red-600 dark:text-red-400">
            {error || 'Failed to load chart data'}
          </p>
        </div>
      </div>
    );
  }

  const filteredData = getFilteredData();
  const chartData = filteredData.map(point => ({
    ...point,
    dateFormatted: formatDate(point.date)
  }));

  // Calculate stats for filtered data
  const filteredTotalCompletions = filteredData.reduce((sum, day) => sum + day.completions, 0);
  const filteredAvgCompletions = filteredData.length > 0 
    ? Math.round(filteredTotalCompletions / filteredData.length) 
    : 0;
  const filteredPeakDay = filteredData.reduce((max, day) => 
    day.completions > max.completions ? day : max, 
    { date: '', completions: 0 }
  );

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Daily Challenge Completions
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track challenge completion trends over time
            </p>
          </div>
          
          {/* Date Range Selector */}
          <div className="flex items-center gap-2">
            <select
              value={dateRange}
              onChange={(e) => {
                setDateRange(e.target.value as DateRange);
                if (e.target.value === 'all') {
                  setEndDate(new Date());
                }
              }}
              className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="14d">Last 14 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="all">All time</option>
            </select>
          </div>
        </div>

        {/* Navigation Controls */}
        {dateRange !== 'all' && (
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <button
              onClick={() => shiftDateRange('back')}
              className="px-2 py-1 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Go back one period"
            >
              ← Prev
            </button>
            
            <span className="font-medium">
              {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            
            <button
              onClick={() => shiftDateRange('forward')}
              disabled={isAtPresent()}
              className="px-2 py-1 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              title="Go forward one period"
            >
              Next →
            </button>
            
            {!isAtPresent() && (
              <button
                onClick={resetToToday}
                className="px-2 py-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Today
              </button>
            )}
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            {dateRange === 'all' ? 'Total Completions' : 'Completions in Range'}
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {filteredTotalCompletions}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg per Day</p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {filteredAvgCompletions}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Peak Day</p>
          <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {filteredPeakDay.completions}
          </p>
          {filteredPeakDay.date && (
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {formatDate(filteredPeakDay.date)}
            </p>
          )}
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Days in Range</p>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {filteredData.length}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-96 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#374151"
              opacity={0.3}
            />
            <XAxis
              dataKey="dateFormatted"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#4B5563"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              stroke="#4B5563"
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="completions"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              name="Completions"
              onClick={handleBarClick}
              cursor="pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
