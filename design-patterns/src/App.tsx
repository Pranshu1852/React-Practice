import { Card } from "./components/Card";
import { CardDescription } from "./components/CardDescription";
import { CardFooter } from "./components/CardFooter";
import { CardHeader } from "./components/CardHeader";
import { CardTitle } from "./components/CardTitle";

function App() {
  return (
    <div>
      <h2>Design Patterns</h2>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <button>Click</button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
