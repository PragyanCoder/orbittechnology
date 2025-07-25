import { useState } from 'react';
import { Book, Code, Server, Database, Shield, Zap, ChevronRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: <Book className="h-5 w-5" /> },
    { id: 'api-reference', title: 'API Reference', icon: <Code className="h-5 w-5" /> },
    { id: 'cloud-services', title: 'Cloud Services', icon: <Server className="h-5 w-5" /> },
    { id: 'database', title: 'Database Solutions', icon: <Database className="h-5 w-5" /> },
    { id: 'security', title: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'performance', title: 'Performance', icon: <Zap className="h-5 w-5" /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Getting Started with Orbit Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Orbit Technology's comprehensive documentation. This guide will help you get started with our cloud services, APIs, and development tools.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Sign up for an Orbit Technology account</li>
                <li>Choose your service plan</li>
                <li>Configure your environment</li>
                <li>Deploy your first application</li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Installation</h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard('npm install @orbit-tech/sdk', 'install')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'install' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <pre className="text-green-400">
                  <code>npm install @orbit-tech/sdk</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Basic Usage</h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(`import { OrbitClient } from '@orbit-tech/sdk';

const client = new OrbitClient({
  apiKey: 'your-api-key',
  region: 'us-east-1'
});

// Deploy your application
await client.deploy({
  name: 'my-app',
  source: './dist',
  domain: 'my-app.orbittechnology.tech'
});`, 'basic-usage')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'basic-usage' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`import { OrbitClient } from '@orbit-tech/sdk';

const client = new OrbitClient({
  apiKey: 'your-api-key',
  region: 'us-east-1'
});

// Deploy your application
await client.deploy({
  name: 'my-app',
  source: './dist',
  domain: 'my-app.orbittechnology.tech'
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        );

      case 'api-reference':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">API Reference</h2>
              <p className="text-lg text-gray-600 mb-6">
                Complete reference for Orbit Technology's REST API endpoints and SDKs.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Authentication</h3>
                <p className="text-gray-600 mb-4">All API requests require authentication using your API key.</p>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer your-api-key', 'auth')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                  >
                    {copiedCode === 'auth' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <pre className="text-green-400">
                    <code>Authorization: Bearer your-api-key</code>
                  </pre>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Base URL</h3>
                <p className="text-gray-600 mb-4">All API endpoints are relative to the base URL:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-blue-400">
                    <code>https://api.orbittechnology.tech/v1</code>
                  </pre>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Endpoints</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded">GET</span>
                      <span className="ml-2 font-mono">/servers</span>
                    </div>
                    <span className="text-gray-600">List all servers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-mono text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">POST</span>
                      <span className="ml-2 font-mono">/servers</span>
                    </div>
                    <span className="text-gray-600">Create new server</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-mono text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PUT</span>
                      <span className="ml-2 font-mono">/servers/:id</span>
                    </div>
                    <span className="text-gray-600">Update server</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-mono text-sm bg-red-100 text-red-800 px-2 py-1 rounded">DELETE</span>
                      <span className="ml-2 font-mono">/servers/:id</span>
                    </div>
                    <span className="text-gray-600">Delete server</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cloud-services':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Cloud Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Learn how to deploy and manage your applications on Orbit Technology's cloud infrastructure.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">VPS Deployment</h3>
                <p className="text-gray-600 mb-4">Deploy your applications to our high-performance VPS instances.</p>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(`# Deploy to VPS
orbit deploy --app my-app --region us-east-1 --size 4gb

# Scale your application
orbit scale --app my-app --instances 3

# Monitor performance
orbit logs --app my-app --tail`, 'vps-deploy')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                  >
                    {copiedCode === 'vps-deploy' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <pre className="text-green-400 text-sm">
                    <code>{`# Deploy to VPS
orbit deploy --app my-app --region us-east-1 --size 4gb

# Scale your application
orbit scale --app my-app --instances 3

# Monitor performance
orbit logs --app my-app --tail`}</code>
                  </pre>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Load Balancing</h3>
                <p className="text-gray-600 mb-4">Automatically distribute traffic across multiple instances.</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-blue-400 text-sm">
                    <code>{`{
  "loadBalancer": {
    "algorithm": "round-robin",
    "healthCheck": {
      "path": "/health",
      "interval": 30
    },
    "ssl": true
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Section Coming Soon</h2>
            <p className="text-gray-600">This documentation section is currently being developed.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Documentation</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}