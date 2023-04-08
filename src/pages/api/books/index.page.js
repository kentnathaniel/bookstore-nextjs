import { prisma } from "@/services/prisma";
import nc from "next-connect";
import validateMethod from "@/middlewares/validateMethod";
import withUploader from "@/middlewares/uploader";
import { authenticateToken } from "@/middlewares/authenticate";

export const getBooks = async () => {
  const books = await prisma.book.findMany();

  return books;
};

const getBooksResponse = async (req, res) => {
  const books = await getBooks();
  res.json({ books });
};

const uploadBook = async (req, res) => {
  const { title, author, publisher, year, pages } = req.body;

  try {
    const book = await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages),
        image: req.file.path.split("public")[1],
      },
    });
    res.json({ book });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ message: "Book already exists" });
  }
};

const handler = nc()
  .use(validateMethod(["POST", "GET"]))
  .use(withUploader("image"))
  .use(authenticateToken())
  .get(getBooksResponse)
  .post(uploadBook);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
