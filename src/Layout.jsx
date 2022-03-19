import React from 'react';
import Box from "@mui/material/Box";

function Layout({children}) {
    return (
        <Box textAlign="center">
            <Box sx={{
                display: "flex",
                paddingTop: "20vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "calc(10px + 2vmin)",
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
