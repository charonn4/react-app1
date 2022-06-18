import style from './Users.module.css'
import * as axios from "axios";
import defUser from '../../../assets/images/defUser.png'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })

            // props.setUsers([
            //     {
            //         id: 1,
            //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPhc-UqiuZfT4V37eO5MVVvSI3D_tUG5dIQ&usqp=CAU',
            //         followed: false,
            //         fullName: "Kate",
            //         status: 'i can help',
            //         location: {city: 'Almaty', country: 'KZ'}
            //     }
            // ])
        }
    }

    return (
        <div className={style.usersBlock}>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => <div className={style.userInfo} key={u.id}>
                    <div>
                        <div className={style.imgWrap}>
                            <img src={u.photos.small != null ? u.photos.small : defUser} alt=""/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users