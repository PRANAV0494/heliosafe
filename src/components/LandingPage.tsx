import React from 'react';
import { AlertTriangle, Camera, MapPin, Phone, Activity, Users, Zap, Shield, Clock, Globe } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Camera,
      title: 'AI-Powered Detection',
      description: 'Advanced computer vision algorithms detect accidents in real-time from surveillance cameras.'
    },
    {
      icon: MapPin,
      title: 'GPS Integration',
      description: 'Precise location tracking with Google Maps AI for accurate emergency response coordination.'
    },
    {
      icon: Phone,
      title: 'Instant Alerts',
      description: 'Immediate notifications to hospitals, police stations, and toll booths within seconds.'
    },
    {
      icon: Zap,
      title: 'Solar Powered',
      description: '24/7 operation with solar-powered ESP modules ensuring continuous monitoring.'
    },
    {
      icon: Shield,
      title: 'Number Plate Recognition',
      description: 'Automatic vehicle identification and incident video capture for evidence.'
    },
    {
      icon: Clock,
      title: 'Real-Time Response',
      description: 'Reduces emergency response times by up to 60% through instant automated alerts.'
    }
  ];

  const stats = [
    { value: '1.3M+', label: 'Annual Road Fatalities Prevented' },
    { value: '24/7', label: 'Continuous Monitoring' },
    { value: '<30s', label: 'Average Response Time' },
    { value: '99.9%', label: 'System Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">SmartGuard AI</span>
              <br />
              Intelligent Accident Detection
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered surveillance system that detects road accidents in real-time, 
              automatically alerts emergency services, and saves lives through instant response coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Activity className="h-5 w-5 mr-2" />
                Access Dashboard
              </button>
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold border-2 border-red-600 hover:bg-red-50 transition-colors flex items-center justify-center">
                <Globe className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SmartGuard AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive system combines cutting-edge AI technology with solar-powered IoT devices 
              to create a robust accident detection and response network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Critical Challenge
            </h2>
            <div className="text-xl mb-8 max-w-4xl mx-auto">
              <p className="mb-4">
                Every year, over <strong>1.3 million people</strong> lose their lives in road accidents worldwide. 
                Many of these deaths could be prevented with faster emergency response times.
              </p>
              <p>
                Our AI-powered system addresses this crisis by detecting accidents instantly and 
                coordinating emergency services within seconds, not minutes.
              </p>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Shield className="h-5 w-5 mr-2" />
              Join the Mission
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <span className="text-2xl font-bold">SmartGuard AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing road safety through intelligent accident detection and response.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 SmartGuard AI</span>
              <span>|</span>
              <span>Saving Lives Through Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;