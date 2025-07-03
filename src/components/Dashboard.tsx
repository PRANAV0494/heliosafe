import React, { useState, useEffect } from 'react';
import { AlertTriangle, Camera, MapPin, Phone, Activity, Clock, CheckCircle, XCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeIncidents, setActiveIncidents] = useState(2);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const recentIncidents = [
    {
      id: 1,
      time: '2 minutes ago',
      location: 'Highway 101, Mile 45',
      severity: 'High',
      status: 'Active',
      coordinates: '37.7749, -122.4194',
      vehicle: 'ABC-1234',
      respondersNotified: 3
    },
    {
      id: 2,
      time: '15 minutes ago',
      location: 'Main Street & 5th Ave',
      severity: 'Medium',
      status: 'Responding',
      coordinates: '37.7849, -122.4094',
      vehicle: 'XYZ-5678',
      respondersNotified: 2
    },
    {
      id: 3,
      time: '1 hour ago',
      location: 'Interstate 80, Exit 12',
      severity: 'Low',
      status: 'Resolved',
      coordinates: '37.7949, -122.3994',
      vehicle: 'DEF-9012',
      respondersNotified: 1
    }
  ];

  const systemStats = [
    { label: 'Active Cameras', value: '247', status: 'operational' },
    { label: 'Response Time', value: '23s', status: 'excellent' },
    { label: 'Today\'s Incidents', value: '8', status: 'normal' },
    { label: 'System Uptime', value: '99.9%', status: 'excellent' }
  ];

  const emergencyServices = [
    { name: 'City General Hospital', distance: '2.1 km', status: 'Available', responseTime: '4 min' },
    { name: 'Police Station 12', distance: '1.8 km', status: 'Available', responseTime: '3 min' },
    { name: 'Fire Department', distance: '3.2 km', status: 'On Call', responseTime: '5 min' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Emergency Response Dashboard</h1>
            <p className="text-gray-600">Real-time accident detection and response coordination</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Current Time</div>
            <div className="text-lg font-semibold text-gray-900">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      {activeIncidents > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
          <span className="font-semibold">Active Incidents: {activeIncidents}</span>
          <span className="ml-2">Emergency services have been notified</span>
        </div>
      )}

      {/* System Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className={`w-3 h-3 rounded-full ${
                stat.status === 'excellent' ? 'bg-green-500' :
                stat.status === 'operational' ? 'bg-blue-500' :
                'bg-yellow-500'
              }`}></div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Incidents */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Incidents</h2>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      incident.status === 'Active' ? 'bg-red-500 animate-pulse' :
                      incident.status === 'Responding' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-gray-900">{incident.location}</div>
                      <div className="text-sm text-gray-500">{incident.time}</div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    incident.severity === 'High' ? 'bg-red-100 text-red-800' :
                    incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {incident.severity}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Vehicle:</span> {incident.vehicle}
                  </div>
                  <div>
                    <span className="font-medium">Responders:</span> {incident.respondersNotified}
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {incident.coordinates}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Emergency Services</h2>
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {emergencyServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-900">{service.name}</div>
                  <div className="flex items-center">
                    {service.status === 'Available' ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      service.status === 'Available' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Distance:</span> {service.distance}
                  </div>
                  <div>
                    <span className="font-medium">ETA:</span> {service.responseTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Camera Feed Simulation */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Live Camera Feeds</h2>
          <Camera className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((feed) => (
            <div key={feed} className="relative">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm">Camera {feed}</div>
                  <div className="text-xs text-gray-400">Highway 101 - Mile {40 + feed}</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                LIVE
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;