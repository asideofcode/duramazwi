import {SvgIconButtonProps, SvgIcon} from './svg-icon'
import cx from "classnames";

type StyledAppBarSvgIconProps = SvgIconButtonProps & { active?: boolean };

export default function StyledAppBarSvgIcon({ className, active, ...restOfProps }: StyledAppBarSvgIconProps) {
  return (
    <SvgIcon
        {...restOfProps}
        className={
            cx(
                'inline-block h-6 w-6 cursor-pointer hover:text-[var(--color-primary)] hover:scale-110 transition-transform duration-200',
                className,
                { 'text-[var(--color-primary)]': active }
            )
        }
    />
  );
}
