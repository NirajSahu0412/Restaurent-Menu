const Menu = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    course: "Main Course",
    category: "Italian",
    type: "Non-Vegetarian",
    price: 12.99,
    description: "Spaghetti pasta topped with a rich meat sauce.",
    image:
      "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1908&q=80",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    course: "Main Course",
    category: "Italian",
    type: "Vegetarian",
    price: 10.99,
    description: "Classic pizza topped with tomato, mozzarella, and basil.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hcmdoZXJpdGElMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Caesar Salad",
    course: "Starter",
    category: "Salads",
    type: "Vegetarian",
    price: 6.99,
    description:
      "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
    image:
      "https://plus.unsplash.com/premium_photo-1664478283448-94d7b72a23ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Sushi Platter",
    course: "Main Course",
    category: "Japanese",
    type: "Non-Vegetarian",
    price: 15.99,
    description: "Assorted sushi rolls with pickled ginger and wasabi.",
    image:
      "https://images.unsplash.com/photo-1616431575978-ad28681d658e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFN1c2hpJTIwUGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    course: "Main Course",
    category: "Italian",
    type: "Vegetarian",
    price: 11.99,
    description: "Creamy risotto with sautéed mushrooms and parmesan.",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg",
  },
  {
    id: 6,
    name: "Chicken Alfredo Pasta",
    course: "Main Course",
    category: "Italian",
    type: "Non-Vegetarian",
    price: 14.99,
    description:
      "Fettuccine pasta tossed in a creamy Alfredo sauce with grilled chicken.",
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2021/05/Chicken-Alfredo-Pasta-1x1-1.jpg",
  },
  {
    id: 7,
    name: "Greek Salad",
    course: "Starter",
    category: "Salads",
    type: "Vegetarian",
    price: 7.99,
    description:
      "Crisp lettuce, tomatoes, cucumbers, feta cheese, and olives with olive oil dressing.",
    image:
      "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Gt/2022/06/07/19912/WEB_GT_2022_02_HELLENIKA_0130.gif?width=768&height=639&mode=crop&quality=75&anchor=middlecenter",
  },
  {
    id: 8,
    name: "Tempura Shrimp",
    course: "Appetizer",
    category: "Japanese",
    type: "Non-Vegetarian",
    price: 9.99,
    description:
      "Deep-fried shrimp in a light and crispy batter, served with dipping sauce.",
    image:
      "https://twosleevers.com/wp-content/uploads/2023/03/Shrimp-Tempura-1.png",
  },
  {
    id: 9,
    name: "Vegetable Stir-Fry",
    course: "Main Course",
    category: "Asian",
    type: "Vegetarian",
    price: 12.99,
    description:
      "Assorted vegetables stir-fried in a savory sauce, served with steamed rice.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/veggie-stir-fry-1597687367.jpg?crop=0.793xw:0.793xh;0.0619xw,0.0928xh&resize=1200:*",
  },
  {
    id: 10,
    name: "Beef Tacos",
    course: "Main Course",
    category: "Mexican",
    type: "Non-Vegetarian",
    price: 10.99,
    description:
      "Soft or hard shell tacos filled with seasoned beef, lettuce, cheese, and salsa.",
    image:
      "https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg",
  },
  {
    id: 11,
    name: "Caprese Salad",
    course: "Starter",
    category: "Italian",
    type: "Vegetarian",
    price: 8.99,
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2021/07/Caprese-Salad-1-scaled.jpg",
  },
  {
    id: 12,
    name: "Beef Burrito",
    course: "Main Course",
    category: "Mexican",
    type: "Non-Vegetarian",
    price: 11.99,
    description:
      "A flour tortilla filled with seasoned beef, beans, rice, and vegetables.",
    image:
      "https://foodhub.scene7.com/is/image/woolworthsltdprod/1907-easy-beef-burritos-with-rice-and-beans:Mobile-1300x1150",
  },
  {
    id: 13,
    name: "Pho",
    course: "Main Course",
    category: "Vietnamese",
    type: "Non-Vegetarian",
    price: 13.99,
    description:
      "Vietnamese noodle soup with beef or chicken, fresh herbs, and rice noodles.",
    image:
      "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/11cd4cd9-9a5e-426f-a91a-f64bdf84812f/2023_06_09EOS+M506018.jpg",
  },
  {
    id: 14,
    name: "Tiramisu",
    course: "Dessert",
    category: "Italian",
    type: "Vegetarian",
    price: 5.99,
    description:
      "Classic Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cheese.",
    image:
      "https://bakeplaysmile.com/wp-content/uploads/2022/06/tiramisu-square.jpg",
  },
  {
    id: 15,
    name: "Pad Thai",
    course: "Main Course",
    category: "Asian",
    type: "Non-Vegetarian",
    price: 12.99,
    description:
      "Stir-fried Thai noodles with shrimp or chicken, peanuts, and vegetables.",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg",
  },
  {
    id: 16,
    name: "Vegetable Biryani",
    course: "Main Course",
    category: "Indian",
    type: "Vegetarian",
    price: 11.99,
    description:
      "Fragrant basmati rice cooked with assorted vegetables and aromatic spices.",
    image:
      "https://www.cookshideout.com/wp-content/uploads/2017/03/Hyderabadi-Veg-Biryani-Thali-FI.jpg",
  },
  {
    id: 17,
    name: "Shrimp Scampi",
    course: "Main Course",
    category: "Seafood",
    type: "Non-Vegetarian",
    price: 15.99,
    description:
      "Succulent shrimp sautéed in garlic, butter, and white wine, served over pasta.",
    image:
      "https://lynnswayoflife.com/wp-content/uploads/2023/03/DSC_0438-500x500.jpg",
  },
  {
    id: 18,
    name: "Mushroom Swiss Burger",
    course: "Main Course",
    category: "Burgers",
    type: "Non-Vegetarian",
    price: 13.99,
    description:
      "Juicy beef patty topped with sautéed mushrooms and melted Swiss cheese.",
    image:
      "https://bestbeefrecipes.com/wp-content/uploads/2023/06/mushroom-swiss-burger-featured.jpg",
  },
  {
    id: 19,
    name: "Margarita Cocktail",
    course: "Beverage",
    category: "Cocktails",
    type: "Non-Alcoholic",
    price: 7.99,
    description:
      "A refreshing mix of lime juice, soda, and a hint of sweetness, garnished with a lime slice.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/margarita-cocktail-royalty-free-image-1592385196.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 20,
    name: "Garden Vegetable Pizza",
    course: "Main Course",
    category: "Italian",
    type: "Vegetarian",
    price: 12.99,
    description:
      "Pizza topped with a variety of fresh garden vegetables and mozzarella cheese.",
    image:
      "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/garden-fresh-veggie-pizza-recipe.jpg",
  },
];

export default Menu;
