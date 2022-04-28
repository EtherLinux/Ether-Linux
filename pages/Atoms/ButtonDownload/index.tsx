import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled, Theme } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>
) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const blue = {
  50: "#F0F7FF2E",
  100: "#C2E0FF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  800: "#004C99",
  900: "#003A75",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  margin: 12px 1px;
  --main-color: ${theme.palette.mode === "light" ? blue[600] : blue[100]};
  --hover-color: ${theme.palette.mode === "light" ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === "light" ? blue[100] : blue[800]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: var(--font-family);
      font-weight: 500;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f3f3f3;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function UnstyledButtonCustom() {
  return <SvgButton>Download</SvgButton>;
}

