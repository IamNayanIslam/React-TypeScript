// import Users from "./Components/Users";

import DataFetch from "./Components/DataFetch";

function App() {
  /* const users = [
    {
      id: 101,
      name: "Nayan Islam",
      age: 28,
      isActive: true,
      langs: ["Bengali", "English", "Hindi"],
    },

    {
      id: 102,
      name: "Hiya Akter",
      age: 23,
      isActive: false,
      langs: ["Bengali", "English"],
    },
  ]; */

  return (
    <>
      <div>
        <h1 className="text-center my-4 text-2xl font-bold">User Management</h1>
        <DataFetch status="success" />
        {/* <Users users={users} /> */}
        {/* <User user={user1} />
          <User user={user2} /> */}
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
