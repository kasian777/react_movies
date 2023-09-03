import {Link} from "react-router-dom";
import './user_info.css';

export default function UserInfo() {
    return (
        <div className="UserInfo">
            <Link to={'/User/'}><h4 className={'user_inf'}>John Biggety</h4></Link>
        </div>
    );
}
