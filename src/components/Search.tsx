import React from "react";
import { Select as MuiSelect } from "./Select";
import { Button as MuiButton } from "./Button";
import { SelectChangeEvent, Stack } from "@mui/material";

type SearchProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ onClick, onChange }: SearchProps) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <div>
          <MuiSelect onChange={onChange} />
        </div>
        <div style={{ margin: "9px" }}>
          <MuiButton onClick={onClick} />
        </div>
      </Stack>
    </>
  );
};
