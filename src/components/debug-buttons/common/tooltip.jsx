import { Tooltip } from "antd";

export const DelayedToolTip = ({children, ...props}) => {
    return (
        <Tooltip className={"hvr-grow"}
                 mouseEnterDelay={1}
                 mouseLeaveDelay={0.5}
                 {...props}>
            {children}
        </Tooltip>);
};
