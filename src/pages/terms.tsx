import { FileText, Scale, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-12">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Orbit Technology's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                Orbit Technology provides cloud computing services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Virtual Private Servers (VPS)</li>
                <li>Cloud hosting and infrastructure</li>
                <li>AI and Machine Learning solutions</li>
                <li>Software development services</li>
                <li>API services and integrations</li>
                <li>Technical support and consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
                Acceptable Use Policy
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>Transmit worms, viruses, or any code of a destructive nature</li>
                <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>Submit false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms for Orbit Technology services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All fees are quoted in British Pounds (GBP) unless otherwise stated</li>
                <li>Payment is due in advance for all services</li>
                <li>We accept major credit cards and bank transfers</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are subject to applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Level Agreement</h2>
              <p className="text-gray-700 mb-4">
                Orbit Technology commits to the following service levels:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Uptime:</strong> 99.9% uptime guarantee for all services</li>
                <li><strong>Support:</strong> 24/7 technical support via email and chat</li>
                <li><strong>Response Time:</strong> Initial response within 4 hours for critical issues</li>
                <li><strong>Data Backup:</strong> Daily automated backups with 30-day retention</li>
                <li><strong>Security:</strong> Enterprise-grade security measures and monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                In no event shall Orbit Technology, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be interpreted and governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Puducherry, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <strong>Email:</strong> admin@orbittechnology.tech
                  </p>
                  <p className="text-gray-700">
                    <strong>Legal Name:</strong> ORBIT TECHNOLOGY
                  </p>
                  <p className="text-gray-700">
                    <strong>GSTIN:</strong> 34AAFFO2987H1Z0
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> NO.2, RAGAVENDRA NAGAR, KURUMBAPET, Puducherry, 605009, India
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}