import { PieChart } from "@mui/x-charts/PieChart";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

import { getReports } from "../../service/mock/api/reportsService";
import getActions from "../../service/mock/api/actionsService";
import { getActivities } from "../../service/mock/api/activitiesService";
import { getRecords } from "../../service/mock/api/recordsService";
import getUsers from "../../service/mock/api/userService";

import GraphItemContainer from "./GraphItemContainer";
import { Role } from "../../data/class/enum/Role";

type GraphDataItem = {
  label: string;
  value: number;
  color: string;
};

export default function ViewDataHomeContainer() {
  const [graphType, setGraphType] = useState("reportTypes");
  const [graphPeriod, setGraphPeriod] = useState("");

  const reports = getReports();
  const actions = getActions();
  const activities = getActivities();
  const records = getRecords();
  const users = getUsers();

  const reportTypesGraph: GraphDataItem[] = [
    {
      label: "Monthly",
      value: reports.filter((report) => report.type === 1).length,
      color: "#0088FE",
    },
    {
      label: "Users",
      value: reports.filter((report) => report.type === 2).length,
      color: "#00C49F",
    },
    {
      label: "Records",
      value: reports.filter((report) => report.type === 3).length,
      color: "#FF8042",
    },
    {
      label: "Financial",
      value: reports.filter((report) => report.type === 4).length,
      color: "#FFBB28",
    },
    {
      label: "Activity",
      value: reports.filter((report) => report.type === 5).length,
      color: "#BD15CC",
    },
  ];

  const actionTypesGraph: GraphDataItem[] = [
    {
      label: "Create",
      value: actions.filter((action) => action.action === 1).length,
      color: "#00C49F",
    },
    {
      label: "Update",
      value: actions.filter((action) => action.action === 2).length,
      color: "#1667FF",
    },
    {
      label: "Delete",
      value: actions.filter((action) => action.action === 3).length,
      color: "#FF6A6A",
    },
    {
      label: "Export",
      value: actions.filter((action) => action.action === 4).length,
      color: "#3DE0FD",
    },
    {
      label: "Login",
      value: actions.filter((action) => action.action === 5).length,
      color: "#369200",
    },
    {
      label: "Logout",
      value: actions.filter((action) => action.action === 6).length,
      color: "#E47900",
    },
    {
      label: "Generate Report",
      value: actions.filter((action) => action.action === 7).length,
      color: "#BD15CC",
    },
    {
      label: "Change Permission",
      value: actions.filter((action) => action.action === 8).length,
      color: "#3FFF2E",
    },
  ];

  const activityTypesGraph: GraphDataItem[] = [
    {
      label: "User Created",
      value: activities.filter((activity) => activity.type === 1).length,
      color: "#00C49F",
    },
    {
      label: "User Updated",
      value: activities.filter((activity) => activity.type === 2).length,
      color: "#1667FF",
    },
    {
      label: "Report Generated",
      value: activities.filter((activity) => activity.type === 3).length,
      color: "#FF6A6A",
    },
    {
      label: "Record Created",
      value: activities.filter((activity) => activity.type === 4).length,
      color: "#3DE0FD",
    },
    {
      label: "Permission Changed",
      value: activities.filter((activity) => activity.type === 5).length,
      color: "#369200",
    },
    {
      label: "Login",
      value: activities.filter((activity) => activity.type === 6).length,
      color: "#E47900",
    },
    {
      label: "Logout",
      value: activities.filter((activity) => activity.type === 7).length,
      color: "#BD15CC",
    },
    {
      label: "System Alert",
      value: activities.filter((activity) => activity.type === 8).length,
      color: "#3FFF2E",
    },
  ];

  const recordCategoriesGraph: GraphDataItem[] = [
    {
      label: "Finance",
      value: records.filter((record) => record.category === 1).length,
      color: "#00C49F",
    },
    {
      label: "Inventory",
      value: records.filter((record) => record.category === 2).length,
      color: "#1667FF",
    },
    {
      label: "Customer",
      value: records.filter((record) => record.category === 3).length,
      color: "#FF6A6A",
    },
    {
      label: "Operation",
      value: records.filter((record) => record.category === 4).length,
      color: "#3DE0FD",
    },
    {
      label: "Internal",
      value: records.filter((record) => record.category === 5).length,
      color: "#369200",
    },
  ];

  const reportStatusGraph: GraphDataItem[] = [
    {
      label: "Generated",
      value: reports.filter((report) => report.status === 1).length,
      color: "#00C49F",
    },
    {
      label: "Processing",
      value: reports.filter((report) => report.status === 2).length,
      color: "#1667FF",
    },
    {
      label: "Failed",
      value: reports.filter((report) => report.status === 3).length,
      color: "#FF6A6A",
    },
    {
      label: "Archived",
      value: reports.filter((report) => report.status === 4).length,
      color: "#3DE0FD",
    },
  ];

  const userStatusGraph: GraphDataItem[] = [
    {
      label: "Inactive",
      value: users.filter((user) => user.status === 0).length,
      color: "#00C49F",
    },
    {
      label: "Active",
      value: users.filter((user) => user.status === 1).length,
      color: "#1667FF",
    },
    {
      label: "Pending",
      value: users.filter((user) => user.status === 2).length,
      color: "#FF6A6A",
    },
    {
      label: "Blocked",
      value: users.filter((user) => user.status === 3).length,
      color: "#3DE0FD",
    },
  ];

  const userRolesGraph: GraphDataItem[] = [
    {
      label: "User",
      value: users.filter((user) => user.role === Role.user).length,
      color: "#00C49F",
    },
    {
      label: "Manager",
      value: users.filter((user) => user.role === Role.manager).length,
      color: "#1667FF",
    },
    {
      label: "Analyst",
      value: users.filter((user) => user.role === Role.analyst).length,
      color: "#FF6A6A",
    },
    {
      label: "Admin",
      value: users.filter((user) => user.role === Role.admin).length,
      color: "#3DE0FD",
    },
  ];

  const graphDataByType: Record<string, GraphDataItem[]> = {
    reportTypes: reportTypesGraph,
    actionTypes: actionTypesGraph,
    activityTypes: activityTypesGraph,
    recordCategories: recordCategoriesGraph,
    reportStatus: reportStatusGraph,
    userStatus: userStatusGraph,
    userRoles: userRolesGraph,
  };

  const dataGraph = graphDataByType[graphType] ?? reportTypesGraph;

  const totalGraphValue = dataGraph.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0,
  );

  const handleChangeGraphType = (event: SelectChangeEvent) => {
    setGraphType(event.target.value);
  };

  const handleChangePeriod = (event: SelectChangeEvent) => {
    setGraphPeriod(event.target.value);
  };

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex w-full justify-between">
        <p>View Data</p>

        <div className="flex w-3/4 justify-evenly gap-4">
          <FormControl className="w-full">
            <InputLabel id="data-visualization-label">
              Graph data visualization
            </InputLabel>

            <Select
              labelId="data-visualization-label"
              id="data-visualization"
              value={graphType}
              label="Graph data visualization"
              onChange={handleChangeGraphType}
            >
              <MenuItem value="reportTypes">Report types</MenuItem>
              <MenuItem value="actionTypes">Action types</MenuItem>
              <MenuItem value="activityTypes">Activity types</MenuItem>
              <MenuItem value="recordCategories">Record categories</MenuItem>
              <MenuItem value="reportStatus">Report status</MenuItem>
              <MenuItem value="userStatus">User status</MenuItem>
              <MenuItem value="userRoles">User roles</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="w-1/3">
            <InputLabel id="data-period-label">Data Period</InputLabel>

            <Select
              labelId="data-period-label"
              id="data-period"
              value={graphPeriod}
              label="Data Period"
              onChange={handleChangePeriod}
            >
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="week">This week</MenuItem>
              <MenuItem value="month">This month</MenuItem>
              <MenuItem value="year">This year</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex h-full w-full items-center">
        <div className="flex w-full">
          <PieChart
            series={[
              {
                data: dataGraph,
                innerRadius: 50,
                outerRadius: 100,
                paddingAngle: 3,
                cornerRadius: 8,
                startAngle: 0,
                endAngle: 360,
                cx: 95,
                cy: 95,
              },
            ]}
            {...settings}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          {dataGraph.map((item) => (
            <GraphItemContainer
              key={item.label}
              item={item}
              total={totalGraphValue}
            />
          ))}
        </div>
      </div>

      <div>
        <p>
          quick actions on graph (change parameter, see other characteristics)
        </p>
      </div>
    </div>
  );
}