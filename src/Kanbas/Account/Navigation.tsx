import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { pathname } = useLocation();

    return (
        <div id="wd-account-navigation">
            <div className="wd list-group fs-5 rounded-0">
                {links.map((link) => (
                    <NavLink
                        key={link}
                        to={`/Kanbas/Account/${link}`}
                        id={`wd-account-${link.toLowerCase()}-link`}
                        className="list-group-item text-danger border border-0"
                    >
                        {link}
                    </NavLink>
                ))}
                {currentUser && currentUser.role === "FACULTY" && (
                    <Link to={`/Kanbas/Account/Users`} className={`list-group-item text-danger border border-0 ${active("Users")}`}> Users </Link>)}
            </div>
        </div>
    );
}