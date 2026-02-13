import User from "./User";

type UsersPropsType = {
  users: {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    langs: string[];
  }[];
};

const Users = ({ users }: UsersPropsType) => {
  return (
    <div className="flex flex-col items-center">
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
