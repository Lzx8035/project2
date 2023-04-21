import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="user_dashboard">
        <div>This is your dashboard</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
