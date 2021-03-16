const books = [
    {
        title: "All Worlds Unseen vol 1: Aurora"
    },
    {
        title: "All Worlds Unseen vol 2: Avalonne"
    },
    {
        title: "Mean Tales and Other Lives"
    },
    {
        title: "Norm’s Attempt"
    },
    {
        title: "Twisted 50"
    }
]

export default (req, res) => {
    res.status(200).json(books)
  }