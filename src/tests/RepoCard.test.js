import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import RepoCard from "../components/RepoCard";


test('correctly displays repo card', async () => {
    const data = {
        name: "Test", description: "test description", url: "https://google.com", stars: 150,
        lastRelease: new Date().toISOString(), author: "Akim", avatar: "https://ru-static.z-dn.net/files/d88/0688b90b5155d8e99963dc6eb446ad69.png",
    };

    render(<RepoCard {...data}/>)

    await waitFor(() => screen.getByText("Test"), {timeout: 1000});

    expect(screen.getByText("test description")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://google.com");
})
