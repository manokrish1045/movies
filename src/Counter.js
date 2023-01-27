import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    const [Like, setlike] = useState(0);
    const [Dislike, setdislike] = useState(0);
    useEffect(() => {
        console.log("like is updated", Like);
    }, [Like, Dislike])
    return (
        <div className="App1">
            <IconButton
                onClick={() => setlike(Like + 1)}
                color="primary"
                aria-label="dislike the movie">
                <Badge badgeContent={Like} color="secondary">
                    👍
                </Badge>

            </IconButton>

            <IconButton
                onClick={() => setdislike(Dislike + 1)}
                color="error" aria-label="dislike the movie">
                <Badge badgeContent={Dislike} color="error">
                    👎
                </Badge>
            </IconButton>

        </div>
    );
}
