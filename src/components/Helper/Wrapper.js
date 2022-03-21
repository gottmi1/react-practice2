const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// 기본적으로 빈 컴포넌트지만, props.children을 리턴하기 때문에, 최상위 root요소로 쓸 수 있다.
