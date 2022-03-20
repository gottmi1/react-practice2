import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* props를 사용하여 재사용 가능하게 만들었다. type은 Button 컴포넌트를 사용하는 다른 컴포넌트에서 <Button type={aa} />를 자동으로 받을 수 있고 onClick도 마찬가지  */}
      {props.children}
    </button>
  );
};

export default Button;
