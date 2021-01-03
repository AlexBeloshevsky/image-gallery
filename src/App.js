import { ImageGalleryContextProvider } from "./context/imageGalleryContext";
import { Home } from "./pages";

function App() {
  return (
    <ImageGalleryContextProvider>
      <div className="App">
        <Home />
      </div>
    </ImageGalleryContextProvider>
  );
}

export default App;
