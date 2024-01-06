import { state, stateWithStorage } from "@/jotai/state";
import { useAtom } from "jotai";

const Home = () => {
  const [exampleState, setExampleState] = useAtom(state);
  const [storageState, setStorageState] = useAtom(stateWithStorage);

  return (
      <center className="mt-[30vh] text-3xl">
        <h1>Jotai Testing</h1>
        <div>
          <p>Example state: {exampleState}</p>
          <input
            className="border"
            type="text"
            onChange={(e) => setExampleState(e.target.value)}
          />
          <p>Storage state: {storageState}</p>
          <input
            className="border"
            type="text"
            onChange={(e) => setStorageState(e.target.value)}
          />
        </div>
      </center>
  );
};

export default Home;
