export default function SocialContact({ icon, ...rest }) {
  return (
    <div {...rest}>
      <a href="">
        <i className={icon}></i>
      </a>
    </div>
  );
}
