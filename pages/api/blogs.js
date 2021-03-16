const blogs = [
    {
        title: 'BlogOne'
    },
    {
        title: 'BlogTwo'
    },
    {
        title: 'BlogThree'
    },
    {
        title: 'BlogFour'
    },
    {
        title: 'BlogFive'
    },
    {
        title: 'BlogSix'
    },
]

export default (req, res) => {
    res.status(200).json(blogs)
  }