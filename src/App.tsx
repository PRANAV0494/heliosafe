import React from 'react';
import { AlertTriangle, Camera, MapPin, Phone, Activity, Users, Zap, Shield, Clock, Globe, Brain, Wifi, Battery, Sun, Eye, Car, Guitar as Hospital } from 'lucide-react';

function App() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Advanced computer vision algorithms analyze surveillance camera feeds in real-time to instantly detect road accidents with 85% accuracy.'
    },
    {
      icon: Camera,
      title: 'Smart Surveillance Network',
      description: 'Leverages existing surveillance cameras on highways, urban roads, and remote areas to create a comprehensive monitoring network.'
    },
    {
      icon: Sun,
      title: 'Solar-Powered ESP Modules',
      description: '24/7 operation using solar-powered ESP modules and IoT components, ensuring continuous monitoring without conventional power dependency.'
    },
    {
      icon: Phone,
      title: 'Instant Emergency Alerts',
      description: 'Automatically notifies nearest hospitals, police stations, and toll booths within seconds of accident detection.'
    },
    {
      icon: Eye,
      title: 'Evidence Capture',
      description: 'Captures vehicle number plates and 10-second incident video clips for emergency services and insurance purposes.'
    },
    {
      icon: MapPin,
      title: 'Precise Location Tracking',
      description: 'Records exact longitude and latitude coordinates and integrates with Google Maps AI to locate nearest responders efficiently.'
    }
  ];

  const stats = [
    { value: '1.3M+', label: 'Annual Road Fatalities Worldwide', description: 'Lives lost due to delayed emergency response' },
    { value: '<1 Minute', label: 'Detection & Alert Time', description: 'From accident occurrence to emergency notification' },
    { value: '60%', label: 'Response Time Reduction', description: 'Faster emergency response through automation' },
    { value: '24/7', label: 'Continuous Operation', description: 'Solar-powered monitoring without interruption' }
  ];

  const systemComponents = [
    {
      icon: Camera,
      title: 'Surveillance Cameras',
      description: 'Existing highway and urban surveillance infrastructure'
    },
    {
      icon: Brain,
      title: 'AI Detection Engine',
      description: 'Real-time computer vision accident detection algorithms'
    },
    {
      icon: Wifi,
      title: 'ESP IoT Modules',
      description: 'Solar-powered communication and data transmission units'
    },
    {
      icon: MapPin,
      title: 'GPS Integration',
      description: 'Precise location tracking and Google Maps AI integration'
    },
    {
      icon: Hospital,
      title: 'Emergency Services',
      description: 'Hospitals, police stations, and toll booth notification network'
    },
    {
      icon: Battery,
      title: 'Solar Power System',
      description: 'Sustainable energy solution for 24/7 operation'
    }
  ];

  const emergencyServices = [
    {
      icon: Hospital,
      title: 'Hospitals',
      description: 'Immediate notification with patient condition estimates and exact location coordinates'
    },
    {
      icon: Shield,
      title: 'Police Stations',
      description: 'Traffic control, scene security, and investigation support with evidence capture'
    },
    {
      icon: Car,
      title: 'Toll Booths',
      description: 'Traffic management and alternative route coordination for emergency vehicles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-red-100 p-6 rounded-full">
                <AlertTriangle className="h-16 w-16 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">SmartGuard AI</span>
              <br />
              Intelligent Accident Detection System
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered surveillance system that detects road accidents in real-time, 
              automatically alerts emergency services, and saves lives through instant response coordination 
              using solar-powered IoT technology.
            </p>
            <div className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center text-lg">
              <Activity className="h-6 w-6 mr-3" />
              Saving Lives Through Technology
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              The Critical Challenge We're Solving
            </h2>
            <div className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed">
              <p className="mb-6">
                Every year, over <span className="text-red-400 font-bold">1.3 million people</span> lose their lives in road accidents worldwide. 
                Many of these deaths could be prevented with faster emergency response times.
              </p>
              <p className="text-gray-300">
                Traditional accident reporting relies on witnesses or victims calling for help, causing critical delays. 
                Our AI-powered system eliminates this delay by detecting accidents instantly and coordinating emergency services within seconds.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              How SmartGuard AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system combines cutting-edge AI technology with solar-powered IoT devices 
              to create a robust accident detection and response network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="bg-red-100 p-4 rounded-lg w-fit mb-6">
                    <Icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              System Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive ecosystem of interconnected components working together to save lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.title}</h3>
                  <p className="text-gray-600">{component.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency Response Network */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Emergency Response Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instant coordination with multiple emergency services for comprehensive accident response.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
                  <div className="bg-red-600 p-4 rounded-lg w-fit mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Emergency Response Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              From accident detection to emergency response in under 30 seconds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Detection</h3>
              <p className="text-sm opacity-90">Computer vision algorithms detect accident in real-time from surveillance cameras</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Capture</h3>
              <p className="text-sm opacity-90">System captures number plate, 10-second video, and exact GPS coordinates</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Alerts</h3>
              <p className="text-sm opacity-90">Automatic notifications sent to nearest hospitals, police, and toll booths</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Coordinated Response</h3>
              <p className="text-sm opacity-90">Emergency services dispatch with precise location and incident details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Advantages */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Solar-Powered IoT?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainable & Reliable</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Sun className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Operation</h4>
                    <p className="text-gray-600">Solar panels with battery backup ensure continuous monitoring without power grid dependency</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <Wifi className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Remote Area Coverage</h4>
                    <p className="text-gray-600">ESP modules work in remote locations where traditional power infrastructure is unavailable</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective Deployment</h4>
                    <p className="text-gray-600">Low maintenance costs and energy independence make large-scale deployment feasible</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">System Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Detection Accuracy</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold">&lt; 1 Minute</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power Consumption</span>
                  <span className="font-semibold">low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Operating Temperature</span>
                  <span className="font-semibold">-40°C to +85°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectivity</span>
                  <span className="font-semibold">WiFi, 4G</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Battery Life</span>
                  <span className="font-semibold">7+ days backup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Mission */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Our Mission: Zero Preventable Deaths
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            By leveraging AI, IoT, and sustainable technology, we're building a world where every road accident 
            triggers an immediate, coordinated response that saves lives and prevents avoidable tragedies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Deployment</h3>
              <p className="opacity-90">Scalable solution for highways, urban roads, and remote areas worldwide</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="opacity-90">Protecting families and communities through intelligent accident prevention</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <Activity className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
              <p className="opacity-90">Constantly improving AI algorithms and response coordination systems</p>
            </div>
          </div>
          
          <div className="text-2xl font-semibold">
            Together, we can make every road safer.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <AlertTriangle className="h-10 w-10 text-red-500 mr-4" />
              <span className="text-3xl font-bold">SmartGuard AI</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Revolutionizing road safety through intelligent accident detection and response.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>© 2025 Team OneHack</span>
              <span>|</span>
              <span>Saving Lives Through Technology</span>
              <span>|</span>
              <span>Powered by Team OneHack</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;