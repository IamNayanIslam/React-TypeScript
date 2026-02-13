import User from "./Components/User";

function App() {
  const user1 = {
    name: "Nayan Islam",
    age: 28,
    isActive: true,
    langs: ["Bengali", "English", "Hindi"],
  };

  const user2 = {
    name: "Hiya Akter",
    age: 23,
    isActive: false,
    langs: ["Bengali", "English"],
  };

  return (
    <>
      <div>
        <h1 className="text-center my-4 text-2xl font-bold">User Management</h1>
        <div className="flex flex-col items-center">
          <User user={user1} />
          <User user={user2} />
        </div>
        {/* <User
          name="Hiya Akter"
          age={23}
          isActive={false}
          langs={["Bengali", "English"]}
        /> */}
      </div>
    </>
  );
}

export default App;
