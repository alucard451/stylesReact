import CardContainer from "@/components/CardContainer";
import Card from "@/components/CardContainer";
import Image from "next/image";

const cardItems = {
  oneElement: [{ icon: "1", time: "11:25", text: "Aprende forex sg gsg" }],
  twoElements: [{ icon: "1", time: "11:25", text: "Aprende forex sg " }, { icon: "1", time: "11:25", text: "Aprende forex" }],
  threeElements: [{ icon: "1", time: "11:25", text: "Aprende forex  sg" }, { icon: "1", time: "11:25", text: "Aprende forex" }, { icon: "1", time: "11:25", text: "Aprende forex" }],

}

export default function Home() {

  return (
    <div>
      <h1>Card component</h1>
      <div>
        <CardContainer items={cardItems.oneElement} />
        <CardContainer items={cardItems.twoElements} />
        <CardContainer items={cardItems.threeElements} />

      </div>
    </div>
  );
}
