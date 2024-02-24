// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}

// Define the function to show magicians
function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Initial array of magicians
let magicians: string[] = ["Merlin", "Gandalf", "Dumbledore"];

// Make a copy of the array
let originalMagicians: string[] = [...magicians];

// Call makeGreat with a copy of the array
let greatMagicians: string[] = makeGreat([...magicians]);

// Show the original array
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show the array with Great added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);