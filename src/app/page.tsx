import LiveCarStatus from "@/components/liveCarStatus/LiveCarStatus";
import Stats from "@/components/stats/Stats";
import './page.scss'

export default function Home() {
  return (
    <div className="dashboard">
      <Stats />
      <LiveCarStatus />
    </div>
  )
}
