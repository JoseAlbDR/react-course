import Bill from "./Bill";
import Service from "./Service";
import Pay from "./Pay";
import Reset from "./Reset";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <Service tip={myTip} onSetTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Service>
      {bill ? <Pay bill={bill} myTip={myTip} friendTip={friendTip} /> : ""}
      {bill ? (
        <Reset
          onSetBill={setBill}
          onSetMine={setMyTip}
          onSetFriend={setFriendTip}
        />
      ) : (
        ""
      )}
    </div>
  );
}
