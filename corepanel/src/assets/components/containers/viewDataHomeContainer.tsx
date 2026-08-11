import { PieChart } from '@mui/x-charts/PieChart';
import { getReports } from "../../../service/mock/api/reportsService";

export default function ViewDataHomeContainer() {
  const reports = getReports();

  const data = [
    { label: 'Generated', value: reports.filter(x => x.status == 1).length, color: '#0088FE' },
    { label: 'Processing', value: reports.filter(x => x.status == 2).length, color: '#00C49F' },
    { label: 'Failed', value: reports.filter(x => x.status == 3).length, color: '#FF8042' },
    { label: 'Archived', value: reports.filter(x => x.status == 4).length, color: '#FFBB28' },
  ];



  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <PieChart series={[
        {
          data: [...data],
          innerRadius: 50,
          outerRadius: 100,
          paddingAngle: 3,
          cornerRadius: 8,
          startAngle: 0,
          endAngle: 360,
          cx: 95,
          cy: 95,
        }
      ]}
        {...settings}
      />
    </div>
  );
}
