import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function SearchBar() {
  const todos = useSelector((state: RootState) => state.todos);

  const flatProps = {
    options: todos.map((option) => option.text),
  };

  return (
    <>
      <Stack spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          {...flatProps}
          id="clear-on-escape"
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Search Todo" variant="standard" />
          )}
        />
      </Stack>
    </>
  );
}
