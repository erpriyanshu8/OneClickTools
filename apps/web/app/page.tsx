'use client';

import React from 'react';
import { ArrowRight, Zap, Code, Design, Database, Settings, Workflow } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Tools Available', value: '100+' },
    { label: 'Processing Time', value: '<1s' },
    { label: 'Uptime', value: '99.9%' },
  ];

  const toolCategories = [
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Code formatting, minification, and conversion utilities',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Design,
      title: 'Design Tools',
      description: 'Color palettes, gradient generators, and design utilities',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'Data Tools',
      description: 'JSON formatter, CSV parser, and data transformation tools',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Workflow,
      title: 'Automation Tools',
      description: 'Task scheduling, workflow builders, and automation scripts',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Settings,
      title: 'Utility Tools',
      description: 'File converters, generators, and productivity helpers',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Performance Tools',
      description: 'Optimization, compression, and speed testing utilities',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'All tools process instantly without any delays or waiting times',
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'APIs and integrations for seamless workflow automation',
    },
    {
      icon: Design,
      title: 'Beautiful UI',
      description: 'Modern and intuitive interface designed for ease of use',
    },
    {
      icon: Database,
      title: 'Data Secure',
      description: 'End-to-end encryption with privacy-first architecture',
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Configure tools to match your specific needs and preferences',
    },
    {
      icon: Workflow,
      title: 'Integrations',
      description: 'Connect with your favorite apps and services seamlessly',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            OneClickTools
          </div>
          <button className="px-6 py-2 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
              ✨ The Ultimate Toolkit for Everyone
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            All Your Tools in{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              One Click
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Access 100+ powerful utilities for development, design, data processing, and automation. Free, fast, and always available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 group">
              Explore Tools
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg hover:bg-slate-700 transition border border-slate-700">
              Watch Demo
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 h-96 flex items-center justify-center">
              <div className="text-slate-500 text-center">
                <Zap className="w-24 h-24 mx-auto opacity-50" />
                <p className="mt-4">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore Our Tools
            </h2>
            <p className="text-xl text-slate-400">
              Discover powerful utilities across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 p-8 hover:border-yellow-400/50 transition cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition" />
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4">
                    {category.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-3 transition">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose OneClickTools?
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need for productivity and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-700 bg-slate-800/50 p-8 hover:border-yellow-400/50 hover:bg-slate-800/80 transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 p-12 sm:p-16">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Boost Your Productivity?
              </h2>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already using OneClickTools to streamline their workflow and save hours every week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 group">
                  Start Using Tools
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg hover:bg-slate-700 transition border border-slate-700">
                  View Documentation
                </button>
              </div>
              
              <p className="text-slate-500 text-sm mt-8">
                No credit card required • Free forever plan • API access included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-400" />
                OneClickTools
              </div>
              <p className="text-slate-400 text-sm">
                The ultimate toolkit for developers, designers, and creators.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition">Developer Tools</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Design Tools</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Data Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">API Reference</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 OneClickTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
