import { PieChart } from '@mui/x-charts/PieChart';
import { getReports } from "../../../service/mock/api/reportsService";
import { FormControl, InputLabel, Select, MenuItem, type SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import getActions from '../../../service/mock/api/actionsService';
import { getActivities } from '../../../service/mock/api/activitiesService';
import { getRecords } from '../../../service/mock/api/recordsService';
import getUsers from '../../../service/mock/api/userService';
import GraphItemContainer from './GraphItemContainer';

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
  const [graphPeriod, setGraphPeriod] = useState('');
  const [dataGraph, setDataGraph] = useState(reportTypesGraph);


  const handleChangeDataVisualization = (event: SelectChangeEvent) => {
    setGraphType(event.target.value as string);
    switch (graphType) {
      case "reportTypes":
        setDataGraph(reportTypesGraph)
        break;
      case "actionTypes":
        setDataGraph(actionTypesGraph)
        break;
      case "activityTypes":
        setDataGraph(activityTypesGraph)
        break;
      case "recordCategories":
        setDataGraph(recordCategoriesGraph)
        break;
      case "reportStatus":
        setDataGraph(reportStatusGraph)
        break;
      case "userStatus":
        setDataGraph(userStatusGraph)
        break;
      case "userRoles":
        setDataGraph(userRolesGraph)
        break;
      default:
        setDataGraph(reportTypesGraph)
    }
  };

  const handleChangePeriod = (event: SelectChangeEvent) => {
    setGraphPeriod(event.target.value as string);
  };

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className={`flex flex-col gap-2 h-full`}>
      <div className='flex justify-between w-full'>
        <p>View Data</p>
        <div className='flex justify-evenly gap-4 w-3/4'>
          <FormControl className='w-full'>
            <InputLabel id="data-visualization-label">Graph data visualization</InputLabel>
            <Select
              labelId="data-visualization"
              id="data-visualization"
              value={graphType}
              label="Graph data visualization"
              onChange={handleChangeDataVisualization}
            >
              <MenuItem value={"reportTypes"}>Report types</MenuItem>
              <MenuItem value={"actionTypes"}>Action types</MenuItem>
              <MenuItem value={"activityTypes"}>Activity types</MenuItem>
              <MenuItem value={"recordCategories"}>Record Categories</MenuItem>
              <MenuItem value={"reportStatus"}>Report Status</MenuItem>
              <MenuItem value={"userStatus"}>User Status</MenuItem>
              <MenuItem value={"userRoles"}>User Roles</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='w-1/3'>
            <InputLabel id="data-period-label">Data Period</InputLabel>
            <Select
              labelId="data-period"
              id="data-period"
              value={graphPeriod}
              label="Data Period"
              onChange={handleChangePeriod}
            >
              <MenuItem value={"today"}>Today</MenuItem>
              <MenuItem value={"week"}>This week</MenuItem>
              <MenuItem value={"month"}>This month</MenuItem>
              <MenuItem value={"year"}>This year</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='h-full w-full flex items-center'>
        <div className='w-full flex'>
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
        <div className='w-full flex flex-col gap-2'>
          {dataGraph.map((item) => (
            <div>
              <GraphItemContainer item={item} total={dataGraph.reduce((accumulator, currentValue) => accumulator += currentValue.value, 0)} />
            </div>
          ))}
        </div>

      </div>

      <div>
        <p>quick actions on graph (change parameter, see other characteristics</p>
        {/* Maybe you select only the type (report, action, etc.) and then you select here for type, category, etc. */}
      </div>
    </div>
  );
}

/*
Other notes: 
- When hovering right menu, make the respective data hover too
*/
