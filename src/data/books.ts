export type BookType = {
    id: number;
    slug: string;
    title: string;
    author: string;
    year: number;
    description: string;
};

export const books: BookType[] = [
    {
        id: 1,
        slug: "to-kill-a-mockingbird",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        description: "A young girl in the Depression-era South watches her father, a lawyer, defend a Black man falsely accused of raping a white woman, confronting racial injustice and moral complexity."
    },
    {
        id: 2,
        slug: "1984",
        title: "1984",
        author: "George Orwell",
        year: 1949,
        description: "In a totalitarian future ruled by Big Brother, Winston Smith rebels against a regime that controls truth, language, and even thought itself."
    },
    {
        id: 3,
        slug: "pride-and-prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        description: "Elizabeth Bennet navigates manners, marriage, and misconceptions in Regency England while sparring with the proud Mr. Darcy."
    },
    {
        id: 4,
        slug: "the-great-gatsby",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        description: "Jay Gatsby's lavish parties and obsessive love for Daisy Buchanan expose the hollow glamour and moral decay of the Jazz Age."
    },
    {
        id: 5,
        slug: "one-hundred-years-of-solitude",
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: 1967,
        description: "The multi-generational saga of the Buendía family in the mythical town of Macondo, a landmark of magical realism and Latin American literature."
    },
    {
        id: 6,
        slug: "the-catcher-in-the-rye",
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        year: 1951,
        description: "Teenager Holden Caulfield wanders New York City after being expelled from school, voicing alienation, grief, and disdain for adult 'phoniness.'"
    },
    {
        id: 7,
        slug: "things-fall-apart",
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        year: 1958,
        description: "Okonkwo, a respected Igbo warrior, sees his world shattered by the arrival of British colonialism and Christian missionaries in Nigeria."
    },
    {
        id: 8,
        slug: "dune",
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        description: "Paul Atreides is thrust into a desert planet's brutal politics, spice trade, and prophecy, in a sweeping tale of power, ecology, and destiny."
    },
    {
        id: 9,
        slug: "beloved",
        title: "Beloved",
        author: "Toni Morrison",
        year: 1987,
        description: "Set after the American Civil War, a formerly enslaved woman is haunted—literally and emotionally—by the daughter she lost to slavery."
    },
    {
        id: 10,
        slug: "the-hobbit",
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        description: "Bilbo Baggins, a comfortable hobbit, is swept into an adventure with dwarves and a wizard to reclaim treasure from the dragon Smaug."
    }
];

// Fake slow fetch
export async function getBooks() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return books;
}