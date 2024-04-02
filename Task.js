const {
    getAll,
     getOne,
     deleteEl,
     addNew,
     edit
} = require("../domashna4/task1");
let movies;
(async ()=>{
    try {
        await addNew({name:"AUDI5" ,year:  2017,rating:9.5,id:0});
        await addNew({name:"The Dark Knight" ,year: 2008 ,rating:8.6,id:1});
        await addNew({name:"Goodfellas" ,year:1990 ,rating:6.5,id:2});
        await addNew({name:"Alien" ,year: 1979 ,rating:7.7,id:3});
        movies = await getAll();
        console.log(movies);
        const movie = await getOne(2);
        console.log(movie);
        await deleteEl(1);
        movies = await getAll();
        console.log(movies);
        await edit(2,{name:"Mad Max: Fury Road", year:2015});
        movies = await getAll();
        console.log(movies);
    }
    catch (err){

        console.log("ERROR",err);
    }
    finally {

        console.log("code has finished executing");
    }


})();