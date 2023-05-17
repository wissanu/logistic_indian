import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import MarginView from "views/admin/marginsummary";
import DashboardCommercialView from "views/admin/dashboardcommercial";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdViewModule,
  MdLock,
} from "react-icons/md";

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
    component: <DashboardCommercialView />,
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
    component: <MarginView />,
  },
  {
    name: "Ageing Payable",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "ageing-payable",
    component: <MarginView />,
  },
  {
    name: "Job Profitability",
    layout: "/admin",
    icon: <MdViewModule className="h-6 w-6" />,
    path: "job-profitability",
    component: <MarginView />,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdViewModule className="h-6 w-6" />,
  //   component: <Profile />,
  // },

  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
