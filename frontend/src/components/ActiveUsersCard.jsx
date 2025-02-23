const ActiveUsersCard = ({ activeUsers }) => (
  <div className="p-4 border rounded-lg border-[#19508b] flex justify-evenly items-center">
    <h2 className="text-[16px] md:text-xl lg:text-2xl font-bold text-[#82ca9d]">Active Users</h2>
    <p className="text-lg md:text-xl lg:text-2xl">{activeUsers}</p>
  </div>
);

export default ActiveUsersCard;
