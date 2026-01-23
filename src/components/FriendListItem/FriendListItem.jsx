import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline = "offline" }) => {
  return (
    <div className={css.card}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: isOnline === true,
          [css.offline]: isOnline === false,
        })}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
