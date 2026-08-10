import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ value, onChange, placeholder = "Rechercher..." }) {
    return (
        <TextField
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size="small"
            sx={{
                width: 400,
                mb: 3,

                "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="action" />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchBar;