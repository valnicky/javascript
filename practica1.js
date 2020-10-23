/*function capitalize(str) {
    let firstLetter = str.indexOf('n').toUpperCase();
    let str1 = str.replace(firstLetter, 0);
    return str1;
}
capitalize("nana");*/

// List of movies
let movies = [{
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
];

function sortMoviesByRank(movies) {

    for (let j = 0; j < movies.length - 1; j++) {
        let movieJ = movies[j];
        let indJ = j;
        for (let i = j + 1; i < movies.length; i++) {
            if (movies[i].rank > movieJ.rank) {
                movieJ = movies[i];
                indJ = i;
            }
        }
        movies[indJ] = movies[j];
        movies[j] = movieJ;
    }
    return movies;
}

console.log(sortMoviesByRank(movies));

function sortMoviesByTitle(movies) {
    for (let j = 0; j < movies.length - 1; j++) {
        let moviesJ = movies[j];
        let indJ = j;

        for (let i = j + 1; i < movies.length; i++) {
            if (movies[i].title > moviesJ.title) {
                moviesJ = movies[i];
                indJ = i;
            }
        }
        movies[indJ] = movies[j];
        movies[j] = moviesJ;
    }
    return movies;
}

console.log(sortMoviesByTitle(movies));