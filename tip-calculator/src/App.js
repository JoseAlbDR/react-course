import Bill from "./Bill";
import Service from "./Service";
import Pay from "./Pay";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Service tip={myTip} setTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </Service>
      <Pay bill={bill} myTip={myTip} friendTip={friendTip} />
    </div>
  );
}
