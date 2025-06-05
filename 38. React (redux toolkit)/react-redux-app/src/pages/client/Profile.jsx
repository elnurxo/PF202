import { useSelector } from "react-redux";
import moment from "moment";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="py-10 px-4 flex justify-center">
      <div className="bg-gray-100 rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.profileImage}
            alt={user?.fullName}
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-600"
          />
          <h2 className="text-2xl font-bold text-blue-600">{user?.fullName}</h2>
          <p className="text-sm text-gray-500">{user?.role.toUpperCase()}</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Email:</span>
            <span className="font-medium">{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone:</span>
            <span className="font-medium">{user?.phone}</span>
          </div>
          <div className="flex justify-between">
            <span>Balance:</span>
            <span className="font-medium text-green-600">${user?.balance}</span>
          </div>
          <div className="flex justify-between">
            <span>Registered At:</span>
            <span className="font-medium">{moment(user?.registeredAt).startOf('day').fromNow()}</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
