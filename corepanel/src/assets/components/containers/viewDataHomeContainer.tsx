import { PieChart } from '@mui/x-charts/PieChart';
import { getReports } from "../../../service/mock/api/reportsService";
import { FormControl, InputLabel, Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import getActions from '../../../service/mock/api/actionsService';
import { getActivities } from '../../../service/mock/api/activitiesService';
import { getRecords } from '../../../service/mock/api/recordsService';
import getUsers from '../../../service/mock/api/userService';

export default function ViewDataHomeContainer() {
  const reports = getReports();
  const actions = getActions();
  const activities = getActivities();
  const records = getRecords();
  const users = getUsers();

  // REPORT TYPES
  const reportTypesGraph = [
    { label: 'Generated', value: reports.filter(x => x.status == 1).length, color: '#0088FE' },
    { label: 'Processing', value: reports.filter(x => x.status == 2).length, color: '#00C49F' },
    { label: 'Failed', value: reports.filter(x => x.status == 3).length, color: '#FF8042' },
    { label: 'Archived', value: reports.filter(x => x.status == 4).length, color: '#FFBB28' },
  ];

  // ACTION TYPES
  const actionTypesGraph = [
    { label: 'Create', value: actions.filter(x => x.action == 1).length, color: '#00C49F' },
    { label: 'Update', value: actions.filter(x => x.action == 2).length, color: '#1667ff' },
    { label: 'Delete', value: actions.filter(x => x.action == 3).length, color: '#ff6a6a' },
    { label: 'Export', value: actions.filter(x => x.action == 4).length, color: '#3de0fd' },
    { label: 'Login', value: actions.filter(x => x.action == 5).length, color: '#369200' },
    { label: 'Logout', value: actions.filter(x => x.action == 6).length, color: '#e47900' },
    { label: 'Generate Report', value: actions.filter(x => x.action == 7).length, color: '#bd15cc' },
    { label: 'Change Permission', value: actions.filter(x => x.action == 8).length, color: '#3fff2e' },
  ];

  // ACTIVITY TYPES
  const activityTypesGraph = [
    { label: 'Create', value: activities.filter(x => x.type == 1).length, color: '#00C49F' },
    { label: 'Update', value: activities.filter(x => x.type == 2).length, color: '#1667ff' },
    { label: 'Delete', value: activities.filter(x => x.type == 3).length, color: '#ff6a6a' },
    { label: 'Export', value: activities.filter(x => x.type == 4).length, color: '#3de0fd' },
    { label: 'Login', value: activities.filter(x => x.type == 5).length, color: '#369200' },
    { label: 'Logout', value: activities.filter(x => x.type == 6).length, color: '#e47900' },
    { label: 'Generate Report', value: activities.filter(x => x.type == 7).length, color: '#bd15cc' },
    { label: 'Change Permission', value: activities.filter(x => x.type == 8).length, color: '#3fff2e' },
  ];


  // RECORD CATEGORIES
  const recordCategoriesGraph = [
    { label: 'Finance', value: records.filter(x => x.category == 1).length, color: '#00C49F' },
    { label: 'Inventory', value: records.filter(x => x.category == 2).length, color: '#1667ff' },
    { label: 'Customer', value: records.filter(x => x.category == 3).length, color: '#ff6a6a' },
    { label: 'Operation', value: records.filter(x => x.category == 4).length, color: '#3de0fd' },
    { label: 'Internal', value: records.filter(x => x.category == 5).length, color: '#369200' },
  ];


  // REPORT STATUS
  const reportStatusGraph = [
    { label: 'Generated', value: reports.filter(x => x.status == 1).length, color: '#00C49F' },
    { label: 'Processing', value: records.filter(x => x.status == 2).length, color: '#1667ff' },
    { label: 'Failed', value: records.filter(x => x.status == 3).length, color: '#ff6a6a' },
    { label: 'Archived', value: records.filter(x => x.status == 4).length, color: '#3de0fd' },
  ];

  // USER STATUS
  const userStatusGraph = [
    { label: 'Inactive', value: users.filter(x => x.status == 0).length, color: '#00C49F' },
    { label: 'Active', value: users.filter(x => x.status == 1).length, color: '#1667ff' },
    { label: 'Pending', value: users.filter(x => x.status == 2).length, color: '#ff6a6a' },
    { label: 'Blocked', value: users.filter(x => x.status == 3).length, color: '#3de0fd' },
  ];

  // USER ROLES
  const userRolesGraph = [
    { label: 'User', value: users.filter(x => x.role == 1).length, color: '#00C49F' },
    { label: 'Manager', value: users.filter(x => x.role == 7).length, color: '#1667ff' },
    { label: 'Analyst', value: users.filter(x => x.role == 8).length, color: '#ff6a6a' },
    { label: 'Admin', value: users.filter(x => x.role == 9).length, color: '#3de0fd' },
  ];

  const [graphType, setGraphType] = useState('');
  const [dataGraph, setDataGraph] = useState(reportTypesGraph);


  const handleChange = (event: SelectChangeEvent) => {
    setGraphType(event.target.value as string);

    switch (graphType) {
      case "1":
        setDataGraph(reportTypesGraph)
        break;
      case "2":
        setDataGraph(actionTypesGraph)
        break;
      case "3":
        setDataGraph(activityTypesGraph)
        break;
      case "4":
        setDataGraph(recordCategoriesGraph)
        break;
      case "5":
        setDataGraph(reportStatusGraph)
        break;
      case "6":
        setDataGraph(userStatusGraph)
        break;
      case "7":
        break;
        setDataGraph(userRolesGraph)
      default:
        setDataGraph(reportTypesGraph)
    }
  };

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className={`flex gap-2`}>
      <FormControl fullWidth>
        <InputLabel id="data-visualization-label">Data visualization</InputLabel>
        <Select
          labelId="data-visualization"
          id="data-visualization"
          value={graphType}
          label="Data visualization"
          onChange={handleChange}
        >
          <MenuItem value={1}>Report types</MenuItem>
          <MenuItem value={2}>Action types</MenuItem>
          <MenuItem value={3}>Activity types</MenuItem>
          <MenuItem value={4}>Record Categories</MenuItem>
          <MenuItem value={5}>Report Status</MenuItem>
          <MenuItem value={6}>User Status</MenuItem>
          <MenuItem value={7}>User Roles</MenuItem>
        </Select>
      </FormControl>
      <PieChart series={[
        {
          data: [...dataGraph],
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
