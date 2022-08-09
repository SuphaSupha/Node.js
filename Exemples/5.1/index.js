const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

const data = JSON.parse(`[{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipitnsuscipit recusandae consequuntur expedita et cumnreprehenderit molestiae ut ut quas totamnnostrum rerum est autem sunt rem eveniet architecto"
  }, {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitaensequi sint nihil reprehenderit dolor beatae ea dolores nequenfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisnqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iurenvoluptatem occaecati omnis eligendi aut adnvoluptatem doloribus vel accusantium quis pariaturnmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipiscinsit amet autem assumenda provident rerum culpanquis hic commodi nesciunt rem tenetur doloremque ipsam iurenquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sednalias aut fugiat sit autem sed estnvoluptatem omnis possimus esse voluptatibus quisnest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequinmollitia nobis aliquid molestiaenperspiciatis et ea nemo ab reprehenderit accusantium quasnvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitaenmagni quis enim qui quis quo nemo aut saepenquidem repellat excepturi ut quiansunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eumnfacilis quibusdam animi sint suscipit qui sint possimus cumnquaerat magni maiores excepturinipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolorenenim quia adnveniam autem ut quam aut nobisnet est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magnindoloribus qui repudiandaenvero nisi sitnquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 9,
    "id": 85,
    "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
    "body": "similique sed nisi voluptas iusto omnisnmollitia et quonassumenda suscipit officia magnam sint sed temporanenim provident pariatur praesentium atque animi amet ratione"
  },
  {
    "userId": 9,
    "id": 86,
    "title": "placeat quia et porro iste",
    "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beataenet quaerat et esse utnvoluptatem occaecati et vel explicabo autemnasperiores pariatur deserunt optio"
  },
  {
    "userId": 9,
    "id": 87,
    "title": "nostrum quis quasi placeat",
    "body": "eos et molestiaennesciunt ut andolores perspiciatis repellendus repellat aliquidnmagnam sint rem ipsum est"
  },
  {
    "userId": 9,
    "id": 88,
    "title": "sapiente omnis fugit eos",
    "body": "consequatur omnis est praesentiumnducimus non istenneque hic deseruntnvoluptatibus veniam cum et rerum sed"
  },
  {
    "userId": 9,
    "id": 89,
    "title": "sint soluta et vel magnam aut ut sed qui",
    "body": "repellat aut aperiam totam temporibus autem etnarchitecto magnam utnconsequatur qui cupiditate rerum quia soluta dignissimos nihil iurentempore quas est"
  },
  {
    "userId": 9,
    "id": 90,
    "title": "ad iusto omnis odit dolor voluptatibus",
    "body": "minus omnis soluta quianqui sed adipisci voluptates illum ipsam voluptatemneligendi officia ut inneos soluta similique molestias praesentium blanditiis"
  },
  {
    "userId": 10,
    "id": 91,
    "title": "aut amet sed",
    "body": "libero voluptate eveniet aperiam sednsunt placeat suscipit molestiasnsimilique fugit nam natusnexpedita consequatur consequatur dolores quia eos et placeat"
  },
  {
    "userId": 10,
    "id": 92,
    "title": "ratione ex tenetur perferendis",
    "body": "aut et excepturi dicta laudantium sint rerum nihilnlaudantium et atna neque minima officia et similique libero etncommodi voluptate qui"
  },
  {
    "userId": 10,
    "id": 93,
    "title": "beatae soluta recusandae",
    "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosamnvoluptatem quis enim recusandae ut sed suntnnostrum est odit totamnsit error sed sunt eveniet provident qui nulla"
  },
  {
    "userId": 10,
    "id": 94,
    "title": "qui qui voluptates illo iste minima",
    "body": "aspernatur expedita soluta quo ab ut similiquenexpedita dolores ametnsed temporibus distinctio magnam saepe delenitinomnis facilis nam ipsum natus sint similique omnis"
  },
  {
    "userId": 10,
    "id": 95,
    "title": "id minus libero illum nam ad officiis",
    "body": "earum voluptatem facere provident blanditiis velit laboriosamnpariatur accusamus odio saepencumque dolor qui a dicta ab doloribus consequatur omnisncorporis cupiditate eaque assumenda ad nesciunt"
  },
  {
    "userId": 10,
    "id": 96,
    "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    "body": "in non odio excepturi sint eumnlabore voluptates vitae quia qui etninventore itaque rerumnveniam non exercitationem delectus aut"
  },
  {
    "userId": 10,
    "id": 97,
    "title": "quas fugiat ut perspiciatis vero provident",
    "body": "eum non blanditiis soluta porro quibusdam voluptasnvel voluptatem qui placeat dolores qui velit autnvel inventore aut cumque culpa explicabo aliquid atnperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
  },
  {
    "userId": 10,
    "id": 98,
    "title": "laboriosam dolor voluptates",
    "body": "doloremque ex facilis sit sint culpansoluta assumenda eligendi non ut eiusnsequi ducimus vel quasinveritatis est dolores"
  },
  {
    "userId": 10,
    "id": 99,
    "title": "temporibus sit alias delectus eligendi possimus magni",
    "body": "quo deleniti praesentium dicta non quodnaut est molestiasnmolestias et officia quis nihilnitaque dolorem quia"
  },
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt solutanipsa voluptas error itaque dicta innautem qui minus magnam et distinctio eumnaccusamus ratione error aut"
  }]`);

//1
app.get("/posts", (req, res) => {
  res.send(data);
});

//2
app.get("/posts/:model", (req, res) => {
  const idFilter = data.filter((arr) => arr.id === +req.params.model);
  res.send(idFilter);
});

//3
app.get("/posts?title=", (req, res) => {
  const titles = data.filter(
    (arr) => arr.title.toLowerCase() === req.params.model.toLowerCase()
  );
  res.send(titles);
});

//4

const newPostObject = {
  userId: 40,
  id: "13",
  title: "Jasajsaj",
  body: "Vakaras",
};

app.post("/posts", (req, res) => {
  newPostObject.push(req.body.post);
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
