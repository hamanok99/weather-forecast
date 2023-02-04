import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <MuiButton variant="contained" onClick={onClick}>
      検索
    </MuiButton>
  );
};
