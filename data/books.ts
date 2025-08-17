interface IBook {
  title: string;
  coverUrl: string;
  spineBackgroundColor: string;
  spineForegroundColor: string;
}

const BOOKS: IBook[] = [
  {
    title: "14 Habits",
    coverUrl: "/books/book-1.jpg",
    spineBackgroundColor: "#FCE52D",
    spineForegroundColor: "#000",
  },
  {
    title: "Monk Mode",
    coverUrl: "/books/book-2.png",
    spineBackgroundColor: "#000",
    spineForegroundColor: "#fff",
  },
  {
    title: "The Effective Engineer",
    coverUrl: "/books/book-3.png",
    spineBackgroundColor: "#3AADA3",
    spineForegroundColor: "#fff",
  },
  {
    title: "Large Scale Web Apps",
    coverUrl: "/books/book-4.png",
    spineBackgroundColor: "#D85D27",
    spineForegroundColor: "#fffffd",
  },
  {
    title: "Advanced React",
    coverUrl: "/books/book-5.png",
    spineBackgroundColor: "#27282E",
    spineForegroundColor: "#fff",
  },
];

export default BOOKS;
