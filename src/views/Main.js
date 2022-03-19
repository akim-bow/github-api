import React, {useEffect, useState} from 'react';
import RepoCard from "../components/RepoCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import {SEARCH_REPOSITORIES} from "../queries/repository";
import {useQuery} from "@apollo/client";
import Typography from "@mui/material/Typography";

function RepoList({query}) {
    const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
        variables: {query}
    });

    if (loading) return <Box><Typography variant={"h5"} color="text.primary">Loading ...</Typography></Box>;

    if (error) {
        console.log(error);
        return;
    }

    const repos = data.search.edges.map(edge => edge.node);

    return (
        <Grid container spacing={2} justifyContent="left" sx={{px: 2, maxWidth: 900}}>
            {
                repos.map(({name, description, owner: {login, avatarUrl}, stargazerCount, url, latestRelease}, index) => (
                    <Grid item key={index}>
                        <RepoCard name={name} author={login}
                                  avatar={avatarUrl}
                                  description={description}
                                  lastRelease={latestRelease ? latestRelease.createdAt : "Has no releases"} stars={stargazerCount}
                                  url={url}/>
                    </Grid>
                ))
            }
            <Grid item>
                <RepoCard name={"json-parser"} author={"Akim"}
                          avatar={"https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_3840x2400.jpg"}
                          description={"Test project for interacting with json data parsed from sites"}
                          lastRelease={"17.03.2022"} stars={133}
                          url={"https://github.com/styled-components/styled-components"}/>
            </Grid>
        </Grid>
    );
}

function Main() {
    const [token, setToken] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setToken(token);
        }
    }, []);

    const onSearchTextChange = e => setSearchText(e.target.value);

    const onTokenChange = e => {
        setToken(e.target.value);
        localStorage.setItem("token", e.target.value);
    };

    return (
        <>
            <Box sx={{mb: 4}}>
                <TextField
                    id="token"
                    label="Github token"
                    value={token}
                    onChange={onTokenChange}
                />
            </Box>
            <Box sx={{mb: 4}}>
                <TextField
                    id="search"
                    label="Search for repo"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}
                    value={searchText}
                    onChange={onSearchTextChange}
                />
            </Box>
            {token && searchText && <RepoList query={searchText}/>}
        </>
    );
}

export default Main;
