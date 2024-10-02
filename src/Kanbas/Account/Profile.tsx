import { Link } from "react-router-dom";

// export default function Profile() {
//     return (
//         <div id="wd-profile-screen">
//             <h3>Profile</h3>
//             <input id="wd-username" value="alice" placeholder="username" /><br />
//             <input id="wd-password" value="123" placeholder="password"
//                    type="password" /><br />
//             <input id="wd-firstname" value="Alice" placeholder="First Name" /><br />
//             <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br />
//             <input id="wd-dob" value="2000-01-01" type="date" /><br />
//             <input id="wd-email" value="alice@wonderland.com" type="email" /><br />
// <select id="wd-role">
//     <option value="USER">USER</option>
//     <option value="ADMIN">ADMIN</option>
//     <option value="FACULTY">FACULTY</option>
//     <option value="STUDENT">STUDENT</option>
// </select><br />
//             <Link to="/Kanbas/Account/Signin">Sign out</Link>
//         </div>
//     );
// }

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="ms-4">
            <h1>Profile</h1>
            <input id="wd-username"
                value="alice"
                className="form-control mb-2" />
            <input id="wd-password"
                placeholder="password"
                value="123"
                className="form-control mb-2" />
            <input id="wd-firstname"
                value="Alice"
                className="form-control mb-2" />
            <input id="wd-lastname"
                value="Wonderland"
                className="form-control mb-2" />
            <input id="wd-date"
                type="date"
                className="form-control mb-2" />
            <input id="wd-email"
                type="email"
                value="alice@wonderland.com"
                className="form-control mb-2" />

            <select id="wd-role" className="form-control mb-2">
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="FACULTY">FACULTY</option>
                <option value="STUDENT">STUDENT</option>
            </select>

            <Link id="wd-signout-btn"
                to="/Kanbas/Account/Signin"
                className="btn btn-danger btn-primary w-100">
                Signout
            </Link>
        </div>
    );
}