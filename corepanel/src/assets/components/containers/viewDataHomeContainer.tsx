import { PieChart } from '@mui/x-charts/PieChart';

export default function ViewDataHomeContainer() {

  const data = [
    { label: 'Group A', value: 1, color: '#0088FE' },
    { label: 'Group B', value: 2, color: '#00C49F' },
    { label: 'Group C', value: 4, color: '#FFBB28' },
    { label: 'Group D', value: 8, color: '#FF8042' },
  ];

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <PieChart series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
        {...settings}
      />
    </div>
  );
}