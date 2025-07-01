import { Card } from "./components/Card";
import { CardDescription } from "./components/CardDescription";
import { CardFooter } from "./components/CardFooter";
import { CardHeader } from "./components/CardHeader";
import { CardTitle } from "./components/CardTitle";
import { TabContent, Tabs, TabsList, TabTrigger } from "./components/Tab/Tab";

function App() {
  function handleChange(val: string) {
    console.log(val);
  }

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
      <Tabs defaultValue="Tab1" onChange={handleChange}>
        <TabsList>
          <TabTrigger value="Tab1">One</TabTrigger>
          <TabTrigger value="Tab2">Two</TabTrigger>
          <TabTrigger value="Tab3">Three</TabTrigger>
        </TabsList>
        <TabContent value="Tab1">First Tab</TabContent>
        <TabContent value="Tab2">Second Tab</TabContent>
        <TabContent value="Tab3">Third Tab</TabContent>
      </Tabs>
    </div>
  );
}

export default App;
