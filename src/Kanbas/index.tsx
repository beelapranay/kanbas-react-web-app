import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Labs from "../Labs";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import "./styles.css";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Calendar" element={<Calendar />} />
                    <Route path="/Inbox" element={<Inbox />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    )
}