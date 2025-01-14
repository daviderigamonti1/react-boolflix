import { GlobalProvider } from "./contexts/GlobalContext";

import HeaderComponent from "./components/HeaderComponent";

function App() {

  return (
    <>
      <GlobalProvider>
        <HeaderComponent />
      </GlobalProvider>
    </>
  )
}

export default App
