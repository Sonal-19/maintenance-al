"use client";
import { useState, useEffect } from 'react';
import { Wrench, Clock, Rocket,} from 'lucide-react';

export default function MaintenancePage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(56);
  const [activeFeature, setActiveFeature] = useState(0);

  // Set your maintenance end date here
  useEffect(() => {
    const maintenanceEnd = new Date('2025-07-17T19:50:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = maintenanceEnd - now;
      
      if (distance <= 0) {
        clearInterval(interval);
        return;
      }
      
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      // Simulate progress increase
      if (progress < 100) {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 0.2;
          return newProgress > 100 ? 100 : newProgress;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Performance upgrades",
      desc: "Faster page loads with optimized assets and code splitting",
      color: "bg-emerald-500",
      details: "We're implementing advanced caching strategies and reducing bundle sizes by 40% for lightning-fast page loads."
    },
    {
      title: "New dashboard",
      desc: "Completely redesigned user interface",
      color: "bg-teal-500",
      details: "The new dashboard features customizable widgets, dark mode support, and intuitive navigation for better productivity."
    },
    {
      title: "Security updates",
      desc: "Enhanced protection and data privacy",
      color: "bg-green-500",
      details: "We've upgraded to the latest security protocols including OAuth 2.1 and added end-to-end encryption for sensitive data."
    },
    {
      title: "Mobile experience",
      desc: "Improved responsiveness across devices",
      color: "bg-lime-500",
      details: "The new adaptive layout ensures perfect display on all screen sizes with touch-friendly controls and gestures."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <div 
        className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="bg-emerald-600 dark:bg-emerald-800 p-6 md:p-8 text-white relative">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full bg-white/20 ${isHovered ? 'animate-bounce' : 'animate-pulse'} hidden sm:inline`}>
              <Wrench className="h-8 w-8" />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Scheduled Maintenance</h1>
                <p className="text-white/90">We're making things even better</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Message */}
            <div className="lg:w-2/3 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Our website is currently undergoing scheduled maintenance
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We apologize for the inconvenience but we're performing some maintenance to improve your experience. 
                  We'll be back online shortly! The maintenance is expected to complete by July 17, 2025 at 8:00 PM UTC.
                </p>
              </div>

              {/* Countdown */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Estimated time remaining</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div 
                      key={unit} 
                      className="bg-emerald-50 dark:bg-gray-600 rounded-lg p-3 text-center transition-all hover:scale-105 duration-200 hover:bg-emerald-100 dark:hover:bg-gray-500"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Progress</span>
                  <span>91%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `91%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {/* {progress < 40 ? "Initializing update process..." : 
                   progress < 70 ? "Implementing new features and performance improvements..." : 
                   progress < 90 ? "Running system tests and optimizations..." : 
                   "Finalizing updates and preparing for launch..."} */}
                   Finalizing updates and preparing for launch...
                </p>
              </div>

              {/* Status Updates */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Current Status</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${progress > 20 ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Backend services updated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${progress > 50 ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Database migration completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${progress > 80 ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Frontend deployment in progress</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Updates Card */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-5 transition-all hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-500">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  What's New 
                </h3>
                <div className="flex flex-col gap-2 mb-4">
                  {features.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`text-left p-3 rounded-md transition-all ${activeFeature === index ? 'bg-emerald-50 dark:bg-gray-600 border border-emerald-200 dark:border-emerald-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`mt-1 h-2 w-2 rounded-full ${item.color} transition-all`}></div>
                        <div>
                          <p className={`text-sm font-medium ${activeFeature === index ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-900 dark:text-white'}`}>
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="bg-white dark:bg-gray-600 p-3 rounded-md border border-gray-200 dark:border-gray-500">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {features[activeFeature].details}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; 2025 All rights reserved. AL Primus. 
            <span className="block sm:inline"> Follow us for updates on <span className="text-emerald-600 dark:text-emerald-400">@alprimus</span></span>
          </p>
        </div>
      </div>
    </div>
  );
}