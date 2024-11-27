import GSAPFrom from "./components/gsap-from"
import GSAPFromTo from "./components/gsap-from-to"
import GSAPScrollTrigger from "./components/gsap-scrolltrigger"
import GSAPTimeline from "./components/gsap-timeline"
import GSAPTo from "./components/gsap-to"

function App() {

  return (
    <div>
      <div className="h-screen">
      <GSAPTo/>
      <GSAPFrom/>
      <GSAPFromTo/>
      <GSAPTimeline/>
      </div>
      <div className="h-screen">
      <GSAPScrollTrigger/>
      </div>
    </div>
  )
}

export default App
