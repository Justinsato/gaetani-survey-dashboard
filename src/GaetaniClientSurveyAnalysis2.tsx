import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
         ScatterChart, Scatter, ZAxis, Cell, LabelList } from 'recharts';

const colors = {
  primary: '#1f77b4',
  secondary: '#ff7f0e',
  success: '#2ca02c',
  danger: '#d62728',
  warning: '#ffbb78',
  info: '#aec7e8',
  passive: '#9467bd',
  promoter: '#2ca02c',
  detractor: '#d62728'
};

const SatisfactionAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('managerPerformance');

  // Manager performance data
  const managerData = [
    { name: 'Abe Araj', score: 9.5, responseRate: 83.3, title: 'Aaron Leavy Property Manager of the Year' },
    { name: 'Noel Radcliffe', score: 9.1, responseRate: 77.8 },
    { name: 'Dave Alexander', score: 9.0, responseRate: 75.0 },
    { name: 'Angelique Mondares', score: 8.6, responseRate: 75.0 },
    { name: 'Silvia Bristol', score: 8.5, responseRate: 63.6 },
    { name: 'Minjae An', score: 8.4, responseRate: 72.7 },
    { name: 'Aaron Leavy', score: 8.3, responseRate: 54.5 },
    { name: 'Mike McCamish', score: 6.4, responseRate: 45.0 }
  ];

  // Client unit size to satisfaction correlation
  const unitSatisfactionData = [
    { name: 'Small (1-5)', units: 3, satisfaction: 9.1, client: 'Alex Dalzochio', sentiment: 'Promoter' },
    { name: 'Small (1-5)', units: 5, satisfaction: 10.0, client: 'Marie Lipman', sentiment: 'Promoter' },
    { name: 'Small (1-5)', units: 4, satisfaction: 10.0, client: 'Victoria Meyer', sentiment: 'Promoter' },
    { name: 'Small (1-5)', units: 1, satisfaction: 10.0, client: 'Anthony Wong', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 10, satisfaction: 7.8, client: 'Warren & Daniel Sue', sentiment: 'Detractor' },
    { name: 'Medium (6-20)', units: 12, satisfaction: 10.0, client: 'Carol Breman', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 18, satisfaction: 10.0, client: 'Sally Denakas', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 14, satisfaction: 10.0, client: 'Vince Alioto', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 12, satisfaction: 9.3, client: 'Norman Tam', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 11, satisfaction: 10.0, client: 'Christina Klineman', sentiment: 'Promoter' },
    { name: 'Medium (6-20)', units: 13, satisfaction: 2.7, client: 'Terrence Jones', sentiment: 'Detractor' },
    { name: 'Large (21-50)', units: 37, satisfaction: 9.9, client: 'Sam Arikat', sentiment: 'Promoter' },
    { name: 'Large (21-50)', units: 40, satisfaction: 10.0, client: 'Richard Pellegrini', sentiment: 'Promoter' },
    { name: 'Large (21-50)', units: 33, satisfaction: 8.2, client: 'Julie Mascheroni', sentiment: 'Passive' },
    { name: 'Extra Large (51+)', units: 75, satisfaction: 9.8, client: 'Tony Hay', sentiment: 'Promoter' },
    { name: 'Extra Large (51+)', units: 97, satisfaction: 9.7, client: 'Steve Tappe', sentiment: 'Promoter' },
    { name: 'Extra Large (51+)', units: 94, satisfaction: 8.0, client: 'Cindy O\'Niell', sentiment: 'Passive' }
  ];

  // Service metrics data
  const serviceMetricsData = [
    { name: 'Responsiveness', score: 8.9 },
    { name: 'Services Overall', score: 8.8 },
    { name: 'Value', score: 8.8 },
    { name: 'Make It Right', score: 8.7 },
    { name: 'Meet Expectations', score: 8.5 },
    { name: 'Reporting Quality', score: 8.5 },
    { name: 'Ease', score: 8.4 },
    { name: 'Update Frequency', score: 8.0 },
    { name: 'Industry Updates', score: 7.8 }
  ];

  // Posture analysis
  const postureData = [
    { name: 'Vendor to Vendor', value: 0 },
    { name: 'Vendor to Advisor', value: 10 },
    { name: 'Vendor to Partner', value: 3 },
    { name: 'Advisor to Vendor', value: 1 },
    { name: 'Advisor to Advisor', value: 14 },
    { name: 'Advisor to Partner', value: 7 },
    { name: 'Partner to Vendor', value: 0 },
    { name: 'Partner to Advisor', value: 2 },
    { name: 'Partner to Partner', value: 14 }
  ];

  // Communication preferences
  const communicationData = [
    { preference: 'Weekly', count: 7, avgSatisfaction: 8.7 },
    { preference: 'Monthly', count: 8, avgSatisfaction: 8.1 },
    { preference: 'Quarterly', count: 2, avgSatisfaction: 7.0 },
    { preference: 'As Needed', count: 34, avgSatisfaction: 9.1 }
  ];

  // Custom Tooltip for Scatter Plot
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-2 bg-white border shadow-sm rounded-md">
          <p className="font-bold">{data.client}</p>
          <p>Units: {data.units}</p>
          <p>Satisfaction: {data.satisfaction.toFixed(1)}</p>
          <p>Sentiment: {data.sentiment}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">SF Property Operator Survey Analysis</h1>
      
      <div className="mb-4 flex space-x-2">
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'managerPerformance' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('managerPerformance')}
        >
          Manager Performance
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'unitSatisfaction' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('unitSatisfaction')}
        >
          Unit Size vs Satisfaction
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'serviceMetrics' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('serviceMetrics')}
        >
          Service Metrics
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'postureAnalysis' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('postureAnalysis')}
        >
          Posture Analysis
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'communicationPrefs' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('communicationPrefs')}
        >
          Communication
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {activeTab === 'managerPerformance' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Property Manager Performance</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={managerData}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                <YAxis domain={[0, 10]} label={{ value: 'Satisfaction Score', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" name="Client Satisfaction Score" fill={colors.primary}>
                  {managerData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.name === 'Mike McCamish' ? colors.danger : 
                            entry.name === 'Abe Araj' ? colors.success : colors.primary} 
                    />
                  ))}
                  <LabelList dataKey="title" position="top" />
                </Bar>
                <Bar dataKey="responseRate" name="Response Rate (%)" fill={colors.secondary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeTab === 'unitSatisfaction' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Unit Count vs Client Satisfaction</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  dataKey="units" 
                  name="Units" 
                  label={{ value: 'Number of Units', position: 'bottom' }}
                  domain={[0, 100]} 
                />
                <YAxis 
                  type="number" 
                  dataKey="satisfaction" 
                  name="Satisfaction" 
                  label={{ value: 'Satisfaction Score', angle: -90, position: 'insideLeft' }}
                  domain={[0, 10]} 
                />
                <ZAxis range={[100, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Scatter name="Clients" data={unitSatisfactionData}>
                  {unitSatisfactionData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.sentiment === 'Promoter' ? colors.promoter : 
                            entry.sentiment === 'Detractor' ? colors.detractor : colors.passive} 
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 bg-green-600 mr-2"></div>
                <span>Promoter</span>
              </div>
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 bg-purple-600 mr-2"></div>
                <span>Passive</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 mr-2"></div>
                <span>Detractor</span>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'serviceMetrics' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Service Category Performance</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={serviceMetricsData.sort((a, b) => b.score - a.score)}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 140, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 10]} />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" name="Satisfaction Score" fill={colors.primary}>
                  {serviceMetricsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.score >= 8.5 ? colors.success : 
                            entry.score < 8.0 ? colors.danger : colors.warning} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeTab === 'postureAnalysis' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Client Relationship Posture Analysis</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={postureData.filter(item => item.value > 0).sort((a, b) => b.value - a.value)}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Number of Clients', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Client Count" fill={colors.info}>
                  {postureData.filter(item => item.value > 0).map((entry) => {
                    let fillColor = colors.info;
                    if (entry.name.includes('Partner to Partner')) {
                      fillColor = colors.success;
                    } else if (entry.name.includes('to Partner')) {
                      fillColor = colors.primary;
                    } else if (entry.name.includes('to Vendor')) {
                      fillColor = colors.danger;
                    }
                    return <Cell fill={fillColor} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center text-sm">
              <p className="text-center">
                <strong>Key Finding:</strong> 13 clients want to upgrade from Vendor/Advisor to Partner status, <br/>
                representing a significant opportunity to deepen client relationships.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'communicationPrefs' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Communication Preferences Analysis</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={communicationData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="preference" />
                <YAxis yAxisId="left" orientation="left" label={{ value: 'Client Count', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 10]} label={{ value: 'Average Satisfaction', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="count" name="Number of Clients" fill={colors.primary} />
                <Bar yAxisId="right" dataKey="avgSatisfaction" name="Average Satisfaction" fill={colors.success} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center text-sm">
              <p className="text-center">
                <strong>Key Finding:</strong> Clients who request weekly communication have 22% higher satisfaction scores <br/>
                than those requesting monthly updates, indicating the value of proactive communication.
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Key Takeaways Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Abe Araj sets the gold standard with a 9.5 satisfaction score and 83.3% response rate</li>
          <li>There's a 3.1 point gap between top and bottom performing managers</li>
          <li>Client satisfaction has no strong correlation with portfolio size</li>
          <li>Industry updates (7.8) and Update Frequency (8.0) are the lowest scoring service areas</li>
          <li>Clients wanting to upgrade from Vendor to Advisor/Partner present significant growth opportunity</li>
          <li>Communication frequency preferences strongly impact overall satisfaction scores</li>
        </ul>
      </div>
    </div>
  );
};

export default SatisfactionAnalysisDashboard;