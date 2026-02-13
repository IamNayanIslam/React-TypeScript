// import Users from "./Components/Users";

import Button from "./Components/Button";
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
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center my-4 text-2xl font-bold">User Management</h1>
        <DataFetch status="success" />
        <Button
          buttonStyle={{
            hoverBg: "hover:bg-green-600",
            hoverText: "hover:text-white",
            text: "text-green-600",
            border: "border-green-600",
          }}
        >
          Hello World
        </Button>
        {/* <Button>Blue Button</Button> */}
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
