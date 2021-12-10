// Schrijf hier je code
function actorCount(movie)
{
    return movie.actors.length;
}

function formatTime(runtime)
{
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    if ( hours === 0 )
    {
        return `${minutes}min`;
    }
    else
    {
        return `${hours}h ${minutes}min`;
    }
}

function moviesWithActor(movies, actor)
{
    return movies.filter(movie => movie.actors.includes(actor))
                 .map(movie => movie.title);
}

function removeDuplicates(xs)
{
    const result = [];

    for ( const x of xs )
    {
        if ( !result.includes(x) )
        {
            result.push(x);
        }
    }

    return result;
}

function directors(movies)
{
    return removeDuplicates(movies.map(movie => movie.director));
}

function actors(movies)
{
    return removeDuplicates(movies.flatMap(movie => movie.actors));
}

function moviesByActor(movies)
{
    const result = {};

    for ( const actor of actors(movies) )
    {
        result[actor] = moviesWithActor(movies, actor);
    }

    return result;
}

function actorWithMostMovies(movies)
{
    const movieActors = actors(movies);
    let actorWithMostMovies = movieActors[0];

    for ( const movieActor of movieActors.slice(1) )
    {
        if ( actorMovieCount(movies, movieActor) > actorMovieCount(movies, actorWithMostMovies) )
        {
            actorWithMostMovies = movieActor;
        }
    }

    return actorWithMostMovies;
}

function actorMovieCount(movies, actor)
{
    return moviesWithActor(movies, actor).length;
}

function totalMinutesDirected(movies)
{
    const result = {};

    for ( const director of directors(movies) )
    {
        result[director] = totalMinutesDirectedBy(movies, director);
    }

    return result;
}

function moviesDirectedBy(movies, director)
{
    return movies.filter(movie => movie.director === director);
}

function totalMinutesDirectedBy(movies, director)
{
    return sum(moviesDirectedBy(movies, director).map(movie => movie.runtime));
}

function extractTitle(poster)
{
    return poster.map(line => line.split(' ').filter(s => s.length > 0)).flat().join(" ");
}

function sum(ns)
{
    return ns.reduce((x, y) => x + y, 0);
}

function createMapping(keys, valueFunction)
{
    const result = {};

    for ( const key of keys )
    {
        const value = valueFunction(key);
        result[key] = value;
    }

    return result;
}

function categorize(movies)
{
    if ( movies.length === 0 )
    {
        return { short: [], medium: [], long: [] };
    }
    else
    {
        const [ movie, ...rest ] = movies;
        const result = categorize(rest);

        if ( movie.runtime < 90 )
        {
            result.short.push(movie.title);
            result.short.sort();
        }
        else if ( movie.runtime < 150 )
        {
            result.medium.push(movie.title);
            result.medium.sort();
        }
        else
        {
            result.long.push(movie.title);
            result.long.sort();
        }

        return result;
    }
}
