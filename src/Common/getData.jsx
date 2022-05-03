// export function getData(query) {
//     const response = fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b359e5e7144c9fea70db6d5bb29245d&language=en-US&query=${query}`)
//     const solution = response.then(res => JSON.stringify(res));
//     return solution;
// }



// uzsikomentinam
// export async function getData(inputText) {
//     try {
//         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b359e5e7144c9fea70db6d5bb29245d&language=en-US&query=${inputText}`);
//         return JSON.stringify(response);
//     }
//     catch (error) { console.log(error); }
// }