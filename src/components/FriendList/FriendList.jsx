import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((item) => (
        <li className={css.card} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
