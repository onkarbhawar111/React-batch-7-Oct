import WithMessage from "./withMessage";

const App1 = () => {
  const Hello = () => <h1>Hello User!</h1>;
  const EnhancedHello = WithMessage(Hello);

  return (
    <div>
      <EnhancedHello />
    </div>
  );
};

export default App1;
