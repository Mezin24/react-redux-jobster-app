import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarChatComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip allowDecimals={false} />
        <Bar dataKey='count' fill='#2c6abc' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChatComponent;
