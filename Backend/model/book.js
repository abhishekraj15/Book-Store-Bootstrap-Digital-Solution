const mongoose = require('mongoose');



const Books = new mongoose.Schema(

  {
    id: {
      type: Number,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: String,
      allowNull: false,
    },
    author: {
      type: String,
      allowNull: false,
    },
    no_of_pages: {
      type: Number,
      allowNull: false,
    },
    published_at: {
      type: Date,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    tableName: "book",
  }
);

module.exports = mongoose.model("Book",Books);
