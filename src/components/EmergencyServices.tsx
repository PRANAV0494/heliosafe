import React, { useState } from 'react';
import { Phone, MapPin, Clock, AlertTriangle, CheckCircle, Plus, Edit } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      address: '123 Medical Center Dr',
      phone: '+1-555-0123',
      distance: '2.1 km',
      capacity: 'High',
      trauma: true,
      responseTime: '4 min',
      lastContact: '2 min ago',
      status: 'Available'
    },
    {
      id: 2,
      name: 'St. Mary\'s Medical Center',
      address: '456 Healthcare Ave',
      phone: '+1-555-0456',
      distance: '3.8 km',
      capacity: 'Medium',
      trauma: true,
      responseTime: '6 min',
      lastContact: '5 min ago',
      status: 'Available'
    },
    {
      id: 3,
      name: 'Regional Emergency Hospital',
      address: '789 Emergency Blvd',
      phone: '+1-555-0789',
      distance: '5.2 km',
      capacity: 'Low',
      trauma: false,
      responseTime: '8 min',
      lastContact: '10 min ago',
      status: 'Busy'
    }
  ];

  const policeStations = [
    {
      id: 1,
      name: 'Police Station 12',
      address: '321 Safety St',
      phone: '+1-555-0321',
      distance: '1.8 km',
      units: 3,
      responseTime: '3 min',
      lastContact: '1 min ago',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Highway Patrol Unit',
      address: 'Mobile Unit - Highway 101',
      phone: '+1-555-0654',
      distance: '0.5 km',
      units: 2,
      responseTime: '1 min',
      lastContact: '3 min ago',
      status: 'Available'
    }
  ];

  const tollBooths = [
    {
      id: 1,
      name: 'Toll Plaza North',
      address: 'Highway 101 - Mile 42',
      phone: '+1-555-0987',
      distance: '2.3 km',
      responseTime: '5 min',
      lastContact: '1 min ago',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Toll Plaza South',
      address: 'Highway 101 - Mile 38',
      phone: '+1-555-0654',
      distance: '4.1 km',
      responseTime: '7 min',
      lastContact: '8 min ago',
      status: 'Available'
    }
  ];

  const ServiceCard = ({ service, type, icon: Icon }: any) => (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{service.name}</h3>
            <p className="text-sm text-gray-600">{service.address}</p>
          </div>
        </div>
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

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-500">Distance</div>
          <div className="font-semibold text-gray-900">{service.distance}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Response Time</div>
          <div className="font-semibold text-gray-900">{service.responseTime}</div>
        </div>
        {service.capacity && (
          <div>
            <div className="text-sm text-gray-500">Capacity</div>
            <div className={`font-semibold ${
              service.capacity === 'High' ? 'text-green-600' :
              service.capacity === 'Medium' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {service.capacity}
            </div>
          </div>
        )}
        {service.trauma !== undefined && (
          <div>
            <div className="text-sm text-gray-500">Trauma Center</div>
            <div className={`font-semibold ${service.trauma ? 'text-green-600' : 'text-red-600'}`}>
              {service.trauma ? 'Yes' : 'No'}
            </div>
          </div>
        )}
        {service.units && (
          <div>
            <div className="text-sm text-gray-500">Available Units</div>
            <div className="font-semibold text-gray-900">{service.units}</div>
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-500">Last Contact: {service.lastContact}</div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
              Contact
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
              <Edit className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Emergency Services Network</h1>
            <p className="text-gray-600">Manage and monitor emergency response contacts</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-gray-900">{hospitals.length}</div>
          <div className="text-sm text-gray-600">Hospitals</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-gray-900">{policeStations.length}</div>
          <div className="text-sm text-gray-600">Police Stations</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-gray-900">{tollBooths.length}</div>
          <div className="text-sm text-gray-600">Toll Booths</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-2xl font-bold text-green-600">2.5 min</div>
          <div className="text-sm text-gray-600">Avg Response</div>
        </div>
      </div>

      {/* Hospitals Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Hospitals & Medical Centers</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {hospitals.map((hospital) => (
            <ServiceCard
              key={hospital.id}
              service={hospital}
              type="hospital"
              icon={AlertTriangle}
            />
          ))}
        </div>
      </div>

      {/* Police Stations Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Police Stations</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {policeStations.map((station) => (
            <ServiceCard
              key={station.id}
              service={station}
              type="police"
              icon={Phone}
            />
          ))}
        </div>
      </div>

      {/* Toll Booths Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Toll Booths & Checkpoints</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {tollBooths.map((booth) => (
            <ServiceCard
              key={booth.id}
              service={booth}
              type="toll"
              icon={MapPin}
            />
          ))}
        </div>
      </div>

      {/* Emergency Protocol */}
      <div className="bg-red-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Emergency Response Protocol
        </h2>
        <div className="space-y-3 text-red-800">
          <div className="flex items-start">
            <div className="bg-red-200 text-red-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
            <div>
              <strong>Immediate Detection:</strong> AI system detects accident and captures incident data
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-red-200 text-red-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
            <div>
              <strong>Automatic Alerts:</strong> Nearest hospitals, police, and toll booths are notified within 10 seconds
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-red-200 text-red-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
            <div>
              <strong>Coordinated Response:</strong> Emergency services dispatch units based on incident severity and location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;