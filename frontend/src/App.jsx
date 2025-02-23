import React, { useEffect, useState } from "react";
import mixpanel from "./services/mixpanel";
import ActiveUsersCard from "./components/ActiveUsersCard";
import RetentionRateCard from "./components/RetentionRateCard";
import UserTable from "./components/UserTable";
import EngagementChart from "./components/EngagementChart";
import UserSegmentationChart from "./components/UserSegmentationChart";
import AIInsights from "./components/AIInsights";
import AtRiskUsersList from "./components/AtRiskUsersList";
import AddUserForm from "./components/AddUserForm";
import BubbleChart from "./components/BubbleChart";
import HeatmapChart from "./components/HeatmapChart";
import { getUsers, getMetrics, getAIInsights, addUser } from "./services/api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [insights, setInsights] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const fetchData = async () => {
    const usersData = await getUsers();
    const metricsData = await getMetrics();
    const insightsData = await getAIInsights();

    setUsers(usersData);
    setMetrics(metricsData);
    setInsights(insightsData);

    mixpanel.track("Dashboard Loaded");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddUser = async (newUser) => {
    await addUser(newUser);
    await fetchData();

    mixpanel.track("User Added", {
      name: newUser.name,
      email: newUser.email,
      retentionCategory: newUser.retentionCategory,
    });

    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#0A1929] text-[white] px-[#20%]">
      {/* Navigation */}
      <nav className="bg-[#05192f] border-b border-[#1E4976] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="sm:hidden text-[16px] font-bold text-[#66B2FF]">
              Dashboard
            </h1>
            <h1 className=" hidden sm:block text-2xl font-bold text-[#66B2FF]">
              Customer Engagement Dashboard
            </h1>
            <button
              className="px-4 py-2 bg-[#82ca9d] text-black font-bold rounded-lg
                       transition-colors duration-200 focus:outline-none focus:ring-2 
                       focus:ring-[#66B2FF] focus:ring-offset-2 focus:ring-offset-[#0A1929]
                       shadow-lg shadow-[#0072E5]/20 cursor-pointer"
              onClick={() => {
                setShowForm(true);
                mixpanel.track("Add User Button Clicked");
              }}
            >
              Add User
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActiveUsersCard activeUsers={metrics.activeUsers} />
          <RetentionRateCard retentionRate={metrics.retentionRate} />
        </div>

        {/* Primary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976] col-span-2">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
              User Engagement Trends
            </h2>
            <EngagementChart users={users} />
          </section>

          <section className="bg-[#05192f] rounded-xl shadow-xl border border-[#1E4976]">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4 pt-6 px-6">
              User Segmentation
            </h2>
            <UserSegmentationChart users={users} />
          </section>
        </div>

        {/* Secondary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976] col-span-2">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
              User Distribution
            </h2>
            <BubbleChart users={insights?.atRiskUsers || []} />
          </section>

          <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976] col-span-3">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
              Activity Heatmap
            </h2>
            <HeatmapChart users={users} />
          </section>
        </div>

        {/* User Overview Table */}
        <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976]">
          <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
            User Overview
          </h2>
          <UserTable users={users} />
        </section>

        {/* Insights and Risk Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976] col-span-1 w-[100%]">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
              AI-Powered Insights
            </h2>
            <AIInsights insights={insights} />
          </section>

          <section className="bg-[#05192f] rounded-xl shadow-xl p-6 border border-[#1E4976] col-span-4">
            <h2 className="text-xl font-semibold text-[#66B2FF] mb-4">
              At-Risk Users
            </h2>
            <AtRiskUsersList users={insights?.atRiskUsers || []} />
          </section>
        </div>

        {/* Add User Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
            <div
              className="relative top-20 mx-5 p-6 border border-[#1E4976] w-full max-w-md 
                          shadow-2xl rounded-xl bg-[#132F4C]"
            >
              <AddUserForm
                onSubmit={handleAddUser}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
