import Profile from "../components/Profile"
import Todayschedule from "../components/Todayschedule"
import Weekly from "../components/Weekly"

function Home() {
    return (
        <div className="w-screen xl:h-screen md:flex overflow-hidden">
            <Todayschedule />
            <Weekly />
            <Profile />
        </div>
    )
}

export default Home