const {
    read,
    write
}= require("../domashna4/task1b");



const getAll = async ()=>{
    return await read();
 }
 const getOne = async (id)=>{
     let movies = await read();
     return  movies.find((movie)=> movie.id===id);
 }
 const deleteEl = async (id)=>{
     let movies = await read();
     movies = movies.filter((movie)=> movie.id!==id);
     await write(movies);
 }
 const addNew = async (newCarData)=>{
     let movies = await read();
     movies.push(newCarData);
     await write(movies);
 }
 const edit= async (id , editCarData) =>{
     let movies = await read();
     movies = movies.map(movie=>{
         if (movie.id ===id){
            return{
                ...movie,
                ...editCarData
            };
         }
         return movie;
     }) ;
     await write(movies);
 }
 module.exports = {
     getAll,
     getOne,
     deleteEl,
     addNew,
     edit
 }