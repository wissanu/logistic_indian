import React from "react";

// Admin Imports
import DataTables from "views/admin/tables";
import MarginView from "views/admin/marginsummary";
import AgeingReceivableView from "views/admin/ageingreceivable";
import AgeingPayableView from "views/admin/ageingpayable";
import JobProfitabilityView from "views/admin/jobprofitability";
import DashboardCommercialView from "views/admin/dashboardcommercial";
import DashboardFinanceView from "views/admin/dashboardfinancial";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import { MdViewModule } from "react-icons/md";

const routes = [
  {
    name: "Dashboard (Commercial)",
    layout: "/admin",
    path: "commercial_dashboard",
    icon: <MdViewModule className="h-6 w-6" />,
    // component: <MainDashboard />,
    component: <DashboardCommercialView />,
  },
  {
    name: "Dashboard (Finance)",
    layout: "/admin",
    path: "financial_dashboard",
    icon: <MdViewModule className="h-6 w-6" />,
    component: <DashboardFinanceView />,
    secondary: true,
  },
  {
    name: "Margin Summary",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "margin-summary",
    component: <MarginView />,
  },
  {
    name: "Ageing Receivable",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "ageing-receivable",
    component: <AgeingReceivableView />,
  },
  {
    name: "Ageing Payable",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "ageing-payable",
    component: <AgeingPayableView />,
  },
  {
    name: "Job Profitability",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "job-profitability",
    component: <JobProfitabilityView />,
  },
];
export default routes;
