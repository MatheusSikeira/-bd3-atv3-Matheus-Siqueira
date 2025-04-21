use ('bd3_atv3');

db.createCollection("bd3_atv3_produtos");

const produtos = require('./produtos.json');


db.bd3_atv3_produtos.insertMany(produtos);

//(A)
db.bd3_atv3_produtos.find().sort({ valor: -1 }).limit(1);
//(B)
db.bd3_atv3_produtos.find().sort({ valor: 1 }).limit(1);
//(C)
db.bd3_atv3_produtos.find({ valor: { $gte: 500, $lte: 1500 } });
//(D)
db.bd3_atv3_produtos.find({ categoria: "Eletrônicos" });
//(E)
db.bd3_atv3_produtos.find({ categoria: { $in: ["Eletrônicos", "Móveis"] } });
//(F)
db.bd3_atv3_produtos.find({ categoria: { $nin: ["Eletrônicos", "Móveis"] } });
//(G)
db.bd3_atv3_produtos.find().sort({ valor: 1 });
//(H)
db.bd3_atv3_produtos.find().sort({ valor: -1 });
//(I)
db.bd3_atv3_produtos.find({ categoria: "Eletrônicos" }).sort({ valor: 1 });
//(J)
db.bd3_atv3_produtos.find({ categoria: { $ne: "Eletrônicos" } }).sort({ valor: -1 });