

export const MONGODB_URI = "mongodb+srv://abhilashsk1998:weIlcm4nc2Xk94b6@cluser0.1tmh6.mongodb.net/cofi_shop?retryWrites=true&w=majority&appName=Cluser0";


// db.createCollection("coffeeBags", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [
//         "name",
//         "price",
//         "description",
//         "tag",
//         "inventoryCount",
//         "rating",
//         "image",
//         "images",
//         "netWeight",
//         "variant",
//       ],
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         price: {
//           bsonType: "number",
//           description: "must be a string and is required",
//         },
//         tag: {
//           bsonType: "string",
//           description: "must be a string",
//         },
//         variant: {
//           bsonType: "string",
//           description: "string",
//         },
//         description: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         inventoryCount: {
//           bsonType: "number",
//           description: "must be a number and is required",
//         },
//         rating: {
//           bsonType: "number",
//           description: "must be a number and is required",
//         },
//         image: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         images: {
//           bsonType: "array",
//           description: "must be an array and is required",
//           items: {
//             bsonType: "string",
//             description: "List of image URLs",
//           },
//         },
//           netWeight: {
//               bsonType: "array",
//               description: "must be an array and is required",
//               items: {
//                   bsonType: "string",
//                   description: "List of net weights"
//               }
//         },
//       },
//     },
//   },
// });

// db.instant.insertOne({
//   name: "Crema Elegant",
//   price: 280,
//   description:
//     "A luxurious instant coffee with a rich crema. Smooth and velvety, with subtle caramelized sweetness, it offers a barista-style experience in seconds.",
//   tag: "Instant",
//   variant: "Velvety & Creamy",
//   category: "Instant",
//   inventoryCount: 800,
//   rating: 5,
//   image:
//     "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//   images: [
//     "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//     "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//   ],
//   netWeight: ["50g", "80g", "120g"],
// });

// db.coffeeBags.insertMany([
//   {
//     name: "Original Blend",
//     price: 520,
//     description:
//       "A well-rounded, medium roast with subtle nutty and chocolatey notes. Smooth, rich, and versatile—perfect for any brewing method.",
//     tag: "Coffee Bags",
//     variant: "Balanced & Crisp",
//     inventoryCount: 320,
//     rating: 5,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
//   {
//     name: "French Vanilla",
//     price: 420,
//     description:
//       "A silky, smooth roast infused with the comforting warmth of vanilla. Naturally sweet with a hint of caramel, delivering a luxurious coffee experience.",
//     tag: "Coffee Bags",
//     variant: "Creamy & Aromatic",
//     inventoryCount: 2030,
//     rating: 4,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
//   {
//     name: "Hazelnut",
//     price: 500,
//     description:
//       "A rich, aromatic roast featuring warm, toasty hazelnut flavors with a touch of cocoa. Smooth and satisfying, perfect for a comforting brew.",
//     tag: "Coffee Bags",
//     variant: "Nutty & Smooth",
//     inventoryCount: 4500,
//     rating: 5,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
//   {
//     name: "Dark Roast",
//     price: 310,
//     description:
//       "A full-bodied, intense roast with rich dark chocolate undertones and a hint of smokiness. Perfect for those who love strong, bold coffee with a smooth finish.",
//     tag: "Coffee Bags",
//     variant: "Deep & Smoky",
//     inventoryCount: 1300,
//     rating: 4.8,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
//   {
//     name: "Cinnamon",
//     price: 350,
//     description:
//       "A warm, aromatic roast with the comforting spice of cinnamon, balanced with a smooth coffee base. A cozy and flavorful brew for any time of the day.",
//     tag: "Coffee Bags",
//     variant: "Warm & Spiced",
//     inventoryCount: 800,
//     rating: 4.6,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
//   {
//     name: "Caramel",
//     price: 460,
//     description:
//       "A rich and buttery coffee infused with the smooth sweetness of caramel. A perfect balance of deep coffee notes and a creamy finish.",
//     tag: "Coffee Bags",
//     variant: "Sweet & Buttery",
//     inventoryCount: 1050,
//     rating: 4.7,
//     image:
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//     images: [
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783835/ai-generated-7789176_yjh4w5.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1742783833/ai-generated-8223836_t2kkoq.webp",
//       "https://res.cloudinary.com/dalynzj2f/image/upload/v1733896298/samples/coffee.jpg",
//     ],
//     netWeight: ["50g", "80g", "120g"]
//   },
// ]);