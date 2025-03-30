import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { 
  LineChart, Line, Tooltip as LineTooltip, XAxis, YAxis, CartesianGrid, Legend,
  BarChart, Bar, Tooltip as BarTooltip,
  PieChart, Pie, Cell, Tooltip as PieTooltip,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip as RadarTooltip 
} from 'recharts';

const { Content } = Layout;
const { Title, Text } = Typography;

// Dummy Weather Data
const temperatureData = [
  { name: 'Mon', temp: 22 },
  { name: 'Tue', temp: 25 },
  { name: 'Wed', temp: 28 },
  { name: 'Thu', temp: 26 },
  { name: 'Fri', temp: 24 },
];

const humidityData = [
  { name: 'Morning', value: 80 },
  { name: 'Afternoon', value: 60 },
  { name: 'Evening', value: 70 },
  { name: 'Night', value: 90 },
];

const windSpeedData = [
  { name: 'North', speed: 10 },
  { name: 'South', speed: 15 },
  { name: 'East', speed: 8 },
  { name: 'West', speed: 12 },
];

const rainfallData = [
  { subject: 'Jan', A: 30 },
  { subject: 'Feb', A: 40 },
  { subject: 'Mar', A: 60 },
  { subject: 'Apr', A: 50 },
  { subject: 'May', A: 70 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = ({ user }) => {
  return (
    <Content style={{ margin: '16px', padding: '16px', background: '#fff' }}>
      <Title level={2}>Weather Dashboard</Title>
      {user && <Text strong>Welcome, {user.full_name || user.username}!</Text>}

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {/* Temperature Line Chart */}
        <Col xs={24} md={12}>
          <Card title="Temperature (°C) Over Days" bordered={false}>
            <LineChart width={350} height={250} data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <LineTooltip />
              <Legend />
              <Line type="monotone" dataKey="temp" stroke="#ff7300" strokeWidth={2} />
            </LineChart>
          </Card>
        </Col>

        {/* Humidity Bar Chart */}
        <Col xs={24} md={12}>
          <Card title="Humidity Levels (%)" bordered={false}>
            <BarChart width={350} height={250} data={humidityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <BarTooltip />
              <Legend />
              <Bar dataKey="value" fill="#1890ff" />
            </BarChart>
          </Card>
        </Col>

        {/* Wind Speed Pie Chart */}
        <Col xs={24} md={12}>
          <Card title="Wind Speed (km/h)" bordered={false}>
            <PieChart width={350} height={250}>
              <Pie data={windSpeedData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {windSpeedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip />
              <Legend />
            </PieChart>
          </Card>
        </Col>

        {/* Rainfall Radar Chart */}
        <Col xs={24} md={12}>
          <Card title="Monthly Rainfall (mm)" bordered={false}>
            <RadarChart outerRadius={90} width={350} height={250} data={rainfallData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <RadarTooltip />
              <Legend />
              <Radar name="Rainfall" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
