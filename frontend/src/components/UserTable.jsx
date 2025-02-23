import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = (users || []).slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mt-6 text-md">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Last Login</th>
            <th className="border p-2">Engagement Score</th>
            <th className="border p-2">Retention Category</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                {new Date(user.lastLogin).toLocaleDateString()}
              </td>
              <td className="border p-2 text-center">{user.engagementScore}</td>
              <td className="border p-2">{user.retentionCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 sm:gap-[50px] mt-4">
        <div className="flex items-center text-sm sm:text-base md:text-lg">
          <label className="mr-2">Users per page:</label>
          <select
            className="border p-1"
            value={usersPerPage}
            onChange={(e) => {
              setUsersPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5} className="bg-blue-400">5</option>
            <option value={10} className="bg-blue-400">10</option>
            <option value={25} className="bg-blue-400">25</option>
          </select>
        </div>

        <div className="flex items-center gap-4 text-sm sm:text-base md:text-lg">
          <FaArrowAltCircleLeft
            className={`cursor-pointer text-xl sm:text-2xl ${currentPage === 1 ? 'text-gray-400' : 'text-[#82ca9d]'}`}
            onClick={handlePrev}
          />
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <FaArrowAltCircleRight
            className={`cursor-pointer text-xl sm:text-2xl ${currentPage === totalPages ? 'text-gray-400' : 'text-[#82ca9d]'}`}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
