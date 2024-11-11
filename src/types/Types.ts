interface ICards {
    id: number;
    title: string;
    description: string;

}

const cards: ICards[] = [
    {
        id: 1,
        title: 'Python',
        description: 'Python is like a rabbit that can quickly learn and adapt to any skill; it’s easy to use and highly accessible. Just as a rabbit can cover large distances, Python is widely popular and has a vast community, making it suitable for various projects, from web development to data science.',
       
    },
    {
        id: 2,
        title: 'TypeScript',
        description: 'Similar to a rabbit with a keen instinct to avoid danger, TypeScript adds types to help developers avoid errors in their code. It’s JavaScript with a bit more "protection" and structure, enabling safer and more efficient coding.',
       
    },
    {
        id: 3,
        title: 'JavaScript',
        description: ' Like a rabbit that quickly adapts to its surroundings, JavaScript is agile and versatile, able to run in different environments (such as browsers and servers). It’s also fast and efficient for small, dynamic tasks.',
       
    },
    {
        id: 4,
        title: 'React',
        description: 'Like a rabbit building an organized burrow, React helps developers create well-structured, efficient applications. Components are like individual tunnels working together in one system, allowing for reusable and organized code.',
        
    },
    {
        id: 5,
        title: 'C#',
        description: 'This language is like a strong, resilient rabbit, designed for larger and more robust projects. With its structured and strongly-typed nature, it’s well-suited for complex applications, offering power and organization, like a rabbit building a deep, secure burrow.',
       
    },

];

export { cards };