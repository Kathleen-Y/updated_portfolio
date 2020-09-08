const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/updated_portfolio", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("server.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
