// Packages
import React from 'react';

// Styles
import { StyledTypography } from './Typography.styles';

// Interfaces
import { TypographyInterface } from './Typography.interface'


const Typography: React.FC<TypographyInterface> = (props) => {
  const { children, variant, className, handleClick, color} = props
  return (
    <StyledTypography
      variant={variant}
      className={className}
      handleClick={handleClick}
      color={color}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
