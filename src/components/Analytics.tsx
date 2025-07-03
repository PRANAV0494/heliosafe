import React, { useState } from 'react';
import { BarChart, TrendingUp, MapPin, Clock, AlertTriangle, Calendar } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');

  const accidentData = [
    { location: 'Highway 101 - Mile 42', incidents: 8, severity: 'High', trend: 'up' },
    { location: 'Main Street Intersection', incidents: 5, severity: 'Medium', trend: 'down' },
    { location: 'Interstate 80 - Exit 12', incidents: 3, severity: 'Low', trend: 'up' },
    { location: 'Bay Bridge Approach', incidents: 2, severity: 'Medium', trend: 'stable' },
    { location: 'Highway 101 - Mile 38', incidents: 1, severity: 'Low', trend: 'down' }
  ];

  const timeData = [
    { hour: '6-8 AM', incidents: 12, responseTime: '2.5 min' },
    { hour: '8-10 AM', incidents: 18, responseTime: '3.1 min' },
    { hour: '10-12 PM', incidents: 8, responseTime: '2.8 min' },
    { hour: '12-2 PM', incidents: 15, responseTime: '3.2 min' },
    { hour: '2-4 PM', incidents: 22, responseTime: '3.8 min' },
    { hour: '4-6 PM', incidents: 25, responseTime: '4.1 min' },
    { hour: '6-8 PM', incidents: 20, responseTime: '3.5 min' },
    { hour: '8-10 PM', incidents: 10, responseTime: '2.9 min' }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />;
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics & Insights</h1>
            <p className="text-gray-600">Comprehensive accident data analysis and patterns</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 3 Months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-red-600">127</div>
          <div className="text-sm text-gray-600">Total Incidents</div>
          <div className="text-xs text-green-600 mt-1">↓ 15% from last week</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-blue-600">2.8 min</div>
          <div className="text-sm text-gray-600">Avg Response Time</div>
          <div className="text-xs text-green-600 mt-1">↓ 0.3 min improvement</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-green-600">98.5%</div>
          <div className="text-sm text-gray-600">Detection Accuracy</div>
          <div className="text-xs text-green-600 mt-1">↑ 2% from last week</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-purple-600">23</div>
          <div className="text-sm text-gray-600">Lives Saved</div>
          <div className="text-xs text-green-600 mt-1">Based on response time</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Incident by Location */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Incidents by Location</h2>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {accidentData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center flex-1">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.location}</div>
                    <div className="text-sm text-gray-500">{item.incidents} incidents</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(item.severity)}`}>
                    {item.severity}
                  </span>
                  {getTrendIcon(item.trend)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time-based Analysis */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Peak Hours Analysis</h2>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {timeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center flex-1">
                  <div className="font-medium text-gray-900">{item.hour}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{item.incidents} incidents</div>
                    <div className="text-xs text-gray-500">Avg: {item.responseTime}</div>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(item.incidents / 25) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Reports */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Report Summary</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">High-Risk Zones</h3>
            <p className="text-sm text-red-800 mb-2">3 locations identified with elevated incident rates</p>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Highway 101 - Mile 42 (Peak: 4-6 PM)</li>
              <li>• Main Street Intersection (Peak: 8-10 AM)</li>
              <li>• Interstate 80 - Exit 12 (Peak: 2-4 PM)</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Performance Improvements</h3>
            <p className="text-sm text-green-800 mb-2">Response time reduced by 18% this month</p>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• AI accuracy improved to 98.5%</li>
              <li>• Average response time: 2.8 minutes</li>
              <li>• 99.2% system uptime maintained</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">System Recommendations</h3>
            <p className="text-sm text-blue-800 mb-2">Optimization suggestions based on data</p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Add 2 cameras on Highway 101</li>
              <li>• Increase patrol frequency 4-6 PM</li>
              <li>• Upgrade solar panels at 3 locations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Reports</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Export PDF Report
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Export CSV Data
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Schedule Monthly Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;