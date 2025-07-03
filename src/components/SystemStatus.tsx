import React, { useState, useEffect } from 'react';
import { Zap, Wifi, Server, AlertTriangle, CheckCircle, Battery, Sun, Activity } from 'lucide-react';

const SystemStatus: React.FC = () => {
  const [systemUptime, setSystemUptime] = useState(99.97);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const systemComponents = [
    {
      name: 'AI Detection Engine',
      status: 'Operational',
      uptime: '99.98%',
      lastUpdate: '2 minutes ago',
      performance: 98.5,
      icon: Activity
    },
    {
      name: 'Camera Network',
      status: 'Operational',
      uptime: '99.92%',
      lastUpdate: '1 minute ago',
      performance: 97.8,
      icon: Server
    },
    {
      name: 'Emergency Alert System',
      status: 'Operational',
      uptime: '99.99%',
      lastUpdate: '30 seconds ago',
      performance: 99.2,
      icon: AlertTriangle
    },
    {
      name: 'GPS Tracking',
      status: 'Operational',
      uptime: '99.95%',
      lastUpdate: '1 minute ago',
      performance: 98.9,
      icon: Wifi
    },
    {
      name: 'Database Systems',
      status: 'Warning',
      uptime: '98.76%',
      lastUpdate: '5 minutes ago',
      performance: 95.2,
      icon: Server
    },
    {
      name: 'Solar Power Grid',
      status: 'Operational',
      uptime: '99.89%',
      lastUpdate: '3 minutes ago',
      performance: 96.5,
      icon: Sun
    }
  ];

  const powerStations = [
    {
      id: 1,
      location: 'Highway 101 - Mile 42',
      batteryLevel: 85,
      solarEfficiency: 92,
      powerGeneration: '2.3 kW',
      status: 'Optimal',
      lastMaintenance: '2 days ago'
    },
    {
      id: 2,
      location: 'Main Street Intersection',
      batteryLevel: 23,
      solarEfficiency: 88,
      powerGeneration: '1.8 kW',
      status: 'Low Battery',
      lastMaintenance: '1 week ago'
    },
    {
      id: 3,
      location: 'Interstate 80 - Exit 12',
      batteryLevel: 78,
      solarEfficiency: 94,
      powerGeneration: '2.5 kW',
      status: 'Optimal',
      lastMaintenance: '3 days ago'
    },
    {
      id: 4,
      location: 'Bay Bridge Approach',
      batteryLevel: 88,
      solarEfficiency: 90,
      powerGeneration: '2.1 kW',
      status: 'Optimal',
      lastMaintenance: '1 day ago'
    },
    {
      id: 5,
      location: 'Highway 101 - Mile 38',
      batteryLevel: 5,
      solarEfficiency: 45,
      powerGeneration: '0.8 kW',
      status: 'Critical',
      lastMaintenance: '2 weeks ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational': return 'text-green-600';
      case 'Warning': return 'text-yellow-600';
      case 'Critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Operational': return CheckCircle;
      case 'Warning': return AlertTriangle;
      case 'Critical': return AlertTriangle;
      default: return Activity;
    }
  };

  const getPowerStatusColor = (status: string) => {
    switch (status) {
      case 'Optimal': return 'bg-green-100 text-green-800';
      case 'Low Battery': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return 'bg-green-500';
    if (level > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">System Status</h1>
            <p className="text-gray-600">Real-time monitoring of all system components</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">System Uptime</div>
            <div className="text-2xl font-bold text-green-600">{systemUptime}%</div>
            <div className="text-xs text-gray-500">Last 30 days</div>
          </div>
        </div>
      </div>

      {/* Overall Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">System Health</div>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600">Healthy</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Active Alerts</div>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">2</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Power Generation</div>
            <Sun className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">9.5 kW</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Current Time</div>
            <Activity className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">System Components</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          {systemComponents.map((component, index) => {
            const Icon = component.icon;
            const StatusIcon = getStatusIcon(component.status);
            
            return (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{component.name}</div>
                      <div className="text-sm text-gray-500">Last update: {component.lastUpdate}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <StatusIcon className={`h-4 w-4 mr-1 ${getStatusColor(component.status)}`} />
                    <span className={`text-sm font-medium ${getStatusColor(component.status)}`}>
                      {component.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Uptime</div>
                    <div className="font-semibold text-gray-900">{component.uptime}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Performance</div>
                    <div className="font-semibold text-gray-900">{component.performance}%</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        component.performance > 95 ? 'bg-green-500' :
                        component.performance > 90 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${component.performance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solar Power Stations */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Solar Power Stations</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {powerStations.map((station) => (
            <div key={station.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <Sun className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{station.location}</div>
                    <div className="text-sm text-gray-500">ID: {station.id}</div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getPowerStatusColor(station.status)}`}>
                  {station.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Battery className="h-4 w-4 mr-1" />
                    Battery Level
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {station.batteryLevel}%
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getBatteryColor(station.batteryLevel)}`}
                    style={{ width: `${station.batteryLevel}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Solar Efficiency</div>
                    <div className="font-semibold text-gray-900">{station.solarEfficiency}%</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Power Generation</div>
                    <div className="font-semibold text-gray-900">{station.powerGeneration}</div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Last maintenance: {station.lastMaintenance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active System Alerts</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
            <div className="flex-1">
              <div className="font-medium text-yellow-900">Database Performance Warning</div>
              <div className="text-sm text-yellow-700">Response time increased by 15% over last hour</div>
            </div>
            <div className="text-xs text-yellow-600">5 min ago</div>
          </div>
          
          <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
            <div className="flex-1">
              <div className="font-medium text-red-900">Critical Battery Level</div>
              <div className="text-sm text-red-700">Station at Highway 101 - Mile 38 requires immediate attention</div>
            </div>
            <div className="text-xs text-red-600">2 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;