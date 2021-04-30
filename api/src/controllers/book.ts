import BookRepository from "../repositories/book";

exports.getAll = async (req: any, res: any) => {
  try {
    const bookRepo: BookRepository = new BookRepository();
    const response = await bookRepo.getAll();
    res.status(200).send(response);
  } catch (err: any) {
    throw new Error(err);
  }
};

exports.getBook = async (req: any, res: any) => {
  try {
    const bookRepo: BookRepository = new BookRepository();
    const response = await bookRepo.getById(req.query.id);
    res.status(200).send(response);
  } catch (err: any) {
    throw new Error(err);
  }
};
