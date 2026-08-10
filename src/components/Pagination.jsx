import { Button, Box, Typography } from "@mui/material";

function Pagination({ page, totalPages, onPageChange }) {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: 3,
            }}
        >

            <Button
                variant="outlined"
                disabled={page === 0}
                onClick={() => onPageChange(page - 1)}
            >
                Précédent
            </Button>

            <Typography>
                Page {page + 1} / {totalPages}
            </Typography>

            <Button
                variant="outlined"
                disabled={page >= totalPages - 1}
                onClick={() => onPageChange(page + 1)}
            >
                Suivant
            </Button>

        </Box>
    );
}

export default Pagination;