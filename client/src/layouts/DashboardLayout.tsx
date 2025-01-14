import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default DashboardLayout