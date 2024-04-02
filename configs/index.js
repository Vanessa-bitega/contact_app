const configs = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI ||'mongodb+srv://vanessabewe:0000@cluster0.ygzs1u4.mongodb.net/contact',
  secret: process.env.SECRET || "mysecret",
};

export default configs;
