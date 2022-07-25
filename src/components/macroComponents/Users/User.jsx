import style from './Users.module.css'
import defUser from "../../../assets/images/defUser.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow }) => {
    return (
            <div className={style.userInfo}>
                    <div>
                        <div className={style.imgWrap}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : defUser} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>

                                {unfollow(user.id)}}>unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                    follow(user.id)}}>follow</button>}

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)
}

export default User