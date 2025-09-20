import { IBook } from "@/types/types";
import book1 from "/public/books/book-1.jpg";
import book2 from "/public/books/book-2.png";
import book3 from "/public/books/book-3.png";
import book4 from "/public/books/book-4.png";
import book5 from "/public/books/book-5.png";

const BOOKS: IBook[] = [
  {
    title: "14 Habits",
    coverUrl: book1,
    spineBackgroundColor: "#FCE52D",
    spineForegroundColor: "#000",
  },
  {
    title: "Monk Mode",
    coverUrl: book2,
    spineBackgroundColor: "#272727",
    spineForegroundColor: "#fff",
  },
  {
    title: "The Effective Engineer",
    coverUrl: book3,
    spineBackgroundColor: "#3AADA3",
    spineForegroundColor: "#fff",
  },
  {
    title: "Large Scale Web Apps",
    coverUrl: book4,
    spineBackgroundColor: "#D85D27",
    spineForegroundColor: "#fffffd",
  },
  {
    title: "Advanced React",
    coverUrl: book5,
    spineBackgroundColor: "#27282E",
    spineForegroundColor: "#fff",
  },
];

export default BOOKS;
