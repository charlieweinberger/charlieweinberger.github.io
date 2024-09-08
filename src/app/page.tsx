import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about'; // IDK why its erroring, this still works

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
}