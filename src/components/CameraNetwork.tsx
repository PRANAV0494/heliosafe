import React, { useState } from 'react';
import { Camera, MapPin, Activity, AlertTriangle, CheckCircle, XCircle, Zap } from 'lucide-react';

const CameraNetwork: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const cameras = [
    {
      id: 1,
      name: 'Highway 101 - Mile 42',
      location: 'North Junction',
      coordinates: '37.7749, -122.4194',
      status: 'Active',
      quality: 'HD',
      lastPing: '2 sec ago',
      incidents: 2,
      powerSource: 'Solar',
      batteryLevel: 85,
      aiEnabled: true
    },
    {
      id: 2,
      name: 'Highway 101 - Mile 45',
      location: 'Bridge Overpass',
      coordinates: '37.7849, -122.4094',
      status: 'Active',
      quality: '4K',
      lastPing: '1 sec ago',
      incidents: 0,
      powerSource: 'Solar',
      batteryLevel: 92,
      aiEnabled: true
    },
    {
      id: 3,
      name: 'Main Street Intersection',
      location: 'Downtown',
      coordinates: '37.7949, -122.3994',
      status: 'Maintenance',
      quality: 'HD',
      lastPing: '5 min ago',
      incidents: 1,
      powerSource: 'Solar',
      batteryLevel: 23,
      aiEnabled: false
    },
    {
      id: 4,
      name: 'Interstate 80 - Exit 12',
      location: 'Commercial District',
      coordinates: '37.8049, -122.3894',
      status: 'Active',
      quality: '4K',
      lastPing: '3 sec ago',
      incidents: 0,
      powerSource: 'Solar',
      batteryLevel: 78,
      aiEnabled: true
    },
    {
      id: 5,
      name: 'Highway 101 - Mile 38',
      location: 'South Junction',
      coordinates: '37.7649, -122.4294',
      status: 'Offline',
      quality: 'HD',
      lastPing: '2 hours ago',
      incidents: 0,
      powerSource: 'Solar',
      batteryLevel: 5,
      aiEnabled: false
    },
    {
      id: 6,
      name: 'Bay Bridge Approach',
      location: 'Bridge Entry',
      coordinates: '37.7849, -122.3794',
      status: 'Active',
      quality: '4K',
      lastPing: '1 sec ago',
      incidents: 1,
      powerSource: 'Solar',
      batteryLevel: 88,
      aiEnabled: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Maintenance': return 'bg-yellow-500';
      case 'Offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return CheckCircle;
      case 'Maintenance': return AlertTriangle;
      case 'Offline': return XCircle;
      default: return Activity;
    }
  };

  const CameraCard = ({ camera }: { camera: any }) => {
    const StatusIcon = getStatusIcon(camera.status);
    
    return (
      <div 
        className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer ${
          selectedCamera === camera.id ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => setSelectedCamera(camera.id)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Camera className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{camera.name}</h3>
              <p className="text-sm text-gray-600">{camera.location}</p>
            </div>
          </div>
          <div className="flex items-center">
            <StatusIcon className={`h-4 w-4 mr-1 ${
              camera.status === 'Active' ? 'text-green-500' :
              camera.status === 'Maintenance' ? 'text-yellow-500' :
              'text-red-500'
            }`} />
            <span className={`text-sm font-medium ${
              camera.status === 'Active' ? 'text-green-600' :
              camera.status === 'Maintenance' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {camera.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-500">Quality</div>
            <div className="font-semibold text-gray-900">{camera.quality}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Last Ping</div>
            <div className="font-semibold text-gray-900">{camera.lastPing}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Incidents Today</div>
            <div className="font-semibold text-gray-900">{camera.incidents}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">AI Detection</div>
            <div className={`font-semibold ${camera.aiEnabled ? 'text-green-600' : 'text-red-600'}`}>
              {camera.aiEnabled ? 'Enabled' : 'Disabled'}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-gray-600">
              <Zap className="h-4 w-4 mr-1" />
              Solar Power
            </div>
            <div className="text-sm font-medium text-gray-900">
              {camera.batteryLevel}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                camera.batteryLevel > 50 ? 'bg-green-500' :
                camera.batteryLevel > 20 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${camera.batteryLevel}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {camera.coordinates}
        </div>
      </div>
    );
  };

  const activeCameras = cameras.filter(c => c.status === 'Active').length;
  const totalIncidents = cameras.reduce((sum, c) => sum + c.incidents, 0);
  const averageBattery = Math.round(cameras.reduce((sum, c) => sum + c.batteryLevel, 0) / cameras.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Camera Network</h1>
            <p className="text-gray-600">Monitor AI-powered surveillance cameras across the network</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'map' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Map View
            </button>
          </div>
        </div>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-green-600">{activeCameras}</div>
          <div className="text-sm text-gray-600">Active Cameras</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-gray-900">{cameras.length}</div>
          <div className="text-sm text-gray-600">Total Cameras</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-red-600">{totalIncidents}</div>
          <div className="text-sm text-gray-600">Incidents Today</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-blue-600">{averageBattery}%</div>
          <div className="text-sm text-gray-600">Avg Battery</div>
        </div>
      </div>

      {/* Camera Grid */}
      {viewMode === 'grid' && (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <CameraCard key={camera.id} camera={camera} />
          ))}
        </div>
      )}

      {/* Map View */}
      {viewMode === 'map' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Network Coverage Map</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map View</p>
              <p className="text-sm">Camera locations and coverage areas</p>
            </div>
          </div>
        </div>
      )}

      {/* Camera Details Modal */}
      {selectedCamera && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Camera Feed</h2>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <Camera className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Camera {selectedCamera}</p>
              <p className="text-sm text-gray-400">AI-powered live monitoring</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraNetwork;