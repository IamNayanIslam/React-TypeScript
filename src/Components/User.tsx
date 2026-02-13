type UserProps = {
  user: {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    langs: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div className="border border-gray-600 rounded-md mt-4 w-1/4 py-4">
      <h2 className="text-center font-bold text-xl">{user.name}</h2>
      <p className="text-center">
        <span
          className={`inline-block border border-transparent h-[10px] w-[10px] rounded-full ${user.isActive ? "bg-green-600" : "bg-red-600"} `}
        ></span>{" "}
        {user.name} is {user.age} years old.
      </p>
      <p className="text-center">
        Speaks: {user.langs && <span>{user.langs.join(", ")} </span>}
      </p>
    </div>
  );
};

export default User;
