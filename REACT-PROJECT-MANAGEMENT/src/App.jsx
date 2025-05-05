import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="flex flex-row h-screen">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
