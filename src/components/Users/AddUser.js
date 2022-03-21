import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // useRef를 사용하면 ref props를 사용할 수 있다.
  // 사용할 때 동일한 컴포넌트 내에 있는 jsx 요소에 넣는다

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // current는 저장된 값을 가진 객체임
    // e.target.value로 모든 키 입력을 받지 않고 마지막 값에만 엑세스할 수 있으므로 더 좋다, state를 대체할 수도 있다. 현재 enteredUsername === enteredName이고 enteredAge === enteredUserAge임
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "빈칸이 있습니다",
        message: "빈칸을 채워주세요",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      // useState도 ''를 사용해 문자열로 초기화했고, input에 입력 되는 값은 무조건 String이기 때문에 enteredAge를 숫자와 비교하는 건 React에서 불가능하다.(js에선 된다고함) 근데 앞에 +붙여주면 숫자 강제 변환해서 인식이 가능한 듯
      setError({
        title: "정상적인 숫자를 입력해주세요",
        message: "숫자가 1보다 작습니다",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredAge("");
    // setEnteredUsername("");
    // 동작 후 비워줄 때는 set..('')부터 핸들러에 추가하고, 비워야 할 input에 value={..}을 한다
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const buttonCloseHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
// ★중요
// ref를 사용하는 컴포넌트는 비제어 컴포넌트라고 한다 왜냐하면 내부에 반영된 값들이 리액트에 의해 (상태가)제어되지 않기 때문.
//  리액트를 통해 값을 가져오긴 하지만 데이터를 인풋으로 피드백 해주지 않아서 nameInputRef.current.value = ''같은 걸 써서 비웠기 때문

export default AddUser;
