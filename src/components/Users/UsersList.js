import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          // 처음 이 상태일 때 map관련 에러가 뜨는데, 그건 현재 상황에서 users가 배열로(map은 배열에만 사용할 수 있음.) 정의되지 않았기 때문이다. App.js컴포넌트의 UsersList에 users props에 ={[]}로 빈 배열을 추가하면 해결됨
          <li key={user.id}>
            {/* li에 있는 모든 자식들은 고유한 key props가 있어야만 한다 */}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
