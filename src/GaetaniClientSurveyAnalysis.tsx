import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

const GaetaniClientSurveyAnalysis = () => {
  // Data from our analysis
  const topManagersData = [
    {name: 'Abe Araj', score: 9.51},
    {name: 'Noel Radcliffe', score: 9.14},
    {name: 'David Alexander', score: 9.13},
    {name: 'Dave Alexander', score: 8.86},
    {name: 'Angelique Mondares', score: 8.58}
  ];

  const metricsData = [
    {metric: 'Keeping Informed of Industry Changes', score: 7.76},
    {metric: 'Keeping Current with Opportunities/Risks', score: 7.97},
    {metric: 'Frequency of Property Updates', score: 8.00},
    {metric: 'Quality of Monthly Reporting', score: 8.48},
    {metric: 'Meeting Expectations', score: 8.52},
    {metric: 'Care About Client Goals', score: 8.62},
    {metric: 'Day-to-Day Property Management', score: 8.63},
    {metric: 'Helpfulness of Recommendations', score: 8.64},
    {metric: 'Likelihood to Recommend', score: 8.65},
    {metric: 'Services Overall', score: 8.76},
    {metric: 'Overall Value of Services', score: 8.78},
    {metric: 'Responsiveness', score: 8.86},
    {metric: 'Ease of Working with Us', score: 8.90},
    {metric: 'Making Things Right When Wrong', score: 8.92}
  ];

  const themeData = [
    {theme: 'Communication', percentage: 29.45},
    {theme: 'Service Quality', percentage: 29.45},
    {theme: 'Maintenance', percentage: 26.03},
    {theme: 'Value', percentage: 24.66},
    {theme: 'Tenant Management', percentage: 15.75}
  ];

  const sentimentData = [
    {sentiment: 'Positive', percentage: 41.78},
    {sentiment: 'Neutral', percentage: 50.68},
    {sentiment: 'Negative', percentage: 7.53}
  ];

  const postureData = [
    {name: 'Want Partner Relationship', value: 24}, // 3 Vendor->Partner, 14 Partner->Partner, 7 Advisor->Partner
    {name: 'Want Advisor Relationship', value: 26}, // 10 Vendor->Advisor, 14 Advisor->Advisor, 2 Partner->Advisor
    {name: 'Want Vendor Relationship', value: 1}    // 1 Advisor->Vendor
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  const SENTIMENT_COLORS = ['#4CAF50', '#FFC107', '#F44336'];

  return (
    <div className="p-4 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Gaetani Real Estate</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Client Satisfaction Analysis</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Executive Summary</h3>
          <p className="mb-2">
            The analysis of 51 client survey responses reveals strong overall satisfaction (8.7/10 average) with Gaetani Real Estate services, with highest ratings for "Making Things Right When Wrong" (8.9/10) and "Ease of Working with Us" (8.9/10).
          </p>
          <p className="mb-2">
            Key improvement opportunities include enhancing communication about industry changes (7.8/10) and keeping clients informed of property management opportunities and risks (8.0/10).
          </p>
          <p>
            Portfolio managers Abe Araj, Noel Radcliffe, and David Alexander received the highest client satisfaction ratings, setting internal benchmarks for service excellence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Performing Portfolio Managers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={topManagersData}
              margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="score" fill="#4556AC" name="Satisfaction Score" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            Abe Araj leads with a 9.5/10 satisfaction score, followed closely by Noel Radcliffe and David Alexander.
            These top performers set internal benchmarks for client service excellence.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Service Metrics Ranked by Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={metricsData.slice(0, 7)}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[7, 10]} />
              <YAxis type="category" dataKey="metric" width={150} />
              <Tooltip />
              <Bar dataKey="score" fill="#82ca9d" name="Score" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            Industry knowledge communication and update frequency represent the greatest opportunities for service improvement, 
            though absolute scores remain strong across all dimensions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Comment Theme Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={themeData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="percentage"
                nameKey="theme"
                label={({theme, percentage}) => `${theme}: ${percentage}%`}
              >
                {themeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            Client comments focused mainly on communication quality (29.5%), service standards (29.5%), 
            and maintenance responsiveness (26.0%), highlighting these as key relationship drivers.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Comment Sentiment Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="percentage"
                nameKey="sentiment"
                label={({sentiment, percentage}) => `${sentiment}: ${percentage}%`}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[index % SENTIMENT_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            Client sentiment analysis shows predominantly neutral (50.7%) to positive (41.8%) comments,
            with only 7.5% expressing negative sentiment, indicating strong overall satisfaction.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Desired Client-Manager Relationship</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={postureData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({name, value}) => `${name}: ${value}`}
              >
                {postureData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            Most clients seek either an advisory (51%) or partnership (47%) relationship with Gaetani,
            suggesting opportunities to deepen client engagement beyond basic property management.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Key Strategic Insights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-700">
              <span className="font-medium">Communication Enhancement:</span> Develop structured industry updates and property-specific opportunity reviews to address lowest-scoring metrics.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Top Performer Practices:</span> Extract best practices from Abe Araj, Noel Radcliffe, and David Alexander to establish internal training standards.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Relationship Depth:</span> Develop service packages that support transition from vendor to advisor/partner relationships with clients seeking deeper engagement.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Service Consistency:</span> Address performance variability between portfolio managers to ensure consistent client experience.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Growth Opportunity:</span> Leverage high recommendation scores (8.65/10) through strategic referral programs to drive new client acquisition.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Actionable Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">Near-Term Actions (30-60 days)</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Implement quarterly industry update newsletter from senior leadership</li>
              <li>Create portfolio manager training program based on top performer best practices</li>
              <li>Develop formal process for multi-vendor bidding on projects over $10,000</li>
              <li>Establish consistent property update frequency standards across all managers</li>
            </ol>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">Medium-Term Initiatives (3-6 months)</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Launch client education program on rent control laws and capital expenditure recapture</li>
              <li>Develop differentiated service tiers aligned with vendor/advisor/partner relationship models</li>
              <li>Create client communication preference system to tailor outreach frequency and medium</li>
              <li>Implement structured referral program leveraging high client satisfaction</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600 italic">
            This analysis is based on 51 client survey responses collected in May 2025. Response rate was 70.8% of all clients surveyed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaetaniClientSurveyAnalysis;
