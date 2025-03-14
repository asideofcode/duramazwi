import {SvgIconButtonProps, SvgIcon} from './svg-icon'
import cx from "classnames";

type StyledAppBarSvgIconProps = SvgIconButtonProps & { active?: boolean };  

export default function StyledAppBarSvgIcon({ className, active, ...restOfProps }: StyledAppBarSvgIconProps) {  
  return (  
    <SvgIcon  
        {...restOfProps}  
        className={
            cx(  
                className,
                { 'text-blue-600': active } 
            )
        }  
    />  
  );  
}