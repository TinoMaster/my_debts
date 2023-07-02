export const Principal_Menu = (props) => {
  const { bg, title } = props;
  return (
    <div style={{ backgroundColor: `${bg}` }} className={`w-full flex`}>
      <h2>{title}</h2>
    </div>
  );
};
