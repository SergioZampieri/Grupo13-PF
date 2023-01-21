const {User, Local, Book} = require("../../db")

const users = [{
    "id": "gioh2020@gmail.com",
    "name": "gioh",
    "password": "gioh2020",
    "phone": "3016444226",
    "image": "",
    "birthday": "2021-01-01",
    "city": "bogota"
},
{
    "id": "gersio.zampieri@gmail.com",
    "name": "gersioz",
    "password": "gersioz2020",
    "phone": "3016444226",
    "image": "https://www.jokesforfunny.com/wp-content/uploads/2021/06/0596bdb89b60fe771acd2f5972a9d3e3.jpg",
    "birthday": "1992-11-01",
    "city": "Tandil"
},
{
    "id": "sol@gmail.com",
    "name": "solgom",
    "password": "solgom2020",
    "phone": "3016444226",
    "image": "https://nextluxury.com/wp-content/uploads/funny-profile-pictures-7.jpg",
    "birthday": "1995-11-01",
    "city": "Cordoba"
},
{
    "id": "ignaluna@gmail.com",
    "name": "ignaluna",
    "password": "ignaluna2020",
    "phone": "3016444226",
    "image": "https://whatsappify.files.wordpress.com/2015/04/d176b-acid_picdump_78.jpg",
    "birthday": "1993-11-01",
    "city": "Punta del Este"
},
{
    "id": "sebas@gmail.com",
    "name": "sebas",
    "password": "sebas2020",
    "phone": "3016444226",
    "image": "https://howtoapps.com/wp-content/uploads/2020/01/a657e16c-funny-profile-pic-1-600x333.jpg",
    "birthday": "1993-11-01",
    "city": "Medellin"
},
{
    "id": "thomi@gmail.com",
    "name": "thomi",
    "password": "thomi2020",
    "phone": "3016444226",
    "image": "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700",
    "birthday": "1993-11-01",
    "city": "Santiago"
},
{
    "id": "gaston@gmail.com",
    "name": "gas",
    "password": "gas2020",
    "phone": "3016444226",
    "image": "https://i.pinimg.com/564x/6b/95/01/6b9501905d858837e8258c474c1f99c5.jpg",
    "birthday": "1993-11-01",
    "city": "Benidorm"
},
{
    "id": "jose@gmail.com",
    "name": "jose",
    "password": "jose2020",
    "phone": "3016444226",
    "image": "https://i.kym-cdn.com/photos/images/original/002/365/140/222.png",
    "birthday": "1993-11-01",
    "city": "Cosquin"
}]


const places =[
    {
		"userId":"gioh2020@gmail.com",
		"name": "Barcito",
		"category": "disco",
		"image": "https://cnnespanol.cnn.com/wp-content/uploads/2022/10/221004154233-01-world-best-bars-2022-full-169.jpg?quality=100&strip=info",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": false,
		"capacity": 2000,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "200.5",
		"available": true,
		"rating": 3
	},
{
		"userId":"gioh2020@gmail.com",
		"name": "el Bar de GioH",
		"category": "bar",
		"image": "https://conteudo.imguol.com.br/c/entretenimento/d3/2022/10/18/agito-do-bar-paradiso-de-barcelona-1666096825973_v2_4x3.jpg",
		"location": "https://www.google.com/maps/place/Gral.+Guemes+200+Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 200,
		"petFriendly": true,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "200.5",
		"available": true,
		"rating": 4
	},
{
		"userId":"gioh2020@gmail.com",
		"name": "Chiquito el Barcito",
		"category": "pub",
		"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/The_Queens_Arms_pub_-_Charlotte_Street_-_Birmingham_-_2005-10-14.jpg/640px-The_Queens_Arms_pub_-_Charlotte_Street_-_Birmingham_-_2005-10-14.jpg",
		"location": "https://www.google.com/maps/place/Gral.+Guemes+200+Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": false,
		"capacity": 150,
		"petFriendly": false,
		"ageRange": [18, 99],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "300",
		"available": true,
		"rating": 1
	},
{
		"userId":"gersio.zampieri@gmail.com",
		"name": "EL Pub de Sergio",
		"category": "pub",
		"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/The_Queens_Arms_pub_-_Charlotte_Street_-_Birmingham_-_2005-10-14.jpg/640px-The_Queens_Arms_pub_-_Charlotte_Street_-_Birmingham_-_2005-10-14.jpg",
		"location": "https://www.google.com/maps/place/Gral.+Guemes+200+Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 150,
		"petFriendly": true,
		"ageRange": [18, 99],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "200",
		"available": true,
		"rating": 5
	},
,
{
		"userId":"thomi@gmail.com",
		"name": "El Thomisaurodromo",
		"category": "bar",
		"image": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,f_jpg,q_64,w_587/https://images.citybreak.com/image.aspx%3FImageId%3D7124625",
		"location": "https://www.google.com/maps/place/Gral.+Guemes+200+Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 150,
		"petFriendly": true,
		"ageRange": [18, 99],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "200",
		"available": true,
		"rating": 3
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Antares",
		"category": "bar",
		"image": "https://www.baenegocios.com/__export/1669136555466/sites/cronica/img/2022/11/22/cerveza_artesanal_antares_1.jpg_792575817.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 4
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Baum",
		"category": "bar",
		"image": "https://www.mundocerveza.com/wp-content/uploads/2019/10/4-4.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 4
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Tandilia",
		"category": "bar",
		"image": "https://eldiariodetandil.com/contenido/noticias/original/1550624806.jpeg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 4
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Cheverry",
		"category": "bar",
		"image": "https://www.beerway.com.ar/archivos/imagenes/3201241885c4082f7d3838-2019-01-17-10-28-23.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 3
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Ogham",
		"category": "bar",
		"image": "https://media-cdn.tripadvisor.com/media/photo-s/0b/d8/2c/f4/cerveceria-ogham.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 3
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Sol Disco",
		"category": "disco",
		"image": "https://plandenoticiastandil.com/wp-content/uploads/2022/08/sol-disco.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 3
	},
	{
		"userId":"gioh2020@gmail.com",
		"name": "Glow",
		"category": "disco",
		"image": "https://10619-2.s.cdn12.com/rests/original/107_500173515.jpg",
		"location": "Gral. Guemes 200 Avellaneda",
		"menu": "https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg",
		"event": true,
		"capacity": 300,
		"petFriendly": false,
		"ageRange": [18, 45],
		"phone": "3017777777",
		"promo":"2x1",
		"bookPrice": "400.5",
		"available": true,
		"rating": 3
	},
]


const bulkCreate = async () => {
    users.forEach(e=>{
        User.create(e)
    })
    places.forEach(e=>{
        Local.create(e)
    })
    return "se creo"
}

module.exports = bulkCreate;