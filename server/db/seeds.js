use ringing_app;
db.dropDatabase();

db.changes.insertMany(
    [
        {
            name: "Kings",
            on_eight: [1, 3, 2, 5, 4, 7, 6, 8],
            on_six: [1, 3, 2, 5, 4, 6]
        },
        {
            name: "Queens",
            on_eight: [1, 3, 5, 7, 2, 4, 6, 8],
            on_six: [135246]
        },
        {
            name: "Whittingtons",
            on_eight: [1, 7, 5, 3, 2, 4, 6, 8],
            on_six: [5, 3, 1, 2, 4, 6]
        },
        {
            name: "Tittums",
            on_eight: [1, 5, 2, 6, 3, 7, 4, 8],
            on_six: [1, 4, 2, 5, 3, 6]
        },
        {
            name: "Back rounds",
            on_eight: [7, 6, 5, 4, 3, 2, 1, 8],
            on_six: [5, 4, 3, 2, 1, 6]
        },
    ]
);