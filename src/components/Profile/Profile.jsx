import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.profile}>
      <div>
        <img className={style.avatar} src={image} alt={name} />
        <p className={style.name}>{name}</p>
        <p className={style.text}>{tag}</p>
        <p className={style.text}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stat}>
          <span className={style.label}>Followers</span>
          <span className={style.value}>{stats.followers}</span>
        </li>
        <li className={style.stat}>
          <span className={style.label}>Views</span>
          <span className={style.value}>{stats.views}</span>
        </li>
        <li className={style.stat}>
          <span className={style.label}>Likes</span>
          <span className={style.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
