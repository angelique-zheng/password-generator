import React from 'react';

export interface UIIconOptions {
    width?: string | number;
    height?: string | number;
    fill?: string;
}

export interface UIIconInterface extends UIIconOptions {
    icon: string;
}

export const UIIcon = ({ icon, ...props }: UIIconInterface) => {
    return React.createElement(icon, props);
};
