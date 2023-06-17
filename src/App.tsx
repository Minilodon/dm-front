import AppRoutes from "./mainLayout/AppRoutes/AppRoutes";
import TopBar from "./mainLayout/TopBar/TopBar";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <TopBar />
      <AppRoutes />
    </div>
  );
}

export default App;
