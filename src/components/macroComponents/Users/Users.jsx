import style from './Users.module.css'
import Paginator from "../../microComponents/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users,  ...props}) => {
    return (
        <div className={style.usersBlock}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {
                users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}/>)
            }
        </div>
    )
}

export default Users