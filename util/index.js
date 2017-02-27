exports.onlyClass = (req, classModel) => {
  let classData
  classModel.find({alias: req.body.alias}, (err, data) => {
    if (err) {
      throw err
    }
    classData = data
  })
  return classData
}
