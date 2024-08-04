import classNames from 'classnames';

function Button({ className, children, onClick, outline }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, { 'button--outline': outline })}
    >
      {children}
    </button>
  );
}
export default Button;
