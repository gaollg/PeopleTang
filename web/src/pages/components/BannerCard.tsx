import cn from 'classnames';

interface BannerProps {
  url: string;
  title?: string;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href?: string;
  disableBorderRadius?: boolean;
}

export default function BannerCard({
  url,
  title,
  className,
  variant = 'rounded',
  effectActive = true,
  classNameInner,
  href,
  disableBorderRadius = false,
}: BannerProps) {
  return (
    <div className={cn('mx-auto w-full h-full', className)}>
      <div className={cn('h-full group flex justify-center relative overflow-hidden cursor-pointer', classNameInner)}>
        <img
          src={url}
          alt={title}
          className={cn('object-cover w-full', {
            'rounded-md': variant === 'rounded' && !disableBorderRadius,
          })}
        />
        {effectActive && (
          <div className="absolute top-0 -left-[100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </div>
    </div>
  );
}
