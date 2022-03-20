import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "빈칸이 있습니다",
        message: "빈칸을 채워주세요",
      });
      return;
    }
    if (+enteredAge < 1) {
      // useState도 ''를 사용해 문자열로 초기화했고, input에 입력 되는 값은 무조건 String이기 때문에 enteredAge를 숫자와 비교하는 건 React에서 불가능하다.(js에선 된다고함) 근데 앞에 +붙여주면 숫자 강제 변환해서 인식이 가능한 듯
      setError({
        title: "정상적인 숫자를 입력해주세요",
        message: "숫자가 1보다 작습니다",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
    // 동작 후 비워줄 때는 set..('')부터 핸들러에 추가하고, 비워야 할 input에 value={..}을 한다
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const buttonCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={buttonCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
