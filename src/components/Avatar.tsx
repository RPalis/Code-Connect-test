import avatarImage from '../assets/avatar-image.png';

export type AvatarProps = {
  className?: string;
  initials?: string;
  shape?: 'Circle' | 'Square';
  size?: 'Large' | 'Small' | 'Medium';
  type?: 'Initial' | 'Image';
};

export function Avatar({ className, initials = 'F', shape = 'Circle', size = 'Large', type = 'Image' }: AvatarProps) {
  const safeInitials = initials.slice(0, 1);
  return (
    <div className={`sds-avatar sds-avatar--${size.toLowerCase()} sds-avatar--${shape.toLowerCase()} ${className ?? ''}`}>
      {type === 'Image' ? <img alt="" src={avatarImage} /> : <span>{safeInitials}</span>}
    </div>
  );
}